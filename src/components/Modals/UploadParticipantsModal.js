import React, { useState, useEffect } from "react";
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
import { FileUploader } from "react-drag-drop-files";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";
import { useMutation, useQuery } from "@apollo/client";
import { saveAs } from "file-saver";
import {
  GET_PARTICIPANTS_PER_PROJECT,
  UPLOAD_PARTICIPANTS,
} from "../../graphql/queries/participantsRequests";

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

const UploadParticipantsModal = ({
  open,
  setOpen,
  navigatedProject,
  sfProjectId,
}) => {
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
    parseFile(file);
  };

  const parseFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const loadedData = e.target.result.split(/\r\n|\n/);
      const modifiedData = loadedData.map((row) =>
        row.split(",").map((cell) => cell.replace(/^"(.*)"$/, "$1"))
      );
      setFileInfo({
        filename: file.name,
        size: file.size,
        type: file.type,
        data: modifiedData.length > 0 ? modifiedData : loadedData,
      });
      setLoadedColumns(modifiedData[0]);
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    if (!fileInfo) return;
    if (fileInfo.data && fileInfo.data.length < 2) return;
    extractDistinctProjects(fileInfo);
  }, [fileInfo, loadedColumns]);

  const extractDistinctProjects = (fileInfo) => {
    const projectColumn = fileInfo.data
      .map((row) => row[loadedColumns.indexOf("Project")])
      .filter((project) => project);
    setDistinctProjects([...new Set(projectColumn)]);
  };

  const handleClose = (e, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    resetState();
  };

  const resetState = () => {
    setFileInfo(null);
    setOpen(false);
  };

  const handleUpload = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setUploadResult(null);
    const newFile = createProjectSpecificFile(
      fileInfo,
      loadedColumns,
      navigatedProject
    );
    await uploadFile(newFile);
  };

  const createProjectSpecificFile = (fileInfo, loadedColumns, project) => {
    const projectIndex = loadedColumns.indexOf("Project");
    const projectData = fileInfo.data.filter(
      (row) => row[projectIndex] === project
    );
    const projectDataString = `${loadedColumns.join(",")}\n${projectData.join(
      "\n"
    )}`;
    return new File([projectDataString], fileInfo.filename, {
      type: "text/csv",
    });
  };

  const uploadFile = async (file) => {
    try {
      const res = await uploadParticipants({ variables: { partsFile: file } });
      await participantsPerProject.refetch();
      setUploadResult(res.data.uploadParticipants);
      if (res.data.uploadParticipants.status === 200) {
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setUploadResult({
        status: 500,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadErrors = () => {
    const { file, message } = uploadResult;
    if (file) {
      const byteCharacters = atob(file);
      const byteNumbers = new Array(byteCharacters.length).fill().map((_, i) => byteCharacters.charCodeAt(i));
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      saveAs(blob, "error_file.xlsx");
    } else {
      console.error("No file found in the upload result.");
    }
  };

  const renderFileDetails = () => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="body2">
        <strong>Name:</strong> {fileInfo.filename}
      </Typography>
      <Typography variant="body2">
        <strong>Size:</strong> {formatFileSize(fileInfo.size)}
      </Typography>
      <Typography variant="body2">
        <strong>Type:</strong> {fileInfo.type}
      </Typography>
      <Typography variant="body2">
        <strong>Total Records:</strong> {formatNumberWithCommas(fileInfo.data.length - 2)}
      </Typography>
      {distinctProjects.length > 1 && (
        <Typography variant="body4" sx={{ marginBottom: "10px" }}>
          Only records for <strong>{navigatedProject} ({fileInfo.data.filter((row) => row[loadedColumns.indexOf("Project")] === navigatedProject).length} records)</strong> will be processed from this file.
        </Typography>
      )}
    </Box>
  );

  const formatFileSize = (size) => (
    size > 1000000 ? `${(size / 1000000).toFixed(2)} MB` : `${(size / 1000).toFixed(2)} KB`
  );

  const formatNumberWithCommas = (number) => (
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );

  const renderRequiredColumnsAlert = () => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="body1">
        <BiErrorAlt style={{ fontSize: "2rem", color: "#B90101" }} /> File must contain all required columns:
      </Typography>
      <Typography variant="body2" sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {requiredColumns.filter((column) => !loadedColumns.includes(column)).map((column, index) => (
          <Chip key={index} label={column} sx={{ margin: "5px 0.5rem" }} color="primary" variant="outlined" />
        ))}
      </Typography>
      <div className="upload_actions">
        <AiOutlineCloseCircle onClick={() => setFileInfo(null)} className="back__icon" title="Back to Upload New File" />
      </div>
    </Box>
  );

  const renderEmptyFileAlert = () => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="body1" sx={{ fontStyle: "italic" }}>
        <BiErrorAlt style={{ fontSize: "1.5rem", color: "#B90101" }} /> There are no records in the file. Please upload a file with data.
      </Typography>
      <div className="upload_actions">
        <AiOutlineCloseCircle onClick={() => setFileInfo(null)} className="back__icon" title="Back to Upload New File" />
      </div>
    </Box>
  );

  const renderProjectMismatchAlert = () => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="body1" sx={{ fontStyle: "italic" }}>
        <BiErrorAlt style={{ fontSize: "3rem", color: "#B90101" }} /> The project(s) in the file does not match the project you are currently navigating. Please upload a file with the correct project.
      </Typography>
      <div className="upload_actions">
        <AiOutlineCloseCircle onClick={() => setFileInfo(null)} className="back__icon" title="Back to Upload New File" />
      </div>
    </Box>
  );

  const renderProcessingState = () => (
    <Typography variant="body2" sx={{ marginBottom: "10px", width: "100%", textAlign: "center" }}>
      <em style={{ fontWeight: "bold", color: "#6C757D" }}>Data are being processed, wait...</em>
    </Typography>
  );

  const renderUploadResult = () => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="file-info">
      <Typography variant="body2">
        <Alert severity={uploadResult.status === 200 ? "success" : "error"}>{uploadResult.message}</Alert>
      </Typography>
      {uploadResult.status !== 200 && uploadResult.file && (
        <Button onClick={handleDownloadErrors} variant="contained" color="primary">
          Download Error File
        </Button>
      )}
    </Box>
  );

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        {!fileInfo ? (
          <FileUploader label={"Drag and drop or browse a file to upload. File must be: "} handleChange={handleChange} name="file" types={["csv"]} />
        ) : uploadResult ? (
          renderUploadResult()
        ) : loadedColumns.filter((column) => requiredColumns.includes(column)).length !== requiredColumns.length ? (
          renderRequiredColumnsAlert()
        ) : fileInfo.data.length - 2 < 1 ? (
          renderEmptyFileAlert()
        ) : !distinctProjects.includes(navigatedProject) ? (
          renderProjectMismatchAlert()
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="file-info">
            {renderFileDetails()}
            <div className="upload_actions">
              {isProcessing ? renderProcessingState() : (
                <>
                  <AiOutlineCloseCircle onClick={() => setFileInfo(null)} className="back__icon" title="Back to Upload New File" />
                  <FaCloudUploadAlt title="Proceed Records Processing" className="upload__icon" onClick={handleUpload} />
                </>
              )}
            </div>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={isProcessing}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadParticipantsModal;
