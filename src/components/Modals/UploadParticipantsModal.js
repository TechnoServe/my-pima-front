import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUploadOutlined";

const FileUploadContainer = () => {
  const [fileInfo, setFileInfo] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can perform validations here (file type, size, etc.)
      // For simplicity, let's assume the file is valid

      // Set file info
      setFileInfo({
        name: file.name,
        size: file.size,
      });
    }
  };

  const handleUpload = () => {
    // Simulating upload progress
    setUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress = Math.min(progress + 10, 100);
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
        setUploading(false);
      }
    }, 500);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      border="dashed 2px #ccc"
      padding={2}
    >
      {!fileInfo ? (
        <>
          <label
            htmlFor="file-input"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <CloudUploadIcon fontSize="large" />
            <Typography variant="subtitle1">
              Drag and drop a file here or click to upload.
            </Typography>
            <Typography variant="body2">
              Supported file types with max size.
            </Typography>
          </label>
          <input
            id="file-input"
            type="file"
            accept=".csv, .xlsx"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
        </>
      ) : (
        <>
          <Typography variant="h6">{fileInfo.name}</Typography>
          <Typography
            variant="body2"
            align="center"
            fontStyle={{ fontStyle: "italic" }}
          >
            <h5>File Size:</h5>
            {
              // convert size to KB with 2 decimal places
              // when size is larger than 1MB, convert to MB with 2 decimal places
              fileInfo.size > 1024 * 1024
                ? ` ${(fileInfo.size / (1024 * 1024)).toFixed(2)} MB`
                : ` ${(fileInfo.size / 1024).toFixed(2)} KB`
            }
          </Typography>
          <Typography
            variant="body2"
            align="center"
            fontStyle={{ fontStyle: "italic" }}
          >
            <h5>Total Records:</h5>
            {" 40"}
          </Typography>
          <Typography variant="body2">{`${uploadProgress}% Uploaded`}</Typography>
          {uploading ? (
            <CircularProgress size={60} thickness={5} />
          ) : (
            <button onClick={handleUpload}>Proceed</button>
          )}
        </>
      )}
    </Box>
  );
};

const UploadParticipantsModal = ({ open, setOpen, columns, data }) => {
  const handleClose = (event, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      return;
    }

    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Upload Participants</DialogTitle>
      <DialogContent>
        <FileUploadContainer />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Upload</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadParticipantsModal;
