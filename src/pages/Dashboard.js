import React from "react";
import Card from "../features/cards/card";
import { MdEventRepeat, MdGroups } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";
import { GiFarmer } from "react-icons/gi";
import { FaTripadvisor } from "react-icons/fa";
import ProjectTimeline from "../components/ProjectTimeline/ProjectTimeline";

const Dashboard = ({
  trainingGroups,
  trainingSessions,
  participants,
  projectStats,
}) => {
  const statsData = [
    {
      heading: "Total Training Groups",
      figures: trainingGroups.length,
      icon: <MdGroups />,
      color: "#25245D",
    },
    {
      heading: "Total Training Sessions",
      figures: trainingSessions ? trainingSessions.length : 0,
      icon: <MdEventRepeat />,
      color: "#25245D",
    },
    {
      heading: "Total Participants",
      figures: participants.length,
      icon: <BsPersonBoundingBox />,
      color: "#087C8F",
    },
    {
      heading: "Active BA's",
      figures: projectStats.total_bas,
      icon: <FaTripadvisor />,
      color: "#F46700",
    },
    {
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

  return (
    <div>
      <h1 className="module__heading">Your Dashboard</h1>

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
            <Card
              heading={data.heading}
              figures={data.figures}
              icon={data.icon}
              color={data.color}
            />
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
    </div>
  );
};

export default Dashboard;
