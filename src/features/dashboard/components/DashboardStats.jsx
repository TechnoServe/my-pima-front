import React from "react";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import Card from "../../cards/card";
import { MdGroups } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { BsPersonBoundingBox } from "react-icons/bs";
import { GiFarmer } from "react-icons/gi";
import { FaTripadvisor } from "react-icons/fa";

const iconMap = {
  MdGroups: <MdGroups />,
  VscFileSubmodule: <VscFileSubmodule />,
  BsPersonBoundingBox: <BsPersonBoundingBox />,
  GiFarmer: <GiFarmer />,
  FaTripadvisor: <FaTripadvisor />,
};

const DashboardStats = ({ statsData, openList }) => {
  return (
    <Grid container spacing={2}>
      {statsData.map((data, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <NavLink
            to={data.path || "#"}
            onClick={(e) => (!data.path ? openList(e, data.name) : null)}
          >
            <Card
              heading={data.heading}
              figures={data.figures}
              icon={iconMap[data.iconName] || <MdGroups />}
              color={data.color}
            />
          </NavLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardStats;
