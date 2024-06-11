import React, { useState } from "react";
import {
  Dialog,
  Button,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { MdClose, MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { styled } from "@mui/material/styles";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TRAINING_SESSIONS_PER_PROJECT, VALIDATE_TRAINING_SESSION } from "../../../graphql/queries/trainingSessionsRequests";
import { toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: "10px",
  marginRight: "10px",
  textTransform: "initial",
  backgroundColor: "rgba(23, 177, 94, 1)",
  color: "#fff",
  fontSize: "12px",

  "&:hover": {
    backgroundColor: "rgba(23, 177, 94, 0.5)",
    transition: "background-color 0.3s ease-in-out",
  },
}));

const StyledButton2 = styled(Button)(({ theme }) => ({
  marginBottom: "10px",
  marginRight: "10px",
  textTransform: "initial",
  fontSize: "12px",
  color: "rgba(200, 27, 27, 1)",
  borderColor: "rgba(200, 27, 27, 1)",

  "&:hover": {
    backgroundColor: "rgba(235, 87, 87, 0.1)",
    transition: "background-color 0.3s ease-in-out",
    borderColor: "rgba(200, 27, 27, 1)",
  },
  ".MuiButton-outlined": {
    color: "rgba(235, 87, 87, 1)",
  },
}));

const LoadingOverlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Imagecontainer = ({
  open,
  handleClose,
  sessionImageUrl,
  id,
  data,
  isVerified,
  imageStatus,
  selectedProject,
  loading,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userDetails = JSON.parse(window.localStorage.getItem("myPimaUserData"));

  const [validateSession] = useMutation(VALIDATE_TRAINING_SESSION);

  const trainingSessionsPerProject = useQuery(GET_TRAINING_SESSIONS_PER_PROJECT, {
    variables: { sfProjectId: selectedProject },
  });

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleSessionValidation = async (id, session_image_status) => {
    setIsLoading(true);

    try {
      await validateSession({
        variables: {
          tsId: id,
          status: session_image_status,
        },
      });

      // refetch training sessions
      trainingSessionsPerProject
        .refetch()
        .then(() => {
          toast.success("Session validated successfully");
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);

          toast.error("Error validating session");
        });
    } catch (error) {
      console.log(error);

      toast.error("Error validating session");

      setIsLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Dialog open={open} keepMounted fullWidth aria-describedby="alert-dialog-slide-description">
          <div style={{ margin: "20px" }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "#2b2b2b",
              }}
            >
              <MdClose />
            </IconButton>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <CircularProgress />
            <Typography variant="h6" style={{ marginLeft: "10px" }}>
              Loading Image...
            </Typography>
          </div>
        </Dialog>
      ) : (
        <Dialog open={open} keepMounted fullWidth aria-describedby="alert-dialog-slide-description">
          {isLoading && (
            <LoadingOverlay>
              <CircularProgress />
            </LoadingOverlay>
          )}
          <div style={{ margin: "20px" }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "#2b2b2b",
              }}
            >
              <MdClose />
            </IconButton>
            <Typography variant="h6">Session Image</Typography>
          </div>

          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Male Attendees:</strong> {data.total_males}
                </Typography>
                <Typography variant="body1">
                  <strong>Female Attendees:</strong> {data.total_females}
                </Typography>
                <Typography variant="body1">
                  <strong>Total Attendees:</strong> {data.total_males + data.total_females}
                </Typography>
                <Typography variant="body1">
                  <strong>Session Date:</strong> {data.session_date}
                </Typography>
                <Typography variant="body1">
                  <strong>Farmer Trainer:</strong> {data.farmer_trainer}
                </Typography>
                <Typography variant="body1">
                  <strong>Session Module:</strong> {data.ts_module}
                </Typography>
                <Typography variant="body1">
                  <strong>FFG:</strong> {data.ts_group}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div style={{ position: "relative" }}>
                  <img
                    src={sessionImageUrl}
                    alt="session_pic"
                    style={{
                      width: "100%",
                      height: "auto",
                      cursor: isExpanded ? "zoom-out" : "zoom-in",
                    }}
                    onClick={toggleExpand}
                  />
                  {isExpanded ? (
                    <IconButton
                      aria-label="shrink"
                      onClick={toggleExpand}
                      sx={{
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        color: "#fff",
                      }}
                    >
                      <MdFullscreenExit />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="expand"
                      onClick={toggleExpand}
                      sx={{
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        color: "#fff",
                      }}
                    >
                      <MdFullscreen />
                    </IconButton>
                  )}
                </div>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            {(userDetails?.role === "super_admin" ||
              userDetails?.role === "ci_leadership" ||
              userDetails?.role === "project_manager" ||
              userDetails?.role === "mel_analyst") &&
              (!isVerified || imageStatus === "not_verified") && (
                <>
                  <StyledButton2 onClick={() => handleSessionValidation(id, "invalid")} variant="outlined" disabled={isLoading}>
                    {isLoading ? <BeatLoader size={8} color={"#fff"} loading={isLoading} /> : "Invalid"}
                  </StyledButton2>
                  <StyledButton2 onClick={() => handleSessionValidation(id, "unclear")} variant="outlined" disabled={isLoading}>
                    {isLoading ? <BeatLoader size={8} color={"#fff"} loading={isLoading} /> : "Unclear"}
                  </StyledButton2>
                  <StyledButton onClick={() => handleSessionValidation(id, "approved")} disabled={isLoading}>
                    {isLoading ? <BeatLoader size={8} color={"#fff"} loading={isLoading} /> : "Approve"}
                  </StyledButton>
                </>
              )}
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default Imagecontainer;
