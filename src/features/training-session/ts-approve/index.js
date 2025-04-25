import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import { saveAs } from "file-saver";
import {
  GET_SAMPLED_SESSIONS,
  SUBMIT_BATCH,
  GENERATE_TS_REPORT,
} from "../../../graphql/queries/trainingSessionsRequests";
import "./styles.css";
import { toast } from "react-hot-toast";
import Statsframe from "./statsframe";
import { TextField, MenuItem, Button, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"; // Ensure correct imports
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format, subMonths } from "date-fns";
import LoadingScreen from "../../../components/LoadingScreen";
import { useRef } from "react"; // Import useRef for map reference
import { useOutletContext } from "react-router-dom";

const pageSize = 5;

const TSApprove = () => {
  const { activeProject, userId } = useOutletContext();

  const { data, loading, error, refetch } = useQuery(GET_SAMPLED_SESSIONS, {
    variables: { projectId: activeProject },
    fetchPolicy: "network-only",
  });

  const [generateTSReport] = useLazyQuery(GENERATE_TS_REPORT, {
    fetchPolicy: "network-only",
  });

  const [unfilteredSessions, setUnfilteredSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [submitBatchMutation] = useMutation(SUBMIT_BATCH);
  const [selectedSessions, setSelectedSessions] = useState({});
  const [mapVisible, setMapVisible] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [loadingImages, setLoadingImages] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const mapRef = useRef(null); // Reference for the map
  const [downloadingReport, setDownloadingReport] = useState(false);
  const [startDate, setStartDate] = useState(subMonths(new Date(), 1));
  const [endDate, setEndDate] = useState(new Date());
  const [status, setStatus] = useState("approved");

  useEffect(() => {
    if (mapVisible && mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize(); // Adjust map size when the modal opens
      }, 300);
    }
  }, [mapVisible]);

  useEffect(() => {
    if (data) {
      setUnfilteredSessions(data.sampledTrainingSessions);
      const initialLoadingState = data.sampledTrainingSessions.reduce(
        (acc, session) => {
          acc[session.id] = true;
          return acc;
        },
        {}
      );
      setLoadingImages(initialLoadingState);

      // Filter sessions with null image_review_result for the approval list
      const filtered = data.sampledTrainingSessions.filter(
        (session) => session.image_review_result === null
      );
      setFilteredSessions(filtered);
    }
  }, [data]);

  const handleSelectionChange = (sessionId, status) => {
    setSelectedSessions((prev) => ({
      ...prev,
      [sessionId]: status,
    }));
  };

  const areAllSessionsReviewed = () => {
    return filteredSessions
      .slice(0, pageSize) // Only check sessions visible on the current page
      .every((session) => selectedSessions[session.id]); // Ensure every session has a status
  };

  const handleSubmitBatch = () => {
    if (!areAllSessionsReviewed()) {
      toast.error("Please review all sessions before submitting.");
      return;
    }

    const batchInput = Object.entries(selectedSessions).map(
      ([sessionId, status]) => ({
        sessionId,
        status,
        userId,
      })
    );

    if (!batchInput.length) {
      toast.error("Please select at least one session to submit.");
      return;
    }

    setSubmitting(true);
    submitBatchMutation({ variables: { input: batchInput } })
      .then(() => {
        setSelectedSessions({});
        refetch(); // Refetch data to get updated sessions
        setSubmitting(false);
        toast.success("Batch submitted successfully!");
      })
      .catch((error) => {
        setSubmitting(false);
        console.error("Error submitting batch:", error);
        toast.error("An error occurred while submitting the batch.");
      });
  };

  const handleImageClick = (formId, imageId) => {
    setSelectedImage(
      `${process.env.REACT_APP_API_URL}/image/${formId}/${imageId}`
    );
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleViewMapClick = (session) => {
    setSelectedSession(session);
    setMapVisible(true);
  };

  const handleDownloadReport = () => {
    if (!activeProject) {
      toast.error("No project selected.");
      return;
    }

    setDownloadingReport(true);
    generateTSReport({
      variables: {
        projectId: activeProject,
        startDate: startDate ? format(startDate, "yyyy-MM-dd") : null,
        endDate: endDate ? format(endDate, "yyyy-MM-dd") : null,
        status: status || null,
      },
    })
      .then((response) => {
        const { generateTSApprovalReport } = response.data;
        if (
          generateTSApprovalReport.status === 200 &&
          generateTSApprovalReport.file
        ) {
          const base64Data = generateTSApprovalReport.file.split(",")[1];
          const blob = base64ToBlob(
            base64Data,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          );
          saveAs(blob, "training-sessions-report.xlsx");
          toast.success("Download started.");
        } else {
          toast.error(
            generateTSApprovalReport.message || "Failed to generate report."
          );
        }
        setDownloadingReport(false);
      })
      .catch((error) => {
        console.error("Error generating report:", error);
        toast.error("An error occurred while generating the report.");
        setDownloadingReport(false);
      });
  };

  const base64ToBlob = (base64Data, contentType) => {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
  };

  const sessionCoords = selectedSession
    ? { lat: selectedSession.ts_latitude, lng: selectedSession.ts_longitude }
    : { lat: -1.2921, lng: 36.8219 };

  const tsIcon = icon({
    iconUrl:
      "https://img.icons8.com/?size=100&id=60013&format=png&color=000000",
    iconSize: [35, 35],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  if (loading) return <LoadingScreen />;

  if (error)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography color="error">Error loading data</Typography>
      </div>
    );

  // Check if there are no sessions left to review
  const noDataToReview = filteredSessions.length === 0;

  return (
    <div className="training-session-app">
      {/* Dashboard Section */}
      <div className="dashboard">
        <h1 className="dashboard-title">Training Session Overview</h1>
        {/* Using unfilteredSessions for the statistics */}
        <Statsframe sampledSessions={unfilteredSessions} />
      </div>
      {/* Download Report Button */}
      {/* New Controls for Report Download */}
      <div className="report-controls">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="date-controls">
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(date) => setStartDate(date)}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(date) => setEndDate(date)}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </LocalizationProvider>

        <TextField
          className="status-select"
          label="Status"
          select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          variant="outlined"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="approved">Correct</MenuItem>
          <MenuItem value="invalid">Incorrect</MenuItem>
          <MenuItem value="unclear">Unclear</MenuItem>
          <MenuItem value="">Not Reviewed</MenuItem>
        </TextField>

        <Button
          className="download-report-button"
          variant="contained"
          color="primary"
          onClick={handleDownloadReport}
          disabled={downloadingReport}
        >
          {downloadingReport ? "Downloading..." : "Download Report"}
        </Button>
      </div>

      {/* No Data Message */}
      {noDataToReview ? (
        <div className="no__data">
          <h1 style={{ fontSize: "20px" }}>
            Currently, there are no sessions to review. 🎉
          </h1>
        </div>
      ) : (
        <>
          {/* List of Sessions with Multi-Approval */}
          <h2 className="review-sessions-title">Review Sessions</h2>
          <div className="session-list">
            {filteredSessions.slice(0, pageSize).map((session) => {
              const [formId, imageId] =
                session?.session_image_url?.split("/").slice(-2) || [];
              return (
                <div key={session.id} className="session-item">
                  <div className="session-image">
                    {loadingImages[imageId] && <LoadingScreen />}
                    <img
                      src={
                        session?.session_image_url
                          ? `${process.env.REACT_APP_API_URL}/image/${formId}/${imageId}`
                          : null
                      }
                      alt="Session"
                      onClick={() => handleImageClick(formId, imageId)}
                    />
                  </div>
                  <div className="session-details">
                    <h3>{session.training_module_name}</h3>
                    <p>
                      <strong>Trainer:</strong> {session.farmer_trainer_name}
                    </p>
                    <p>
                      <strong>Total Attendance:</strong>{" "}
                      {session.total_attendance}
                    </p>
                    <p>
                      <strong>Male Attendance:</strong>{" "}
                      {session.male_attendance}
                    </p>
                    <p>
                      <strong>Female Attendance:</strong>{" "}
                      {session.female_attendance}
                    </p>
                    <p>
                      <strong>Training Date:</strong>{" "}
                      {format(new Date(session.session_date), "MMMM dd, yyyy")}
                    </p>
                    <p>
                      <strong>Training Group Name:</strong> {session.tg_name}
                    </p>
                  </div>
                  <div className="actions-column">
                    <div className="review-actions">
                      <select
                        onChange={(e) =>
                          handleSelectionChange(session.id, e.target.value)
                        }
                      >
                        <option value="">-- Select --</option>
                        <option value="approved">Correct</option>
                        <option value="invalid">Incorrect</option>
                        <option value="unclear">Unclear</option>
                      </select>
                    </div>
                    <button
                      className="view-map-button"
                      onClick={() => handleViewMapClick(session)}
                    >
                      View Map
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Submit Button for Batch */}
          <button
            className="submit-button"
            onClick={handleSubmitBatch}
            disabled={submitting || !areAllSessionsReviewed()}
          >
            {submitting ? "Submitting..." : "Submit Batch"}
          </button>
        </>
      )}

      {/* Map Modal */}
      {mapVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>
                {selectedSession
                  ? selectedSession.training_module_name
                  : "Map View"}
              </h2>
              <button
                onClick={() => setMapVisible(false)}
                className="modal-close-button"
              >
                &times;
              </button>
            </div>
            <div className="modal-content">
              <div className="map-toolbar"></div>
              <div className="map-container">
                <MapContainer
                  center={sessionCoords}
                  zoom={6}
                  scrollWheelZoom={false}
                  style={{ height: "500px", width: "100%" }}
                  whenCreated={(mapInstance) => (mapRef.current = mapInstance)} // Assign map instance to ref
                >
                  {/* Satellite and Streets Hybrid Layer */}
                  <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieW11Z2VuZ2EiLCJhIjoiY20xN3NhOWJwMHFvcTJsc2Iyc2Z0Znd0aCJ9.A3EBUziAdNrV3nwrGvkv3g`}
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors | Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                  />
                  {/* Marker for session location */}
                  <Marker position={sessionCoords} icon={tsIcon}>
                    <Popup className="custom-popup">
                      <h3>Training Session Location</h3>
                      <p>
                        {selectedSession
                          ? selectedSession.location
                          : "San Francisco"}
                      </p>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <img src={selectedImage} alt="Fullscreen Farm Visit" />
        </div>
      )}
    </div>
  );
};

export default TSApprove;
