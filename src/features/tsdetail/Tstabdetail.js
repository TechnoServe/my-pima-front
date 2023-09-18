import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "../tgdetail/tgdetail.css";
import Detailscontent from "../tgdetail/Detailscontent";
import Imagecontainer from "./sessionimage/Imagecontainer";
import { useQuery } from "@apollo/client";
import { GET_TRAINING_SESSION_IMAGE } from "../../graphql/queries/trainingSessionsRequests";
import { BeatLoader } from "react-spinners";
import Statstscard from "../statsts/Statstscard";

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: "10px",
  marginRight: "10px",
  textTransform: "initial",
  backgroundColor: "rgba(244, 103, 0, 1)",
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(244, 103, 0, 0.5)",
    transition: "background-color 0.3s ease-in-out",
  },
}));

const Tstabdetail = ({ details }) => {
  const [open, setOpen] = useState(false);
  const [session_image, setSession_image] = useState(null);
  const { data, loading } = useQuery(GET_TRAINING_SESSION_IMAGE, {
    variables: { tsId: details.ts_id },
  });

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (
      !loading &&
      data.trainingSessionImage &&
      data.trainingSessionImage.status === 200
    ) {
      setSession_image(data.trainingSessionImage.trainingSessionImage);
    }
  }, [data, loading]);

  return (
    <div>
      <Paper elevation={2}>
        <div>
          <div className="details__title">{details.ts_name}</div>
          <div style={{ padding: "10px", paddingLeft: "20px" }}></div>
          <div
            className="ts__details-container"
            style={{ display: "flex", gap: "50px" }}
          >
            <div style={{ width: "250px" }}>
              <Statstscard stats={details} />
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
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
              <div className="ts__details-container1">
                <Detailscontent
                  heading={"Farmer Trainer"}
                  paragraph={details.farmer_trainer || "N/A"}
                />
                <div style={{ paddingBottom: "20px" }}></div>
                <Detailscontent
                  heading={"Is Session Verified?"}
                  paragraph={details.is_verified ? "Yes" : "No"}
                />
              </div>
              <div className="ts__details-container1">
                <Detailscontent
                  heading={"Validation Status"}
                  paragraph={
                    details.is_verified && details.validation_status
                      ? "Approved"
                      : details.is_verified && !details.validation_status
                      ? "Rejected"
                      : "Not Verified"
                  }
                />
                <div style={{ paddingBottom: "20px" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <StyledButton
            onClick={handleClick}
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disabled={details.has_image ? false : true}
            style={{
              backgroundColor: `${
                session_image
                  ? "rgba(244, 103, 0, 1)"
                  : "rgba(244, 103, 0, 0.5)"
              }`,
              color: "#fff",
              cursor: `${details.has_image ? "pointer" : "not-allowed"}`,
            }}
          >
            {loading ? (
              <BeatLoader
                color={"rgba(244, 103, 0, 1)"}
                loading={loading}
                size={10}
              />
            ) : (
              "View Session Image"
            )}
          </StyledButton>
          {open && (
            <Imagecontainer
              open={open}
              handleClose={handleClose}
              id={details.ts_id}
              isVerified={details.is_verified}
              validationStatus={details.validation_status}
              sessionImageUrl={session_image}
            />
          )}
        </div>
      </Paper>
    </div>
  );
};

export default Tstabdetail;
