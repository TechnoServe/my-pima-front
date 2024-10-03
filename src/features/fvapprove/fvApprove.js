import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import {
  GET_SAMPLED_VISITS_STATS,
  GET_BEST_PRACTICE_STATS,
  GET_PAGINATED_REVIEWS,
  SUBMIT_BATCH,
  GENERATE_FARM_VISIT_REPORT,
} from "../../graphql/queries/farmVisitsRequests";
import "./fvapprove.css";
import { toast } from "react-hot-toast";
import { saveAs } from "file-saver";

const pageSize = 5;

const practices = [
  { name: "Compost" },
  { name: "Main Stems" },
  { name: "Shade Management" },
  { name: "Weeding" },
  { name: "Record Book" },
  { name: "Stumping" },
];

const placeholderImageUrl = "https://via.placeholder.com/150"; // Placeholder image URL

const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="spinner"></div>
    <p>Loading, please wait...</p>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="error-container">
    <div className="error-message">
      <h3>Something went wrong</h3>
      <p>{message}</p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  </div>
);

const FarmVisitApp = ({ selectedProject, userId }) => {
  const [selectedPractice, setSelectedPractice] = useState(null);
  const [page, setPage] = useState(0);
  const [visits, setVisits] = useState([]);
  const [filteredVisits, setFilteredVisits] = useState([]);
  const [answers, setAnswers] = useState({});
  const [comments, setComments] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingImages, setLoadingImages] = useState({});
  const [submitting, setSubmitting] = useState(false); // New state for submission loading
  const [downloadingReport, setDownloadingReport] = useState(false); // State for report download

  const {
    data: statsData,
    loading: statsLoading,
    error: statsError,
  } = useQuery(GET_SAMPLED_VISITS_STATS, {
    variables: { projectId: selectedProject },
  });

  const {
    data: visitsData,
    loading: visitsLoading,
    error: visitsError,
    refetch: refetchVisits,
  } = useQuery(GET_PAGINATED_REVIEWS, {
    variables: {
      projectId: selectedProject,
      practiceName: selectedPractice ? selectedPractice.name : "",
      page: 0,
      pageSize: 1000,
    },
    skip: !selectedPractice, // Skip the query until a practice is selected
    fetchPolicy: "network-only",
  });

  const [submitBatchMutation] = useMutation(SUBMIT_BATCH);
  const [generateFarmVisitReport] = useLazyQuery(GENERATE_FARM_VISIT_REPORT, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (visitsData && visitsData.getPaginatedReviews) {
      setVisits(visitsData.getPaginatedReviews);
    }
  }, [visitsData]);

  useEffect(() => {
    if (selectedPractice) {
      const filtered = visits.filter((visit) =>
        visit.BestPractices.some(
          (bp) => bp.practice_name === selectedPractice.name
        )
      );
      setFilteredVisits(filtered);
    }
  }, [selectedPractice, visits]);

  const handleSelectPractice = (practice) => {
    setSelectedPractice(practice);
    setPage(0);
    setAnswers({});
    setComments({});
    refetchVisits({ practiceName: practice.name });
  };

  const handleAnswerChange = (visitId, value) => {
    setAnswers((prev) => ({ ...prev, [visitId]: value }));
  };

  const handleCommentsChange = (visitId, value) => {
    setComments((prev) => ({ ...prev, [visitId]: value }));
  };

  const handleSubmitBatch = () => {
    // Get the current page's filtered visits
    const currentPageVisits = filteredVisits.slice(
      page * pageSize,
      (page + 1) * pageSize
    );

    // Check if all the answers have been filled out
    const allFilled = currentPageVisits.every(
      (visit) => answers[visit.visit_id]
    );

    if (!allFilled) {
      toast.error(
        "Please fill out 'Correct Answer?' for all records before submitting."
      );
      return;
    }

    // Prepare the batch input for the API call
    const batchInput = currentPageVisits.map((visit) => {
      const bestPractice = visit.BestPractices.find(
        (bp) => bp.practice_name === selectedPractice.name
      );

      return {
        practice_id: bestPractice.practice_id,
        correct_answer: answers[visit.visit_id].toLowerCase(),
        comment: comments[visit.visit_id] || "",
        user_id: userId,
      };
    });

    // Show loading spinner and disable submit button
    setSubmitting(true);

    // Call the API to submit the batch
    submitBatchMutation({
      variables: {
        input: batchInput,
      },
    })
      .then((response) => {
        setSubmitting(false);

        if (response.data.submitBatch.success) {
          toast.success("Batch submitted successfully!");

          // Reset answers and comments
          setAnswers({});
          setComments({});

          // Reset page to 0 and refetch visits data
          setPage(0);
          refetchVisits({ fetchPolicy: "network-only" });
        } else {
          toast.error(
            "Failed to submit batch: " + response.data.submitBatch.message
          );
        }
      })
      .catch((error) => {
        setSubmitting(false);
        console.error("Error submitting batch:", error);
        toast.error("An error occurred while submitting the batch.");
      });
  };

  const goBackToOverview = () => {
    setSelectedPractice(null);
    setPage(0);
    setAnswers({});
    setComments({});
  };

  const handleImageClick = (formId, imageId) => {
    setSelectedImage(
      `${process.env.REACT_APP_API_URL}/image/${formId}/${imageId}`
    );
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleImageLoad = (imageId) => {
    setLoadingImages((prev) => ({ ...prev, [imageId]: false }));
  };

  const handleImageError = (imageId) => {
    setLoadingImages((prev) => ({ ...prev, [imageId]: false }));
  };

  const handleDownloadReport = () => {
    if (!selectedProject) {
      toast.error("No project selected.");
      return;
    }

    setDownloadingReport(true);
    generateFarmVisitReport({ variables: { projectId: selectedProject } })
      .then((response) => {
        const { generateFarmVisitReport } = response.data;
        if (generateFarmVisitReport.status === 200 && generateFarmVisitReport.file) {
          const base64Data = generateFarmVisitReport.file.split(',')[1]; // Removing the data URI prefix
          const blob = base64ToBlob(
            base64Data,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          );
          saveAs(blob, "farm_visit_statistics.xlsx");
          toast.success("Download started.");
        } else {
          toast.error(generateFarmVisitReport.message || "Failed to generate report.");
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

  if (statsLoading) return <LoadingSpinner />;
  if (statsError) return <ErrorMessage message={statsError.message} />;

  const { totalSampledVisits, totalReviewed, remainingVisits } =
    statsData.getSampledVisitsStats;

  return (
    <div className="farm-visit-app">
      {!selectedPractice ? (
        <>
          <div className="dashboard-header">
            <div className="dashboard-info">
              <p>
                <strong>Total Sampled Visits:</strong> {totalSampledVisits}
              </p>
              <p>
                <strong>Total Reviewed:</strong> {totalReviewed}
              </p>
              <p>
                <strong>Remaining Visits:</strong> {remainingVisits}
              </p>
            </div>
            <button
              className="download-button"
              onClick={handleDownloadReport}
              disabled={downloadingReport}
            >
              {downloadingReport ? "Downloading..." : "Download Report"}
            </button>
          </div>
          <h1 className="dashboard-title">Choose Adoption Method to Review</h1>
          <div className="practices-container">
            {practices.map((practice) => (
              <PracticeCard
                key={practice.name}
                practice={practice}
                projectId={selectedProject}
                onSelect={handleSelectPractice}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="indicator">
            <span onClick={goBackToOverview} className="indicator-link">
              Back to Practice Overview
            </span>
          </div>
          <h2 className="sub-header">Reviewing {selectedPractice.name}</h2>
          {visitsLoading && <LoadingSpinner />}
          {visitsError && <ErrorMessage message={visitsError.message} />}
          {!visitsLoading && !visitsError && filteredVisits.length > 0 && (
            <>
              <div className="visit-list">
                {filteredVisits
                  .slice(page * pageSize, (page + 1) * pageSize)
                  .map((visit) => {
                    const bestPractice = visit.BestPractices.find(
                      (bp) => bp.practice_name === selectedPractice.name
                    );

                    const [formId, imageId] =
                      bestPractice?.image_url?.split("/").slice(-2) || [];

                    return (
                      <div key={visit.visit_id} className="visit-item">
                        <div className="visit-details">
                          <p>
                            <strong>Farmer PIMA ID:</strong>{" "}
                            {visit.farmer_pima_id}
                          </p>
                          <p>
                            <strong>Farmer TNS ID:</strong>{" "}
                            {visit.farmer_tns_id}
                          </p>
                          <p>
                            <strong>Date Visited:</strong> {visit.date_visited}
                          </p>
                          <p>
                            <strong>Farmer Name:</strong> {visit.farmer_name}
                          </p>
                          <p>
                            <strong>Farmer Trainer:</strong>{" "}
                            {visit.farmer_trainer}
                          </p>
                          <p>
                            <strong>Question:</strong>{" "}
                            {bestPractice?.question || "N/A"}
                          </p>
                          <p>
                            <strong>Observation:</strong>{" "}
                            {bestPractice?.answer || "N/A"}
                          </p>
                        </div>

                        <div className="visit-image">
                          {loadingImages[imageId] && <LoadingSpinner />}
                          <img
                            src={
                              bestPractice?.image_url
                                ? `${process.env.REACT_APP_API_URL}/image/${formId}/${imageId}`
                                : placeholderImageUrl
                            }
                            alt="Farm Visit"
                            style={{
                              display: loadingImages[imageId]
                                ? "none"
                                : "block",
                            }}
                            onLoad={() => handleImageLoad(imageId)}
                            onError={() => handleImageError(imageId)}
                            onClick={() => handleImageClick(formId, imageId)}
                          />
                        </div>

                        <div className="answer-field">
                          <label>Correct Answer?</label>
                          <select
                            value={answers[visit.visit_id] || ""}
                            onChange={(e) =>
                              handleAnswerChange(visit.visit_id, e.target.value)
                            }
                          >
                            <option value="">-- Select --</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Unclear">Unclear</option>
                          </select>
                        </div>

                        <div className="comment-field">
                          <label>Comments:</label>
                          <textarea
                            value={comments[visit.visit_id] || ""}
                            onChange={(e) =>
                              handleCommentsChange(
                                visit.visit_id,
                                e.target.value
                              )
                            }
                            placeholder="Optional comments..."
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="pagination-controls">
                <button disabled={page === 0} onClick={() => setPage(page - 1)}>
                  Previous Page
                </button>
                <button
                  disabled={
                    page >= Math.floor(filteredVisits.length / pageSize)
                  }
                  onClick={() => setPage(page + 1)}
                >
                  Next Page
                </button>
              </div>
              <button
                className="submit-button"
                onClick={handleSubmitBatch}
                disabled={submitting} // Disable the button while submitting
              >
                {submitting ? "Submitting..." : "Submit Batch"}
              </button>
            </>
          )}
          {selectedImage && (
            <div className="image-modal" onClick={closeImageModal}>
              <img src={selectedImage} alt="Fullscreen Farm Visit" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const PracticeCard = ({ practice, onSelect, projectId }) => {
  const { data, loading, error } = useQuery(GET_BEST_PRACTICE_STATS, {
    variables: { projectId, practiceName: practice.name },
  });

  return (
    <div className="practice-card" onClick={() => onSelect(practice)}>
      <h3>{practice.name}</h3>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error.message} />}
      {!loading && !error && (
        <div className="progress">
          <p>
            <strong>Reviewed:</strong>{" "}
            {data?.getBestPracticeReviewStats?.reviewedVisits || 0}
          </p>
          <p>
            <strong>Remaining:</strong>{" "}
            {data?.getBestPracticeReviewStats?.remainingVisits || 0}
          </p>
        </div>
      )}
    </div>
  );
};

export default FarmVisitApp;
