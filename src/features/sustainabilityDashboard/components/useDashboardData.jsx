import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GET_WETMILLS } from "../../../graphql/queries/wetmills";

export const useDashboardData = () => {
  const { data, loading, error } = useQuery(GET_WETMILLS);
  const wetmills = data?.getWetmills?.wetmills || [];

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
      const key = w.exporting_status || "Unknown";
      map[key] = (map[key] || 0) + 1;
    });
    return Object.entries(map).map(([status, count]) => ({ status, count }));
  }, [wetmills]);

  const registrationTimelineData = useMemo(() => {
    const map = {};
    wetmills.forEach((w) => {
      if (w.registration_date) {
        const year = new Date(w.registration_date).getFullYear();
        map[year] = (map[year] || 0) + 1;
      }
    });
    return Object.entries(map)
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => a.year - b.year);
  }, [wetmills]);

  return {
    loading,
    error,
    ownershipData,
    exportingStatusData,
    registrationTimelineData,
  };
};
