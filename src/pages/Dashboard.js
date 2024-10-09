import React, { useEffect, useState, useMemo } from "react";
import Card from "../features/cards/card";
import { MdGroups } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { BsPersonBoundingBox } from "react-icons/bs";
import { GiFarmer } from "react-icons/gi";
import { FaTripadvisor } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ListUpModal from "../components/Modals/ListUpModal";
import { Grid, Typography } from "@mui/material";
import { Chrono } from "react-chrono";
import { useQuery } from "@apollo/client";
import { GET_TRAINING_MODULES_PER_PROJECT } from "../graphql/queries/trainingModulesRequests";
import PropTypes from 'prop-types';
import LoadingScreen from "../components/LoadingScreen";

const Dashboard = ({ trainingGroups, projectStats, selectedProject }) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [modules, setModules] = useState([]);

  const { data, loading, error } = useQuery(GET_TRAINING_MODULES_PER_PROJECT, {
    variables: { projectId: selectedProject },
  });

  useEffect(() => {
    if (data && data.getTrainingModulesByProject?.status === 200) {
      setModules(
        data.getTrainingModulesByProject.training_modules.map((t_module) => ({
          title: t_module.tm_date || "No date",
          cardTitle: t_module.tm_is_current
            ? `${t_module.tm_title} (Current)`
            : t_module.tm_title,
          cardSubtitle: `Session Number: ${t_module.tm_module_number}`,
          isCurrent: t_module.tm_is_current,
        }))
      );
    }
  }, [data]);

  const statsData = useMemo(() => [
    {
      name: "total_training_groups",
      heading: "Total FFGs",
      figures: trainingGroups.length,
      icon: <MdGroups />,
      color: "#25245D",
      path: "/in/traingroup",
    },
    {
      name: "total_training_modules",
      heading: "Completed Sessions",
      figures:
        data?.getTrainingModulesByProject?.status === 200
          ? data.getTrainingModulesByProject.training_modules.length
          : 0,
      icon: <VscFileSubmodule />,
      color: "#25245D",
    },
    {
      name: "total_completed_training_modules",
      heading: "Completed Topics",
      figures:
        data?.getTrainingModulesByProject?.status === 200
          ? data.getTrainingModulesByProject.training_modules.filter(
              (module) => !module.tm_is_current
            ).length
          : 0,
      icon: <VscFileSubmodule />,
      color: "#25245D",
      path: "/in/trainsession",
    },
    {
      name: "total_participants",
      heading: "Registered Farmers",
      figures: trainingGroups
        .map((group) => group.total_participants)
        .reduce((a, b) => a + b, 0)
        .toLocaleString(),
      icon: <BsPersonBoundingBox />,
      color: "#087C8F",
      path: "/in/participants",
    },
    {
      name: "total_fts",
      heading: "Registered Households",
      figures: trainingGroups
        .map((group) => group.total_households)
        .reduce((a, b) => a + b, 0).toLocaleString(),
      icon: <GiFarmer />,
      color: "#F46700",
    },
    {
      name: "total_fts",
      heading: "Trained Farmers",
      figures: "N/A",
      icon: <GiFarmer />,
      color: "#F46700",
    },
    {
      name: "total_bas",
      heading: "Agronomy Advisors",
      figures: projectStats.total_bas,
      icon: <FaTripadvisor />,
      color: "#F46700",
    },
    {
      name: "total_fts",
      heading: "Farmer Trainers",
      figures: projectStats.total_fts,
      icon: <GiFarmer />,
      color: "#F46700",
    },
  ], [trainingGroups, data, projectStats]);

  const openList = (e, name) => {
    e.preventDefault();
    const listMap = {
      total_bas: {
        title: "Business Advisors",
        list: [...new Set(trainingGroups.map((group) => group.business_advisor))],
      },
      total_fts: {
        title: "Farmer Trainers",
        list: [...new Set(trainingGroups.map((group) => group.farmer_trainer))],
      },
    };

    if (listMap[name]) {
      setOpen(true);
      setTitle(listMap[name].title);
      setList(listMap[name].list);
    }
  };

  if (loading) return (
    <LoadingScreen />
  );
  
  if (error) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography color="error">Error loading data</Typography>
    </div>
  );

  return (
    <div>
      <h1 className="module__heading">Your Dashboard</h1>
      <Grid container spacing={2}>
        {statsData.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <NavLink
              to={data.path || '#'}
              onClick={(e) => (!data.path ? openList(e, data.name) : null)}
            >
              <Card
                heading={data.heading}
                figures={data.figures}
                icon={data.icon}
                color={data.color}
              />
            </NavLink>
          </Grid>
        ))}
      </Grid>

      <div style={{ marginTop: "20px" }}>
        <h4>Project Modules Timeline</h4>
        {modules.length > 0 ? (
          <div style={{ width: "100%", height: "500px" }}>
            <Chrono
              items={modules}
              mode="HORIZONTAL"
              allowDynamicUpdate
              cardWidth={300}
              cardHeight={150}
              contentDetailsHeight={250}
              activeItemIndex={modules.findIndex((m) => m.isCurrent) !== -1
                ? modules.findIndex((m) => m.isCurrent)
                : modules.length - 1}
              focusActiveItemOnLoad
              cardPositionHorizontal="TOP"
              theme={{
                primary: "#087C8F",
                secondary: "#087C8F",
                cardBgColor: "#fff",
                cardForeColor: "#7D7F88",
                titleColor: "#7D7F88",
                titleColorActive: "#fff",
                subtitleColor: "#fff",
              }}
            />
          </div>
        ) : (
          <Typography variant="body1" color="textSecondary" align="center">
            No modules found
          </Typography>
        )}
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

Dashboard.propTypes = {
  trainingGroups: PropTypes.array.isRequired,
  projectStats: PropTypes.object.isRequired,
  selectedProject: PropTypes.string.isRequired,
};

export default Dashboard;
