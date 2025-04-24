import React from "react";
import { Typography } from "@mui/material";
import ListUpModal from "../../components/Modals/ListUpModal";
import LoadingScreen from "../../components/LoadingScreen";
import DashboardStats from "./components/DashboardStats";
import ModuleTimeline from "./components/ModuleTimeline";
import { useDashboardData } from "./hooks/useDashboardData";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { trainingGroups, projectStats, activeProject } = useOutletContext();

  const {
    modules,
    statsData,
    open,
    setOpen,
    list,
    title,
    loading,
    error,
    openList,
  } = useDashboardData(trainingGroups, projectStats, activeProject);

  if (loading) return <LoadingScreen />;
  if (error)
    return (
      <div style={{ textAlign: "center", paddingTop: "5%" }}>
        <Typography variant="h6" color="error">
          Failed to load dashboard data.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {error.message}
        </Typography>
      </div>
    );

  return (
    <div>
      <h1 className="module__heading">Your Dashboard</h1>

      <DashboardStats statsData={statsData} openList={openList} />

      <div style={{ marginTop: "20px" }}>
        <h4>Project Modules Timeline</h4>
        <ModuleTimeline modules={modules} />
      </div>

      <ListUpModal
        open={open && trainingGroups.length > 0}
        handleClose={() => setOpen(false)}
        data={list}
        title={title}
      />
    </div>
  );
};

export default Dashboard;
