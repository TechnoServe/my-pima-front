import { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import AssignProjects from "../components/AssignProjects";
import Users from "./Users";
import Permissions from "./Permissions";

export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Management({ allProjects }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "20px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="management tabs"
        >
          <Tab label="Assign Projects" {...a11yProps(0)} />
          <Tab label="Assign Permissions" {...a11yProps(1)} />
          <Tab label="Users" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AssignProjects allProjects={allProjects} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Permissions />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Users />
      </CustomTabPanel>
    </Box>
  );
}
