import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "../tgdetail.js/tgdetail.css";
import Detailscontent from "../tgdetail.js/Detailscontent";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Imagecontainer from "./sessionimage/Imagecontainer";

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

const Tstabdetail = ({ details }) => {
  const [open, setOpen] = useState(false);
  const [session_images, setSession_images] = useState([null, null]);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const session_images = [
      "https://www.commcarehq.org/a/tns-proof-of-concept/api/form/attachment/27ef9e11-e300-420b-875c-fead57a59957/1670917593082.jpg",
      null,
    ];
    try {
      if (session_images[0] || session_images[1]) {
        const real_image = session_images[0] || session_images[1];

        fetch(real_image, {
          headers: {
            Authorization: `ApiKey ${process.env.REACT_APP_COMMCARE_API_KEY}`,
          },
        })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, [session_images]);

  return (
    <div>
      <div>
        <Paper elevation={2}>
          <div>
            <div className="details__title">{details.ts_name}</div>
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
                  paragraph={details.ts_module}
                />
                <div style={{ paddingBottom: "20px" }}></div>
                <Detailscontent
                  heading={"Male Attendance"}
                  paragraph={details.total_males || "N/A"}
                />
              </div>
              <div className="ts__details-container1">
                <Detailscontent
                  heading={"Training Group"}
                  paragraph={details.ts_group}
                />{" "}
                <div style={{ paddingBottom: "20px" }}></div>
                <Detailscontent
                  heading={"Female Attendance"}
                  paragraph={details.total_females || "N/A"}
                />
              </div>{" "}
              <div className="ts__details-container1">
                <Detailscontent
                  heading={"Business Advisor"}
                  paragraph={"Peace Ishimwe"}
                />{" "}
                <div style={{ paddingBottom: "20px" }}></div>
                <Detailscontent
                  heading={"TNS ID"}
                  paragraph={details.tns_id || "N/A"}
                />
              </div>
              <Detailscontent
                heading={"Farmer Trainer"}
                paragraph={details.farmer_trainer || "N/A"}
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
              disabled={session_images[0] || session_images[1] ? false : true}
              style={{
                backgroundColor: `${
                  session_images[0] || session_images[1]
                    ? "rgba(244, 103, 0, 1)"
                    : "rgba(244, 103, 0, 0.5)"
                }`,
                color: "#fff",
                cursor: `${
                  session_images[0] || session_images[1]
                    ? "pointer"
                    : "not-allowed"
                }`,
              }}
            >
              View Session Image
            </StyledButton>
            {open && (
              <Imagecontainer
                open={open}
                handleClose={handleClose}
                sessionImageUrl={session_images[0] || session_images[1]}
              />
            )}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Tstabdetail;
