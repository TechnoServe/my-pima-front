import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  CircularProgress,
  Box,
  DialogActions,
} from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const UploadParticipantsModal = ({ open, setOpen, columns, data }) => {
  const [fileInfo, setFileInfo] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setFileInfo({
        filename: file.name,
        size: file.size,
        type: file.type,
        data: e.target.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;

    setFileInfo(null);
    setUploadPercentage(0);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        {!fileInfo ? (
          <FileUploader
            label={"Drag and drop or browse a file to upload. File must be: "}
            handleChange={handleChange}
            name="file"
            types={["csv", "xls", "xlsx"]}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="file-info"
          >
            <Typography variant="body2">
              <h5>Name:</h5> <em>{fileInfo.filename}</em>
            </Typography>
            <Typography variant="body2">
              <h5>Size:</h5>{" "}
              <em>
                {fileInfo.size > 1000000
                  ? `${Math.round((fileInfo.size / 1000000) * 100) / 100} MB`
                  : `${Math.round((fileInfo.size / 1000) * 100) / 100} KB`}
              </em>
            </Typography>
            <Typography variant="body2">
              <h5>Type:</h5> <em>{fileInfo.type}</em>
            </Typography>
            <Typography variant="body2">
              <h5>Total Records:</h5> <em>30</em>
            </Typography>
            {/* add button to get back to upload new file */}
            <div className="upload_actions">
              <AiOutlineCloseCircle
                onClick={() => {
                  setFileInfo(null);
                  setUploadPercentage(0);
                }}
                className="back__icon"
                title="Back to Upload New File"
              />
              <FaCloudUploadAlt
                title="Proceed Records Processing"
                className="upload__icon"
              />
            </div>
          </Box>
        )}
        {uploadPercentage > 0 && uploadPercentage < 100 && (
          <div className="progress-container">
            <CircularProgress
              variant="determinate"
              value={uploadPercentage}
              size={80}
              thickness={4}
              color="primary"
            />
            F<Typography variant="body1">{`${uploadPercentage}%`}</Typography>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadParticipantsModal;
