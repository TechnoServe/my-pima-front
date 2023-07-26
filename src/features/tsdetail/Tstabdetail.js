import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import "../tgdetail.js/tgdetail.css";
import Detailscontent from "../tgdetail.js/Detailscontent";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Imagecontainer from "./sessionimage/Imagecontainer";
import sessionImageUrl from "./assests/session-image1.jpg";

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: "10px",
  marginRight: "10px",
  textTransform: "initial",
  backgroundColor: "rgba(244, 103, 0, 1)",
  fontSize: "12px",
  color: "#fff",

  "&:hover": {
    backgroundColor: "rgba(244, 103, 0, 0.5)",
    transition: "background-color 0.3s ease-in-out",
  },
}));

const Tstabdetail = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <div>
        <Paper elevation={2}>
          <div>
            <div className="details__title">Project Name</div>
            <div style={{ padding: "10px", paddingLeft: "20px" }}></div>
            <div
              className="ts__details-container"
              style={{ display: "flex", gap: "50px" }}
            >
              <div style={{ width: "110px" }}>
                <CircularProgressbarWithChildren
                  value={22}
                  styles={buildStyles({
                    rotation: 1,
                    strokeLinecap: "round",
                    textSize: "20px",
                    pathTransitionDuration: 0.5,
                    pathColor: "rgba(244, 103, 0, 1)",
                    textColor: "rgba(244, 103, 0, 1)",
                    trailColor: "#ECF3FE",
                  })}
                >
                  <div style={{ position: "absolute", top: "15px" }}>
                    <p
                      style={{
                        fontSize: "20px",
                        textAlign: "center",
                        color: "#F46700",
                        fontWeight: "700",
                        paddingBottom: "10px",
                      }}
                    >
                      22{" "}
                    </p>
                    <p
                      style={{ fontSize: "10px", fontWeight: "600", color: "" }}
                    >
                      Total Attendance
                    </p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
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
                <Detailscontent
                  heading={"Female Attendance"}
                  paragraph={"50"}
                />
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
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <StyledButton
              onClick={handleClick}
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              View Session Image
            </StyledButton>
            {open && <Imagecontainer open={open} handleClose={handleClose} sessionImageUrl={sessionImageUrl} />}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Tstabdetail;
