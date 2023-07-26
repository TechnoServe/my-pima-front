import React from "react";
import { Paper } from "@mui/material";
import "../tgdetail.js/tgdetail.css";
import Detailscontent from "../tgdetail.js/Detailscontent";
import { CircularProgressbarWithChildren,   buildStyles,
} from "react-circular-progressbar";

const Tstabdetail = () => {
  return (
    <div>
      <div>
        <Paper elevation={2}>
          <div className="details__title">Project Name</div>
          <div style={{ padding: "10px", paddingLeft: "20px" }}></div>
          <div
            className="ts__details-container"
            style={{ display: "flex", gap: "50px" }}
          >
          


            <div className="ts__details-container1">
              <Detailscontent
                heading={"Module Name"}
                paragraph={"Teach out 2 Module"}
              />
              <div style={{ paddingBottom: "20px" }}></div>
              <Detailscontent heading={"Male Attendance"} paragraph={"23"} />
            </div>
            <div className="ts__details-container1">
              <Detailscontent
                heading={"Training Group"}
                paragraph={"TNS Bumbogo"}
              />{" "}
              <div style={{ paddingBottom: "20px" }}></div>
              <Detailscontent heading={"Female Attendance"} paragraph={"50"} />
            </div>{" "}
            <div className="ts__details-container1">
              <Detailscontent
                heading={"Buisness Advisor"}
                paragraph={"Peace Ishimwe"}
              />{" "}
              <div style={{ paddingBottom: "20px" }}></div>
              <Detailscontent heading={"TNS ID"} paragraph={"TNS2345"} />
            </div>
            <Detailscontent
              heading={"Farmer Trainer"}
              paragraph={"Peace Ishimwe"}
            />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Tstabdetail;
