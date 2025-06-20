import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GET_WETMILLS } from "../../../graphql/queries/wetmills";
import { GET_WETMILL_VISITS } from "../../../graphql/queries/wetmillVisit";
import { GET_WETMILL_BAS } from "../../../graphql/queries/usersRequests";
import { de } from "date-fns/locale";
import { useOutletContext } from "react-router-dom";

let DEFAULT_SF_PROJECT_ID = "a0EOj000004XC1hMAG"; // Default project ID for Ethiopia Regrow USDA



export const useDashboardData = () => {

  const { program } = useOutletContext();

  console.log("Program in useDashboardData:", program);

  if (program === "Ethiopia Regrow USDA") {
    DEFAULT_SF_PROJECT_ID = "a0EOj000004XC1hMAG";
  }
  else if (program === "Ethiopia CREW GAC") {
    DEFAULT_SF_PROJECT_ID = "a0EOj000004XC3JMAW";

  }
  else if (program === "Ethiopia Nespresso") {
    DEFAULT_SF_PROJECT_ID = "a0EOj000004XC4vMAG";

  }
  else {
    DEFAULT_SF_PROJECT_ID = "a0EOj000004FvmrMAC";
  }

  const {
    data: millsData,
    loading: millsLoading,
    error: millsError,
  } = useQuery(GET_WETMILLS, {
    variables: { program }
  });
  const {
    data: baData,
    loading: baLoading,
    error: baError,
  } = useQuery(GET_WETMILL_BAS, {
    variables: { sfProjectId: DEFAULT_SF_PROJECT_ID },
  });
  const {
    data: visitsData,
    loading: visitsLoading,
    error: visitsError,
  } = useQuery(GET_WETMILL_VISITS, { variables: { program: program } });

  const wetmills = millsData?.getWetmills?.wetmills || [];
  const businessAdvisors = baData?.getWetMillBusinessAdvisors?.advisors || [];
  const visits = visitsData?.getVisits?.visits || [];

  console.log("Visits Data:", visits);

  const millsCount = wetmills.length;
  const basCount = businessAdvisors.length;

  const visitsPerWeekData = useMemo(() => {
    const map = {};

    visits.forEach((v) => {
      const date = new Date(v.visited_at);

      const year = date.getFullYear();
      const month = date.getMonth(); // 0-based
      const day = date.getDate();

      const firstDayOfMonth = new Date(year, month, 1);
      const week = Math.ceil((day + firstDayOfMonth.getDay()) / 7); // Week of the month
      const monthLabel = date.toLocaleString("default", { month: "short" }); // "Apr"

      const label = `${monthLabel} W${week}`;

      // Use first day of that week as a consistent timestamp
      const sortKey = new Date(year, month, (week - 1) * 7 + 1).getTime();

      if (!map[label]) {
        map[label] = { count: 0, sortKey };
      }

      map[label].count += 1;
    });

    return Object.entries(map)
      .map(([week, { count, sortKey }]) => ({ week, count, sortKey }))
      .sort((a, b) => a.sortKey - b.sortKey) // Oldest first
      .map(({ week, count }) => ({ week, count })); // Strip sortKey
  }, [visits]);

  const ownershipData = useMemo(() => {
    const map = {};
    wetmills.forEach((w) => {
      const key = w.mill_status || "Unknown";
      map[key] = (map[key] || 0) + 1;
    });
    return Object.entries(map).map(([label, count]) => ({ label, count }));
  }, [wetmills]);

  const exportingStatusData = useMemo(() => {
    const map = {};
    wetmills.forEach((w) => {
      const key = w.exporting_status ? "Exporter" : "Non-exporter";
      map[key] = (map[key] || 0) + 1;
    });
    return Object.entries(map).map(([label, count]) => ({ label, count }));
  }, [wetmills]);

  const registrationTimelineData = useMemo(() => {
    const map = {};
    wetmills.forEach((w) => {
      const year = new Date(w.created_at).getFullYear();
      map[year] = (map[year] || 0) + 1;
    });
    return Object.entries(map)
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => a.year - b.year);
  }, [wetmills]);

  return {
    loading: millsLoading || baLoading || visitsLoading,
    error: millsError || baError || visitsError,
    millsCount,
    basCount,
    visitsPerWeekData,
    ownershipData,
    exportingStatusData,
    registrationTimelineData,
  };
};
