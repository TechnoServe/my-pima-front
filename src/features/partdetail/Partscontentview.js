import React from "react";
import Detailscontent from "../tgdetail.js/Detailscontent";
import farmerimage from "./assets/userimage.jpg";
import { Avatar, Divider } from "@mui/material";

const Partscontentview = ({ participant }) => {
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
          {participant.full_name}
        </p>

        <Divider light />

        <div className="parts__details" style={{ marginTop: " 40px" }}>
          <div>
            <Detailscontent
              heading={"Location"}
              paragraph={participant.location}
            />
            <Detailscontent
              heading={"Farmer Trainer"}
              paragraph={participant.farmer_trainer}
            />
            <Detailscontent
              heading={"Business Advisor"}
              paragraph={participant.business_advisor}
            />
            <Detailscontent
              heading={"Gender"}
              paragraph={participant.gender === "m" ? "Male" : "Female"}
            />
            <Detailscontent heading={"TNS ID"} paragraph={participant.tns_id} />
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
