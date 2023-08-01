import React from "react";
import {
  Dialog,
  Button,
  DialogContent,
  DialogActions,
  IconButton,
  Chip,
} from "@mui/material";
import {
  MdClose,
  MdCancel,
  MdCheck,
  MdFullscreen,
  MdFullscreenExit,
} from "react-icons/md";
import { useState } from "react";
import { styled } from "@mui/material/styles";

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

const Imagecontainer = ({ open, handleClose, sessionImageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleApprove = () => {
    setIsApproved(true);
    setIsRejected(false);
  };

  const handleReject = () => {
    setIsRejected(true);
    setIsApproved(false);
  };

  return (
    <>
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
              src={`data:image/jpeg;base64,${sessionImageUrl}`}
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
          {isApproved ? (
            <Chip
              label="Approved"
              sx={{
                fontSize: "12px",
                marginBottom: "10px",
                backgroundColor: "#ECFAF2",
                color: "#41C980",
              }}
              icon={<MdCheck color="41C980" />}
            />
          ) : isRejected ? (
            <Chip
              label="Rejected"
              sx={{
                fontSize: "12px",
                marginBottom: "10px",
                backgroundColor: "#FFF5F5",
                color: "#C81B1B",
              }}
              icon={<MdCancel color="C81B1B" />}
            />
          ) : (
            <>
              <StyledButton onClick={handleApprove}>Approve</StyledButton>
              <StyledButton2 onClick={handleReject} variant="outlined">
                Reject
              </StyledButton2>
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Imagecontainer;
