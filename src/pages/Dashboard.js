import React from "react";
import Card from "../features/cards/card";
import { MdEventRepeat, MdGroups } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";
import { GiFarmer } from "react-icons/gi";
import { FaTripadvisor } from "react-icons/fa";
import ProjectTimeline from "../components/ProjectTimeline/ProjectTimeline";
import { NavLink } from "react-router-dom";
import ListUpModal from "../components/Modals/ListUpModal";
import { useState } from "react";
import { Grid } from "@mui/material";
import RecentTrainingSessions from "../components/RecentTrainingSessions";

const Dashboard = ({
  trainingGroups,
  trainingSessions,
  participants,
  projectStats,
}) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");

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
      name: "total_training_sessions",
      heading: "Total Training Sessions",
      figures: trainingSessions ? trainingSessions.length : 0,
      icon: <MdEventRepeat />,
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

  const eventData = [
    { date: "2023-08-01", title: "Start of Project" },
    { date: "2023-08-05", title: "Event 2" },
    { date: "2023-08-11", title: "Event 3" },
    { date: "2023-09-05", title: "Event 4" },
    { date: "2023-11-15", title: "End of Project" },
  ];

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
        <Grid item xs={12} md={9}>
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
            <h2
              style={{
                width: "100%",
                marginBottom: "30px",
              }}
            >
              Project Timeline
            </h2>
            <ProjectTimeline events={eventData} />
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* card containing list of training sessions of current month */}
          <RecentTrainingSessions trainingSessions={trainingSessions} />
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
