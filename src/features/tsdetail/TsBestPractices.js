import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const TsBestPractices = ({ details }) => {
  const [value, setValue] = useState(0);
  const [bestPractices, setBestPractices] = useState([
    {
      label: "Rejuvenation",
      value: "Rejuvenation",
    },
    {
      label: "Pruning",
      value: "Pruning",
    },
    {
      label: "Fertilization",
      value: "Fertilization",
    },
    {
      label: "Weed Control",
      value: "Weed Control",
    },
    {
      label: "Pest and Disease Control",
      value: "Pest and Disease Control",
    },
    {
      label: "Harvesting",
      value: "Harvesting",
    },
    {
      label: "Shade",
      value: "Shade",
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="best practices tabs"
        sx={{
          borderRight: 1,
          borderColor: "divider",
        }}
        style={{
          alignItems: "flex-start !important",
        }}
      >
        {bestPractices.map((bp, index) => (
          <Tab key={index} label={bp.label} {...a11yProps(index)} />
        ))}
      </Tabs>
      {bestPractices.map((bp, index) => (
        <TabPanel key={index} value={value} index={index}>
          {bp.value}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TsBestPractices;
