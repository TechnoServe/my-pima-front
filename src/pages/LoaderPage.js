import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

const LoadingPage = ({ loadings }) => {
  const { load1, load2, load3, load4 } = loadings;
  const [percentage, setPercentage] = useState(0);

  const gradientColors = [
    "#1F2272",
    "#1C1E62",
    "#3A3D89",
    "#4998CC",
    "#4B8C68",
    "#0E0E0E",
    "#18472D",
    "#023938",
    "#404948",
    "#7A8786",
  ];

  useEffect(() => {
    const calculatePercentage = () => {
      let newPercentage = 0;

      if (!load1) newPercentage += 25;
      if (!load2) newPercentage += 25;
      if (!load3) newPercentage += 25;
      if (!load4) newPercentage += 25;

      setPercentage(newPercentage);
    };

    calculatePercentage();
  }, [load1, load2, load3, load4]);

  const gradientColor =
    gradientColors[Math.min(Math.floor(percentage / 10), 9)];

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={percentage}
        sx={{
          strokeLinecap: "round",
          position: "relative",
        }}
        size={100}
        thickness={5}
        style={{
          color: gradientColor,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-15px",
          left: "-15px",
          width: "calc(100% + 30px)",
          height: "calc(100% + 20px)",
          borderRadius: "50%",
          border: "2px dashed rgba(0, 0, 0, 0.2)",
          boxSizing: "border-box",
        }}
      ></div>
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {percentage}%
      </Typography>
    </div>
  );
};

export default LoadingPage;
