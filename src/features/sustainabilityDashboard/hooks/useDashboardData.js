import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GET_WETMILLS } from "../../../graphql/queries/wetmills";
import { GET_WETMILL_VISITS } from "../../../graphql/queries/wetmillVisit";
import { GET_WETMILL_BAS } from "../../../graphql/queries/usersRequests";

const DEFAULT_SF_PROJECT_ID = "a0EOj000004FvmrMAC";

export const useDashboardData = () => {
  const {
    data: millsData,
    loading: millsLoading,
    error: millsError,
  } = useQuery(GET_WETMILLS);
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
  } = useQuery(GET_WETMILL_VISITS);

  const wetmills = millsData?.getWetmills?.wetmills || [];
  const businessAdvisors = baData?.getWetMillBusinessAdvisors?.advisors || [];
  const visits = visitsData?.getVisits?.visits || [];

  const millsCount = wetmills.length;
  const basCount = businessAdvisors.length;

  const visitsPerWeekData = useMemo(() => {
    const map = {};
    visits.forEach((v) => {
      const date = new Date(v.visited_at);
      const yearStart = new Date(date.getFullYear(), 0, 1);
      const week = Math.ceil(
        ((date - yearStart) / 864e5 + yearStart.getDay() + 1) / 7
      );
      const label = `${date.getFullYear()}-W${String(week).padStart(2, "0")}`;
      map[label] = (map[label] || 0) + 1;
    });
    return Object.entries(map)
      .map(([week, count]) => ({ week, count }))
      .sort((a, b) => (a.week > b.week ? 1 : -1));
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
