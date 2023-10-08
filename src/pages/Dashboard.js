import React, { useEffect } from "react";
import Card from "../features/cards/card";
import { MdGroups } from "react-icons/md";
import {VscFileSubmodule} from "react-icons/vsc";
import { BsPersonBoundingBox } from "react-icons/bs";
import { GiFarmer } from "react-icons/gi";
import { FaTripadvisor } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ListUpModal from "../components/Modals/ListUpModal";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Chrono } from "react-chrono";
import { useQuery } from "@apollo/client";
import { GET_TRAINING_MODULES_PER_PROJECT } from "../graphql/queries/trainingModulesRequests";

const Dashboard = ({
  trainingGroups,
  projectStats,
  selectedProject,
}) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [modules, setModules] = useState([]);

  const getProjectModules = useQuery(GET_TRAINING_MODULES_PER_PROJECT, {
    variables: { projectId: selectedProject },
  });

  const statsData = [
    {
      name: "total_training_groups",
      heading: "Total Training Groups",
      figures: trainingGroups.length,
      icon: <MdGroups />,
      color: "#25245D",
      path: "/in/traingroup",
    },
    {
      name: "total_training_modules",
      heading: "Total Training Modules",
      figures:
        getProjectModules.data &&
        getProjectModules.data.getTrainingModulesByProject &&
        getProjectModules.data.getTrainingModulesByProject.status === 200
          ? getProjectModules.data.getTrainingModulesByProject.training_modules
              .length
          : 0,
      icon: <VscFileSubmodule />,
      color: "#25245D",
    },
    {
      name: "total_completed_training_modules",
      heading: "Completed Modules",
      figures:
        getProjectModules.data &&
        getProjectModules.data.getTrainingModulesByProject &&
        getProjectModules.data.getTrainingModulesByProject.status === 200
          ? getProjectModules.data.getTrainingModulesByProject.training_modules.map(
              (module) => !module.tm_is_current
            ).length
          : 0,
      icon: <VscFileSubmodule />,
      color: "#25245D",
      path: "/in/trainsession",
    },
    {
      name: "total_participants",
      heading: "Total Participants",
      figures: trainingGroups
        .map((group) => group.total_participants)
        .reduce((a, b) => a + b, 0),
      icon: <BsPersonBoundingBox />,
      color: "#087C8F",
      path: "/in/participants",
    },
    {
      name: "total_bas",
      heading: "Active BA's",
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
  ];

  useEffect(() => {
    if (
      getProjectModules.data &&
      getProjectModules.data.getTrainingModulesByProject &&
      getProjectModules.data.getTrainingModulesByProject.status === 200
    ) {
      setModules(
        getProjectModules.data.getTrainingModulesByProject.training_modules.map(
          (t_module) => {
            return {
              title: t_module.tm_date || "No date",
              cardTitle: t_module.tm_title,
              cardSubtitle: `Module Number: ${t_module.tm_module_number}`,
            };
          }
        )
      );
    }
  }, [getProjectModules.data]);

  const openList = (e, name) => {
    e.preventDefault();

    if (name === "total_bas") {
      setOpen(true);
      setTitle("Business Advisors");
      setList([
        ...new Set(trainingGroups.map((group) => group.business_advisor)),
      ]);
    }
    if (name === "total_fts") {
      setOpen(true);
      setTitle("Farmer Trainers");
      setList([
        ...new Set(trainingGroups.map((group) => group.farmer_trainer)),
      ]);
    }
  };

  return (
    <div>
      <h1 className="module__heading">Your Dashboard</h1>

      <Grid container direction="row">
        <Grid item xs={12}>
          <div
            style={{
              width: "100%",
              marginBottom: "50px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {statsData.map((data, index) => (
              <div key={index}>
                <NavLink
                  to={data.path ? data.path : null}
                  key={index}
                  onClick={(e) => (data.path ? null : openList(e, data.name))}
                >
                  <Card
                    heading={data.heading}
                    figures={data.figures}
                    icon={data.icon}
                    color={data.color}
                  />
                </NavLink>
              </div>
            ))}{" "}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              position: "relative",
            }}
          >
            <h4
              style={{
                width: "100%",
                marginBottom: "30px",
              }}
            >
              Project Modules Timeline
            </h4>
            {modules.length > 0 ? (
              <div style={{ widht: "100%", height: "500px" }}>
                <Chrono
                  items={modules}
                  mode="HORIZONTAL"
                  allowDynamicUpdate={true}
                  cardWidth={300}
                  cardHeight={150}
                  contentDetailsHeight={250}
                  activeItemIndex={modules.length - 1}
                  focusActiveItemOnLoad={true}
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
        </Grid>
      </Grid>

      <ListUpModal
        open={trainingGroups.length > 0 ? open : false}
        handleClose={() => setOpen(false)}
        data={list}
        title={title}
      />
    </div>
  );
};

export default Dashboard;
