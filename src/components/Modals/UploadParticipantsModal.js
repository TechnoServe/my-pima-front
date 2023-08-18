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
  Chip,
} from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";
import { useEffect } from "react";

const UploadParticipantsModal = ({ open, setOpen, navigatedProject }) => {
  const requiredColumns = [
    "Name",
    "Last Name",
    "Gender",
    "Age",
    "Phone Number",
    "Primary Household Member",
    "TNS Id",
    "HouseHold Number",
    "HouseHold Name",
    "Farm Size",
    "FF NO",
    "Training Group",
    "Project",
    "Resend to OpenFN",
    "Check Status",
    "Create in Commcare",
    "Household",
  ];
  const [fileInfo, setFileInfo] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [file, setFile] = useState(null);
  const [loadedColumns, setLoadedColumns] = useState([]);
  const [distinctProjects, setDistinctProjects] = useState([]);

  const handleChange = (file) => {
    setFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setFileInfo({
        filename: file.name,
        size: file.size,
        type: file.type,
        data: e.target.result.split(/\r\n|\n/),
      });

      const loadedData = e.target.result.split(/\r\n|\n/);
      const loadedColumns = loadedData[0].split(",");

      setLoadedColumns(loadedColumns);
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    // get distinct values of project column
    if (!fileInfo) return;

    if (fileInfo.data && fileInfo.data.length < 2) return;

    const projectColumn = fileInfo.data.map(
      (row) => row.split(",")[loadedColumns.indexOf("Project")]
    );

    // remove Project column header and falsey values
    projectColumn.shift();

    // remove falsy values
    const filteredProjectColumn = projectColumn.filter((project) => project);

    setDistinctProjects([...new Set(filteredProjectColumn)]);
  }, [fileInfo, loadedColumns]);

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;

    setFileInfo(null);
    setUploadPercentage(0);
    setOpen(false);
  };

  const handleUpload = () => {
    // write new csv file with data belonging to project in view
    const projectIndex = loadedColumns.indexOf("Project");
    const project = fileInfo.data[1].split(",")[projectIndex];

    const projectData = fileInfo.data.filter((row) => {
      const rowProject = row.split(",")[projectIndex];
      return rowProject === project;
    });

    const projectDataString = `${loadedColumns.join(",")}\n${projectData.join("\n")}`;

    const newFile = new File([projectDataString], fileInfo.filename, {
      type: "text/csv",
    });

    console.log(projectDataString);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        {!fileInfo ? (
          <FileUploader
            label={"Drag and drop or browse a file to upload. File must be: "}
            handleChange={handleChange}
            name="file"
            types={["csv"]}
          />
        ) : // check if all required columns are not present and show error
        loadedColumns.filter((column) => requiredColumns.includes(column))
            .length !== requiredColumns.length ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="file-info"
          >
            <Typography variant="body1">
              <BiErrorAlt
                style={{
                  fontSize: "2rem",
                  color: "#B90101",
                }}
              />
              File must contain all required columns:{" "}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {requiredColumns.map((column, index) => (
                <Chip
                  key={index}
                  label={column}
                  sx={{
                    margin: "5px 0.5rem",
                  }}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Typography>
            <div className="upload_actions">
              <AiOutlineCloseCircle
                onClick={() => {
                  setFileInfo(null);
                  setUploadPercentage(0);
                }}
                className="back__icon"
                title="Back to Upload New File"
              />
            </div>
          </Box>
        ) : // check if fileinfo data are empty and show error
        fileInfo.data.length - 2 < 1 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="file-info"
          >
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
              }}
            >
              <BiErrorAlt
                style={{
                  fontSize: "1.5rem",
                  color: "#B90101",
                }}
              />
              There are no records in the file. Please upload a file with data.
            </Typography>
            <div className="upload_actions">
              <AiOutlineCloseCircle
                onClick={() => {
                  setFileInfo(null);
                  setUploadPercentage(0);
                }}
                className="back__icon"
                title="Back to Upload New File"
              />
            </div>
          </Box>
        ) : // check if project in file matches project in view
        distinctProjects.length === 1 &&
          !distinctProjects.includes(navigatedProject) ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="file-info"
          >
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
              }}
            >
              <BiErrorAlt
                style={{
                  fontSize: "1.5rem",
                  color: "#B90101",
                }}
              />
              The project(s) in the file does not match the project you are
              currently navigating. Please upload a file with the correct
              project.
            </Typography>
            <div className="upload_actions">
              <AiOutlineCloseCircle
                onClick={() => {
                  setFileInfo(null);
                  setUploadPercentage(0);
                }}
                className="back__icon"
                title="Back to Upload New File"
              />
            </div>
          </Box>
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
              <h5>Total Records:</h5>{" "}
              <em>
                {
                  // format number with commas
                  (fileInfo.data.length - 2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
              </em>
            </Typography>
            {distinctProjects.length > 1 && (
              <Typography variant="body4" sx={{ marginBottom: "10px" }}>
                Only records for{" "}
                <em>
                  <b>
                    {navigatedProject}{" "}
                    {`(
                      ${
                        fileInfo.data.filter((row) => {
                          const rowProject =
                            row.split(",")[loadedColumns.indexOf("Project")];
                          return (
                            rowProject ===
                            fileInfo.data[1].split(",")[
                              loadedColumns.indexOf("Project")
                            ]
                          );
                        }).length
                      } records)`}
                  </b>
                </em>{" "}
                will be processed from this file.
              </Typography>
            )}
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
                onClick={handleUpload}
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
            <Typography variant="body1">{`${uploadPercentage}%`}</Typography>
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
