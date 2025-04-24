import React from "react";
import { Chrono } from "react-chrono";
import { Typography } from "@mui/material";

const ModuleTimeline = ({ modules }) => {
  if (modules.length === 0) {
    return <Typography variant="body1" align="center" color="textSecondary">No modules found</Typography>;
  }

  return (
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
        cardPositionHorizontal="TOP"
        focusActiveItemOnLoad
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
  );
};

export default ModuleTimeline;