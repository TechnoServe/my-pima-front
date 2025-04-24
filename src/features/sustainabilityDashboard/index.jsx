// sustainabilityDashboard/index.jsx

import React from "react";
import { Typography } from "@mui/material";
import { useDashboardData } from "./hooks/useDashboardData";
import DashboardGraphs from "./components/DashboardGraphs";
import LoadingScreen from "../../components/LoadingScreen";
import "./dashboard.css";

const SustainabilityDashboard = () => {
  const {
    loading,
    error,
    millsCount,
    basCount,
    visitsPerWeekData,
    ownershipData,
    exportingStatusData,
    registrationTimelineData,
  } = useDashboardData();

  // 1. If we’re still loading…
  if (loading) return <LoadingScreen />;

  // 2. If there’s an error, this block renders
  if (error)
    return (
      <div className="sustain__error">
        <Typography variant="h6" color="error">
          Failed to load summary data
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {error.message}
        </Typography>
      </div>
    );

  // 3. Otherwise render the summary
  return (
    <div className="sustain__container">
      <header className="sustain__header">
        <h1>Summary Page</h1>
      </header>
      <DashboardGraphs
        millsCount={millsCount}
        basCount={basCount}
        visitsPerWeekData={visitsPerWeekData}
        ownershipData={ownershipData}
        exportingStatusData={exportingStatusData}
        registrationTimelineData={registrationTimelineData}
      />
    </div>
  );
};

export default SustainabilityDashboard;
