import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import Tstabdetail from "./Tstabdetail";
import { a11yProps } from "../tgdetail/Tgtabs";
import FvTabTable from "../tgdetail/fvtabtable";

function CustomTabPanel(props) {
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

const Tstabs = ({ details, farmVisits, selectedProject }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="session tabs">
            <Tab label="Details" {...a11yProps(0)} />
            <Tab label="Farm Visits" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Tstabdetail details={details} selectedProject={selectedProject} />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <FvTabTable details={details} farmVisits={farmVisits} />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default Tstabs;
