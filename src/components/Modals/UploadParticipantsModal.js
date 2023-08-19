import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
  DialogActions,
  Chip,
  Alert,
} from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_PARTICIPANTS } from "../../graphql/queries/participantsRequests";

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
  const [file, setFile] = useState(null);
  const [loadedColumns, setLoadedColumns] = useState([]);
  const [distinctProjects, setDistinctProjects] = useState([]);
  const [uploadResult, setUploadResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const [uploadParticipants] = useMutation(UPLOAD_PARTICIPANTS);

  const handleChange = (file) => {
    setFile(file);
    setUploadResult(null);

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
    setOpen(false);
  };

  const handleUpload = async () => {
    if (isProcessing) return;

    setIsProcessing(true);
    setUploadResult(null);
    // write new csv file with data belonging to project in view
    const projectIndex = loadedColumns.indexOf("Project");
    const project = fileInfo.data[1].split(",")[projectIndex];

    const projectData = fileInfo.data.filter((row) => {
      const rowProject = row.split(",")[projectIndex];
      return rowProject === project;
    });

    const projectDataString = `${loadedColumns.join(",")}\n${projectData.join(
      "\n"
    )}`;

    const newFile = new File([projectDataString], fileInfo.filename, {
      type: "text/csv",
    });

    await uploadParticipants({
      variables: {
        partsFile: newFile,
      },
    })
      .then((res) => {
        setUploadResult(res.data.uploadParticipants);
        setIsProcessing(false);
      })
      .catch((err) => {
        console.log(err);

        setIsProcessing(false);
        setUploadResult({
          status: 500,
          message: "Something went wrong. Please try again.",
        });
      });
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
        ) : // check is uploadResult is not null and show result
        uploadResult ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="file-info"
          >
            <Typography variant="body2">
              {uploadResult.status === 200 ? (
                <Alert severity="success">{uploadResult.message}</Alert>
              ) : (
                <Alert severity="error">{uploadResult.message}</Alert>
              )}
            </Typography>
          </Box>
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
                  if (!isProcessing) {
                    setFileInfo(null);
                  }
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={isProcessing}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadParticipantsModal;
