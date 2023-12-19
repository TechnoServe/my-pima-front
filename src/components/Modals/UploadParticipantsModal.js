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
import { useMutation, useQuery } from "@apollo/client";
import {
  GET_PARTICIPANTS_PER_PROJECT,
  UPLOAD_PARTICIPANTS,
} from "../../graphql/queries/participantsRequests";

const UploadParticipantsModal = ({
  open,
  setOpen,
  navigatedProject,
  sfProjectId,
}) => {
  const requiredColumns = [
    "Project",
    "first_name",
    "last_name",
    "gender",
    "age",
    "coffee_tree_numbers",
    "farmer_sf_id",
    "tns_id",
    "hh_number",
    "sf_household_id",
    "farmer_number",
    "ffg_id",
    "training_group",
    "status",
  ];

  // const requiredColumns = [
  //   "Name",
  //   "Last Name",
  //   "Gender",
  //   "Age",
  //   "Phone Number",
  //   "Primary Household Member",
  //   "TNS Id",
  //   "HouseHold Number",
  //   "HouseHold Name",
  //   "Farm Size",
  //   "Training Group",
  //   "Project",
  //   "Resend to OpenFN",
  //   "Check Status",
  //   "Create in Commcare",
  //   "Household",
  // ];
  const [fileInfo, setFileInfo] = useState(null);
  const [file, setFile] = useState(null);
  const [loadedColumns, setLoadedColumns] = useState([]);
  const [distinctProjects, setDistinctProjects] = useState([]);
  const [uploadResult, setUploadResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const [uploadParticipants] = useMutation(UPLOAD_PARTICIPANTS);

  const participantsPerProject = useQuery(GET_PARTICIPANTS_PER_PROJECT, {
    variables: { projectId: sfProjectId },
  });

  const handleChange = (file) => {
    setFile(file);
    setUploadResult(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      const loadedData = e.target.result.split(/\r\n|\n/);
      const modifiedData = [];
      // remove column called "FF NO" if present with its data
      //const ffNoIndex = loadedData[0].split(",").indexOf("FF NO");
      //if (ffNoIndex > -1) {
      loadedData.forEach((row, index) => {
        const rowArray = row.split(",");
        // rowArray.splice(ffNoIndex, 1);
        modifiedData.push(rowArray);
      });
      //}

      setFileInfo({
        filename: file.name,
        size: file.size,
        type: file.type,
        data: modifiedData.length > 0 ? modifiedData : loadedData,
      });

      console.log("Setting Loaded Columns", modifiedData[0]);

      setLoadedColumns(modifiedData[0]);
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    // get distinct values of project column
    if (!fileInfo) return;

    if (fileInfo.data && fileInfo.data.length < 2) return;

    if (loadedColumns) {
      const projectColumn = fileInfo.data.map(
        (row) => row[loadedColumns.indexOf("Project")]
      );

      // remove Project column header and falsey values
      projectColumn.shift();

      // remove falsy values
      const filteredProjectColumn = projectColumn.filter((project) => project);

      setDistinctProjects([...new Set(filteredProjectColumn)]);
    }
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

    const projectData = fileInfo.data.filter((row) => {
      const rowProject = row[projectIndex];
      return rowProject === navigatedProject;
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
      .then(async (res) => {
        // refetch participants per project
        await participantsPerProject
          .refetch()
          .then(() => {
            setUploadResult(res.data.uploadParticipants);
            setIsProcessing(false);
          })
          .catch((err) => {
            console.log(err);
          });
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
        loadedColumns &&
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
              {requiredColumns
                .filter((column) => !loadedColumns.includes(column))
                .map((column, index) => (
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
        ) : // check if project in file matches project in view and show error
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
                  fontSize: "3rem",
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
              <em
                style={{
                  fontWeight: "bold",
                }}
              >
                Name:
              </em>{" "}
              <em>{fileInfo.filename}</em>
            </Typography>
            <Typography variant="body2">
              <em
                style={{
                  fontWeight: "bold",
                }}
              >
                Size:
              </em>{" "}
              <em>
                {fileInfo.size > 1000000
                  ? `${Math.round((fileInfo.size / 1000000) * 100) / 100} MB`
                  : `${Math.round((fileInfo.size / 1000) * 100) / 100} KB`}
              </em>
            </Typography>
            <Typography variant="body2">
              <em
                style={{
                  fontWeight: "bold",
                }}
              >
                Type:
              </em>{" "}
              <em>{fileInfo.type}</em>
            </Typography>
            <Typography variant="body2">
              <em
                style={{
                  fontWeight: "bold",
                }}
              >
                Total Records:
              </em>{" "}
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
                            row[loadedColumns.indexOf("Project")];

                          return rowProject === navigatedProject;
                        }).length
                      } records)`}
                  </b>
                </em>{" "}
                will be processed from this file.
              </Typography>
            )}
            {/* add button to get back to upload new file */}
            <div className="upload_actions">
              {isProcessing ? (
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "10px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <em
                    style={{
                      fontWeight: "bold",
                      color: "#6C757D",
                    }}
                  >
                    Data are being processed, wait...
                  </em>
                </Typography>
              ) : (
                <>
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
                </>
              )}
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
