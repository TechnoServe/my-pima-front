import PropTypes from "prop-types";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import { a11yProps } from "../tgdetail/Tgtabs";
import { useState } from "react";
import Attendtable from "./Table/attendtable";
import FVTable from "./Table/fvtable";

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

const Partstableview = ({
  trainingSessions,
  participant,
  farmVisitsPerPart,
}) => {

  console.log(farmVisitsPerPart);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
            backgroundColor: "rgba(0, 165, 163, 0.1)",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="primary"
          >
            <Tab label="Farm Visit History" {...a11yProps(0)} />
            <Tab label="TS Attendance History" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <FVTable
            trainingSessions={trainingSessions}
            participant={participant}
            farmVisitsPerPart={farmVisitsPerPart}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Attendtable
            trainingSessions={trainingSessions}
            participant={participant}
          />
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default Partstableview;
