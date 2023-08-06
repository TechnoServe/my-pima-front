import React from "react";
import Detailscontent from "../tgdetail.js/Detailscontent";
import farmerimage from "./assets/userimage.jpg";
import { Avatar, Divider } from "@mui/material";

const Partscontentview = () => {
  return (
    <>
      <div className="partscontent__container">
        <div
          className="parts__image"
          style={{ display: "flex", alignSelf: "center" }}
        >
          <Avatar
            alt="farmer-image"
            src={farmerimage}
            sx={{ width: 60, height: 60 }}
          />
        </div>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "500",
            paddingTop: "15px",
            paddingBottom: "15px",
            textAlign: "center",
          }}
        >
          Peace Ishimwe
        </p>

        <Divider light />

        <div className="parts__details" style={{ marginTop: " 40px" }}>
          <div>
            <Detailscontent heading={"Location"} paragraph={"Remera"} />
            <Detailscontent
              heading={"Buisness Advisor"}
              paragraph={"John Doe"}
            />
            <Detailscontent heading={"Farmer Trainer"} paragraph={"John Doe"} />
            <Detailscontent heading={"Gender"} paragraph={"Female"} />
            <Detailscontent heading={"TNS ID"} paragraph={"THNS234"} />
          </div>

          <div>
            <p style={{ fontSize: "11px", paddingTop: "40px" }}>
              Edit Information
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partscontentview;
