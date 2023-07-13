import React from "react";
import { Paper } from "@mui/material";
import "./tgdetail.css";
import { LiaCircleSolid } from "react-icons/lia";

const Tgtabdetail = () => {
  return (
    <div>
      <Paper elevation={1} sx={{ maxWidth: "30%" }}>
        <div className="details__title">TG Tegbar Masaya Group</div>
        <div style={{ padding: "10px", paddingLeft: "20px" }}>
          <div className="details__content">
            <LiaCircleSolid color="#3A57E8" />
            <div className="details__content2">
              <p className="details__para">Number of Participants</p>
              <p className="details__para2">342</p>
            </div>
          </div>
          <div className="details__content">
            <LiaCircleSolid color="#3A57E8" />
            <div className="details__content2">
              <p className="details__para">Business Advisor</p>
              <p className="details__para2">Peace Ishimwe</p>
            </div>
          </div>
          <div className="details__content">
          <LiaCircleSolid color="#3A57E8" />
            <div className="details__content2">
              <p className="details__para">Farmer Trainer</p>
              <p className="details__para2">Peace Ishimwe</p>
            </div>
          </div>
          <div className="details__content">
          <LiaCircleSolid color="#3A57E8" />
            <div className="details__content2">
              <p className="details__para">TNS ID</p>
              <p className="details__para2">TN24521</p>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Tgtabdetail;
