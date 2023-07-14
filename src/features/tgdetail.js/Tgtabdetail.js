import React from "react";
import { Paper } from "@mui/material";
import "./tgdetail.css";
import { LiaCircleSolid } from "react-icons/lia";

const Tgtabdetail = ({ details }) => {
  return (
    <div>
      <Paper elevation={1} sx={{ maxWidth: "30%" }}>
        <div className="details__title">{details.tg_name}</div>
        <div style={{ padding: "10px", paddingLeft: "20px" }}>
          <div className="details__content">
            <LiaCircleSolid color="#3A57E8" />
            <div className="details__content2">
              <p className="details__para">Number of Participants</p>
              <p className="details__para2">
                {details.total_participants !== null
                  ? details.total_participants
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="details__content">
            <LiaCircleSolid color="#3A57E8" />
            <div className="details__content2">
              <p className="details__para">Business Advisor</p>
              <p className="details__para2">{details.business_advisor}</p>
            </div>
          </div>
          <div className="details__content">
            <LiaCircleSolid color="#3A57E8" />
            <div className="details__content2">
              <p className="details__para">Farmer Trainer</p>
              <p className="details__para2">{details.farmer_trainer}</p>
            </div>
          </div>
          <div className="details__content">
            <LiaCircleSolid color="#3A57E8" />
            <div className="details__content2">
              <p className="details__para">TNS ID</p>
              <p className="details__para2">{details.tns_id || "N/A"}</p>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Tgtabdetail;
