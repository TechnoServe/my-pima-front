import React from "react";
import Statscard from "./Statscard";
import { MdGroups, MdBarChart } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";

const Statsframe = ({ statistics, totalParticipants }) => {
  const statsData = [
    {
      heading: "Total Training Groups",
      figures: statistics.total_groups,
      icon: <MdGroups />,
      color: "#25245D",
    },
    {
      heading: "Total Participants",
      figures: totalParticipants,
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
    <div style={{ marginBottom: "0", display: "flex" }}>
      {statsData.map((data, index) => (
        <div key={index} style={{ margin: "10px", marginBottom: "20px" }}>
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
