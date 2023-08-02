import React from "react";
import Detailscontent from "../tgdetail.js/Detailscontent";
import farmerimage from "./assets/userimage.jpg"
import { Avatar } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";



const Partscontentview = () => {
  return (
    <>
      <div className="partscontent__container">
        <div className="parts__image" style={{}}>
        <Avatar alt="farmer-image"  src={farmerimage}   sx={{ width: 56, height: 56}}
 />
          <p style={{fontSize: "14px", fontWeight: "500" ,paddingTop: "10px"}}>Peace Ishimwe</p>
        </div>

        <div className="parts__details">
          <div>
          <Detailscontent
                  heading={"Location"}
                  paragraph={"Remera"}
                />
                   <Detailscontent
                  heading={"Buisness Advisor"}
                  paragraph={"John Doe"}
                />
                   <Detailscontent
                  heading={"Farmer Trainer"}
                  paragraph={"John Doe"}
                />
                   <Detailscontent
                  heading={"Gender"}
                  paragraph={"Female"}
                />
                   <Detailscontent
                  heading={"TNS ID"}
                  paragraph={"THNS234"}
                />
          </div>

          <div>
            <p style={{fontSize: "11px", paddingTop: "20px"}}>Edit Information</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partscontentview;
