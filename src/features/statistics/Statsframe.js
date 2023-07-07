import React from "react";
import Statscard from "./Statscard";
import { MdGroups, MdBarChart} from "react-icons/md";
import {BsPersonBoundingBox} from "react-icons/bs"
const Statsframe = () => {
  const statsData = [
    {
      heading: "Total Training Groups",
      figures: "2345",
      icon: <MdGroups />,
      color: "#25245D"
    },
    {
      heading: "Total Participants",
      figures: "5000",
      icon: <BsPersonBoundingBox />,
      color: "#087C8F"
    },
    {
      heading: "Active BA's",
      figures: "134",
      icon: <MdBarChart/>,
      color: "#F46700"
    },
  ];

  return (
    <div style={{ marginBottom: "20px", display: "flex" }}>
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
