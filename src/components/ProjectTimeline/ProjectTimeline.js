import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline-tooltip";
import "./ProjectTimeline.css";

const ProjectTimeline = ({ events }) => {
  const dates = events.map((event) => event.date);

  const customTooltips = events.map((event) => (
    <div
      style={{
        backgroundColor: "white",
        padding: "5px 10px",
        borderRadius: "2px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      {event.title}
    </div>
  ));

  const [value, setValue] = useState(0);

  return (
    <div style={{ width: "100%", height: "100px", margin: "0 auto" }}>
      <HorizontalTimeline
        index={value}
        indexClick={(index) => setValue(index)}
        values={dates}
        tooltip={customTooltips}
      />
    </div>
  );
};

export default ProjectTimeline;
