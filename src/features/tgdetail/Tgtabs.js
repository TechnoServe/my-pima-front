import { useState } from "react";
import PropTypes from "prop-types";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import Tgtabdetail from "./Tgtabdetail";
import Tstabtable from "./tstabtable";
import FvTabTable from "./fvtabtable";
import PartsTabTable from "./partstabtable";

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

export default function Tgtabs({
  details,
  trainingSessions,
  farmVisits,
  participants,
}) {
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
          aria-label="basic tabs example"
        >
          <Tab label="TG Details" {...a11yProps(0)} />
          <Tab label="TG sessions" {...a11yProps(1)} />
          <Tab label="TG Farm Visits" {...a11yProps(2)} />
          <Tab label="TG Participants" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Tgtabdetail details={details} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Tstabtable trainingSessions={trainingSessions} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <FvTabTable farmVisits={farmVisits} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <PartsTabTable participants={participants} />
      </CustomTabPanel>
    </Box>
  );
}
