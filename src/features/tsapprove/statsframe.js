import React from "react";
import Statscard from "../statstg/Statscard";
import { MdGroups, MdBarChart } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";

const Statsframe = ({ statistics, currentSessions }) => {
    console.log(currentSessions)
  const statsData = [
    {
      heading: "Unverified Sessions",
      figures: currentSessions.filter((session) => session.is_verified === false).length,
      icon: <MdGroups />,
      color: "#25245D",
    },
    {
      heading: "Correct Attendees #",
      figures: currentSessions.filter(
        (session) => session.session_image_status === "approved"
      ).length,
      icon: <MdGroups />,
      color: "#25245D",
    },
    {
      heading: "Incorrect Attendees #",
      figures: currentSessions.filter(
        (session) => session.session_image_status === "invalid"
      ).length,
      icon: <BsPersonBoundingBox />,
      color: "#087C8F",
    },
    {
      heading: "Unclear Photos",
      figures: currentSessions.filter(
        (session) => session.session_image_status === "unclear"
      ).length,
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
