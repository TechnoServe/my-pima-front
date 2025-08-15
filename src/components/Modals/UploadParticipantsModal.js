import React, { useState, useEffect, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Box,
  DialogActions,
  Chip,
  Alert,
  Paper,
  Stack,
  Divider,
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

const BRAND = { navy: "#1b2a4e", teal: "#087c8f" };

const requiredColumns = [
  "Project","first_name","last_name","gender","age","coffee_tree_numbers",
  "farmer_sf_id","tns_id","hh_number","sf_household_id","farmer_number",
  "ffg_id","training_group","status",
];

const UploadParticipantsModal = ({ open, setOpen, navigatedProject, sfProjectId }) => {
  const [fileInfo, setFileInfo] = useState(null);
  const [file, setFile] = useState(null);
  const [loadedColumns, setLoadedColumns] = useState([]);
  const [distinctProjects, setDistinctProjects] = useState([]);
  const [uploadResult, setUploadResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const [uploadParticipants] = useMutation(UPLOAD_PARTICIPANTS);
  const participantsPerProject = useQuery(GET_PARTICIPANTS_PER_PROJECT, {
    variables: { projectId: sfProjectId },
    skip: !sfProjectId,
  });

  const handleChange = (f) => {
    setFile(f);
    setUploadResult(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      const lines = e.target.result.split(/\r\n|\n/);
      const rows = lines.map((row) => row.split(",").map((c) => c.replace(/^"(.*)"$/, "$1")));
      setFileInfo({
        filename: f.name,
        size: f.size,
        type: f.type,
        data: rows.length > 0 ? rows : lines,
      });
      setLoadedColumns(rows[0] || []);
    };
    reader.readAsText(f);
  };

  useEffect(() => {
    if (!fileInfo?.data || fileInfo.data.length < 2) return;
    const idx = loadedColumns.indexOf("Project");
    const values = fileInfo.data.map((r) => r[idx]).filter(Boolean);
    setDistinctProjects([...new Set(values)]);
  }, [fileInfo, loadedColumns]);

  const reset = () => {
    setFileInfo(null);
    setFile(null);
    setLoadedColumns([]);
    setDistinctProjects([]);
    setUploadResult(null);
    setIsProcessing(false);
    setOpen(false);
  };

  const validColumnsCount = loadedColumns.filter((c) => requiredColumns.includes(c)).length;
  const showRequiredColsError = fileInfo && validColumnsCount !== requiredColumns.length;
  const emptyFile = fileInfo && fileInfo.data && fileInfo.data.length - 2 < 1;
  const projectMismatch = fileInfo && distinctProjects.length > 0 && !distinctProjects.includes(navigatedProject);

  const recordCountForActiveProject = useMemo(() => {
    if (!fileInfo || !loadedColumns.length) return 0;
    const idx = loadedColumns.indexOf("Project");
    return Math.max(0, fileInfo.data.filter((r) => r[idx] === navigatedProject).length - 1);
  }, [fileInfo, loadedColumns, navigatedProject]);

  const createProjectSpecificFile = () => {
    const idx = loadedColumns.indexOf("Project");
    const rows = fileInfo.data.filter((r) => r[idx] === navigatedProject);
    const csv = `${loadedColumns.join(",")}\n${rows.map((r) => r.join(",")).join("\n")}`;
    return new File([csv], fileInfo.filename, { type: "text/csv" });
    };

  const handleUpload = async () => {
    if (isProcessing || !fileInfo) return;
    setIsProcessing(true);
    setUploadResult(null);
    try {
      const newFile = createProjectSpecificFile();
      const res = await uploadParticipants({ variables: { partsFile: newFile, projectId: sfProjectId } });
      await participantsPerProject.refetch();
      setUploadResult(res.data.uploadParticipants);
    } catch (e) {
      console.error(e);
      setUploadResult({ status: 500, message: "Something went wrong. Please try again." });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadErrors = () => {
    if (!uploadResult?.file) return;
    const bin = atob(uploadResult.file);
    const bytes = new Uint8Array([...bin].map((c) => c.charCodeAt(0)));
    const blob = new Blob([bytes], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "errors.xlsx");
  };

  return (
    <Dialog open={open} onClose={(_, r) => (r === "backdropClick" || r === "escapeKeyDown" ? null : reset())} fullWidth maxWidth="sm">
      <DialogTitle sx={{ pb: 1, color: BRAND.navy }}>Upload Participants</DialogTitle>
      <DialogContent sx={{ pt: 0 }}>
        {!fileInfo ? (
          <Paper elevation={0} sx={{ p: 2, border: "1px dashed #cfd8dc", borderRadius: 2, bgcolor: "#fff" }}>
            <FileUploader
              label="Drag & drop or browse a CSV"
              handleChange={handleChange}
              name="file"
              types={["csv"]}
            />
            <Typography variant="caption" color="text.secondary">Accepted format: .csv</Typography>
          </Paper>
        ) : uploadResult ? (
          <Paper elevation={0} sx={{ p: 2 }}>
            <Alert severity={uploadResult.status === 200 ? "success" : "error"} sx={{ mb: 2 }}>
              {uploadResult.message}
            </Alert>
            {uploadResult.status !== 200 && uploadResult.file && (
              <Button onClick={handleDownloadErrors} variant="contained" sx={{ bgcolor: BRAND.teal, "&:hover": { bgcolor: "#066d79" } }}>
                Download Error File
              </Button>
            )}
          </Paper>
        ) : showRequiredColsError ? (
          <Paper elevation={0} sx={{ p: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <BiErrorAlt size={22} color="#B90101" />
              <Typography variant="body1" sx={{ fontWeight: 600, color: BRAND.navy }}>
                Missing required columns
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ mb: 1 }}>
              File must contain all of the following columns:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
              {requiredColumns
                .filter((c) => !loadedColumns.includes(c))
                .map((c) => (
                  <Chip key={c} label={c} size="small" variant="outlined" />
                ))}
            </Box>
            <Button startIcon={<AiOutlineCloseCircle />} onClick={() => setFileInfo(null)}>Choose another file</Button>
          </Paper>
        ) : emptyFile ? (
          <Paper elevation={0} sx={{ p: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <BiErrorAlt size={22} color="#B90101" />
              <Typography variant="body1" sx={{ fontWeight: 600, color: BRAND.navy }}>
                No records found in the file
              </Typography>
            </Stack>
            <Button startIcon={<AiOutlineCloseCircle />} onClick={() => setFileInfo(null)}>Choose another file</Button>
          </Paper>
        ) : projectMismatch ? (
          <Paper elevation={0} sx={{ p: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <BiErrorAlt size={22} color="#B90101" />
              <Typography variant="body1" sx={{ fontWeight: 600, color: BRAND.navy }}>
                Project mismatch
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Uploaded file contains projects that don’t match: <b>{navigatedProject}</b>.
            </Typography>
            <Button startIcon={<AiOutlineCloseCircle />} onClick={() => setFileInfo(null)}>Choose another file</Button>
          </Paper>
        ) : (
          <Paper elevation={0} sx={{ p: 2 }}>
            <Stack spacing={1} sx={{ mb: 1 }}>
              <Typography variant="body2"><b>Name:</b> {fileInfo.filename}</Typography>
              <Typography variant="body2">
                <b>Size:</b> {fileInfo.size > 1_000_000 ? `${(fileInfo.size / 1_000_000).toFixed(2)} MB` : `${(fileInfo.size / 1_000).toFixed(2)} KB`}
              </Typography>
              <Typography variant="body2"><b>Records for {navigatedProject}:</b> {recordCountForActiveProject}</Typography>
            </Stack>
            <Divider sx={{ my: 1 }} />
            <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
              <Button
                variant="outlined"
                startIcon={<AiOutlineCloseCircle />}
                onClick={() => setFileInfo(null)}
                disabled={isProcessing}
                sx={{ color: BRAND.navy, borderColor: BRAND.navy }}
              >
                Choose another file
              </Button>
              <Button
                variant="contained"
                startIcon={<FaCloudUploadAlt />}
                onClick={handleUpload}
                disabled={isProcessing}
                sx={{ bgcolor: BRAND.teal, "&:hover": { bgcolor: "#066d79" } }}
              >
                {isProcessing ? "Processing..." : "Process & Upload"}
              </Button>
            </Stack>
          </Paper>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={reset} disabled={isProcessing}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadParticipantsModal;
