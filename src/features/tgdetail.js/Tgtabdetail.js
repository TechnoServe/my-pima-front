import React from "react";
import { Paper } from "@mui/material";
import "./tgdetail.css";
import { LiaCircleSolid } from "react-icons/lia";
import Detailscontent from "./Detailscontent";

const Tgtabdetail = ({ details }) => {
  return (
    <div>
      <Paper elevation={1} sx={{ maxWidth: "30%" }}>
        <div className="details__title">{details.tg_name}</div>
        <div style={{ padding: "10px", paddingLeft: "20px" }}>
          <Detailscontent
            heading={"Number of Participants"}
            paragraph={
              details.total_participants !== null
                ? details.total_participants
                : "N/A"
            }
          />

          <Detailscontent
            heading={"Business Advisor"}
            paragraph={details.business_advisor}
          />
          <Detailscontent
            heading={"Farmer Trainer"}
            paragraph={details.farmer_trainer}
          />
          <Detailscontent
            heading={"TNS ID"}
            paragraph={details.tns_id || "N/A"}
          />
        </div>
      </Paper>
    </div>
  );
};

export default Tgtabdetail;
