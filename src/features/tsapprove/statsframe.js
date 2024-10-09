import React from "react";
import Statscard from "../statstg/Statscard";
import { MdGroups } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";

const Statsframe = ({ sampledSessions }) => {

  const statsData = [
    {
      heading: "Total Sampled",
      figures: sampledSessions.length,
      icon: <MdGroups />,
      color: "#25245D",
    },
    {
      heading: "Total Reviewed",
      figures: sampledSessions.filter(
        (session) => session.image_review_result !== null
      ).length,
      icon: <MdGroups />,
      color: "#087C8F",
    },
    {
      heading: "Not Reviewed",
      figures: sampledSessions.filter(
        (session) => session.image_review_result === null
      ).length,
      icon: <BsPersonBoundingBox />,
      color: "#25245D",
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
