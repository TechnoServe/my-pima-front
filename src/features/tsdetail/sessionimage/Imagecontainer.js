import React from "react";
import {
  Dialog,
  Button,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { MdClose, MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_TRAINING_SESSIONS_PER_PROJECT,
  VALIDATE_TRAINING_SESSION,
} from "../../../graphql/queries/trainingSessionsRequests";
import { BeatLoader } from "react-spinners";
import { toast } from "react-hot-toast";

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
  borderColor: "rgba(200, 27, 27, 1)", // Change the outline color here

  "&:hover": {
    backgroundColor: "rgba(235, 87, 87, 0.1)",
    transition: "background-color 0.3s ease-in-out",
    borderColor: "rgba(200, 27, 27, 1)",
  },
  ".MuiButton-outlined": {
    color: "rgba(235, 87, 87, 1)",
  },
}));

const Imagecontainer = ({
  open,
  handleClose,
  sessionImageUrl,
  id,
  isVerified,
  imageStatus,
  selectedProject,
  loading,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userDetails = JSON.parse(window.localStorage.getItem("myPimaUserData"));

  const [validateSession] = useMutation(VALIDATE_TRAINING_SESSION);

  const trainingSessionsPerProject = useQuery(
    GET_TRAINING_SESSIONS_PER_PROJECT,
    {
      variables: { sfProjectId: selectedProject },
    }
  );

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
      {!loading ? (
        <Dialog
          open={open}
          keepMounted
          fullWidth
          aria-describedby="alert-dialog-slide-description"
        >
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
            <p>SESSION IMAGE</p>
          </div>

          <DialogContent>
            <div style={{ position: "relative" }}>
              <img
                src={sessionImageUrl}
                alt="session_pic"
                style={{
                  width: "100%",
                  height: "auto",
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
          </DialogContent>

          <DialogActions>
            {(userDetails?.role === "super_admin" ||
              userDetails?.role === "ci_leadership" ||
              userDetails?.role === "senior_business_advisor" ||
              userDetails?.role === "business_advisor" ||
              userDetails?.role === "project_manager" ||
              userDetails?.role === "farmer_trainer") &&
              (!isVerified || imageStatus === "not_verified") && (
                <>
                  <StyledButton2
                    onClick={() => handleSessionValidation(id, "invalid")}
                    variant="outlined"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <BeatLoader size={8} color={"#fff"} loading={isLoading} />
                    ) : (
                      "Invalid"
                    )}
                  </StyledButton2>
                  <StyledButton2
                    onClick={() => handleSessionValidation(id, "unclear")}
                    variant="outlined"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <BeatLoader size={8} color={"#fff"} loading={isLoading} />
                    ) : (
                      "Unclear"
                    )}
                  </StyledButton2>
                  <StyledButton
                    onClick={() => handleSessionValidation(id, "approved")}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <BeatLoader size={8} color={"#fff"} loading={isLoading} />
                    ) : (
                      "Approve"
                    )}
                  </StyledButton>
                </>
              )}
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          keepMounted
          fullWidth
          aria-describedby="alert-dialog-slide-description"
        >
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

          <div>
            <h3>Loading Image...</h3>
          </div>
          
        </Dialog>
      )}
    </>
  );
};

export default Imagecontainer;
