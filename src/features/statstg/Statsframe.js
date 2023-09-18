import React from "react";
import Statscard from "./Statscard";
import { MdGroups, MdBarChart } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";

const Statsframe = ({ statistics, trainingGroups }) => {
  const statsData = [
    {
      heading: "Total Training Groups",
      figures: trainingGroups.length,
      icon: <MdGroups />,
      color: "#25245D",
    },
    {
      heading: "Total Participants",
      figures: trainingGroups
        .map((group) => group.total_participants)
        .reduce((a, b) => a + b, 0),
      icon: <BsPersonBoundingBox />,
      color: "#087C8F",
    },
    {
      heading: "Active BA's",
      figures: statistics.total_bas,
      icon: <MdBarChart />,
      color: "#F46700",
    },
  ];

  return (
    <div style={{ width: "100%", marginBottom: "20px", display: "flex" }}>
      {statsData.map((data, index) => (
        <div key={index}>
          <Statscard
            heading={data.heading}
            figures={data.figures}
            icon={data.icon}
            color={data.color}
          />
        </div>
      ))}{" "}
    </div>
  );
};

export default Statsframe;
