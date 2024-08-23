import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SAMPLED_VISITS_STATS, GET_BEST_PRACTICE_STATS } from '../../graphql/queries/farmVisitsRequests';
import './FarmVisitApp.css';

const pageSize = 10;
const projectId = "a0E9J000000NTjpUAG";  // Replace this with the actual project ID

const practices = [
  { name: 'Compost' },
  { name: 'Record Book' },
  { name: 'IPDM' },
  { name: 'Nutrition' },
  { name: 'Water Management' },
  { name: 'Soil Health' },
  { name: 'Crop Rotation' },
  { name: 'Pest Control' },
  { name: 'Harvesting' },
  { name: 'Marketing' },
];

// Randomly generated data for the visits
const generateRandomVisits = (page) => {
  return Array.from({ length: pageSize }, (_, i) => ({
    id: `visit-${page * pageSize + i + 1}`,
    farmerPIMAID: `PIMA-${page * pageSize + i + 1}`,
    farmerTNSID: `TNS-${page * pageSize + i + 1}`,
    dateVisited: '2024-08-01',
    farmerName: `Farmer ${page * pageSize + i + 1}`,
    farmerTrainer: `Trainer ${page * pageSize + i + 1}`,
    observation: ['Compost present', 'Record Book found', 'IPDM observed'],
    image: 'https://via.placeholder.com/150', // Placeholder image
    correctAnswer: '',
    comments: '',
  }));
};

const FarmVisitApp = () => {
  const [selectedPractice, setSelectedPractice] = useState(null);
  const [page, setPage] = useState(0);
  const [visits, setVisits] = useState([]);
  const [answers, setAnswers] = useState({});
  const [comments, setComments] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const { data: statsData, loading: statsLoading, error: statsError } = useQuery(GET_SAMPLED_VISITS_STATS, {
    variables: { projectId },
  });

  const { data: practiceStatsData, loading: practiceStatsLoading, error: practiceStatsError } = useQuery(GET_BEST_PRACTICE_STATS, {
    variables: { projectId, practiceName: selectedPractice?.name },
    skip: !selectedPractice,
  });

  const handleSelectPractice = (practice) => {
    setSelectedPractice(practice);
    setPage(0);
    setAnswers({});
    setComments({});
    setVisits(generateRandomVisits(0));  // Set random data for demo
  };

  useEffect(() => {
    if (selectedPractice) {
      setVisits(generateRandomVisits(page));  // Generate new random data when page changes
    }
  }, [page, selectedPractice]);

  const handleAnswerChange = (visitId, value) => {
    setAnswers((prev) => ({ ...prev, [visitId]: value }));
  };

  const handleCommentsChange = (visitId, value) => {
    setComments((prev) => ({ ...prev, [visitId]: value }));
  };

  const handleSubmitBatch = () => {
    const allFilled = visits.every((visit) => answers[visit.id]);

    if (!allFilled) {
      alert("Please fill out 'Correct Answer?' for all records before submitting.");
      return;
    }

    setPage((prevPage) => prevPage + 1);
    setAnswers({});
    setComments({});
  };

  const goBackToOverview = () => {
    setSelectedPractice(null);
    setPage(0);
    setAnswers({});
    setComments({});
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleDownloadReport = () => {
    alert("Download report functionality coming soon.");
  };

  if (statsLoading) return <div className="loading">Loading Dashboard Data...</div>;
  if (statsError) return <div className="error">Error: {statsError.message}</div>;

  const { totalSampledVisits, totalReviewed, remainingVisits } = statsData.getSampledVisitsStats;

  return (
    <div className="farm-visit-app">
      {!selectedPractice ? (
        <>
          <div className="dashboard-header">
            <div className="dashboard-info">
              <p><strong>Total Sampled Visits:</strong> {totalSampledVisits}</p>
              <p><strong>Total Reviewed:</strong> {totalReviewed}</p>
              <p><strong>Remaining Visits:</strong> {remainingVisits}</p>
            </div>
            <button className="download-button" onClick={handleDownloadReport}>Download Report</button>
          </div>
          <h1 className="dashboard-title">Choose Adoption Method to Review</h1>
          <div className="practices-container">
            {practices.map((practice) => (
              <PracticeCard
                key={practice.name}
                practice={practice}
                projectId={projectId}
                onSelect={handleSelectPractice}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="indicator">
            <span onClick={goBackToOverview} className="indicator-link">⬅ Back to Practice Overview</span>
          </div>
          <h2 className="sub-header">Reviewing {selectedPractice.name}</h2>
          {practiceStatsLoading && <div className="loading">Loading Reviews...</div>}
          {practiceStatsError && <div className="error">Error: {practiceStatsError.message}</div>}
          {!practiceStatsLoading && !practiceStatsError && (
            <>
              <div className="visit-list">
                {visits.map((visit) => (
                  <div key={visit.id} className="visit-item">
                    <div className="visit-details">
                      <p><strong>Farmer PIMA ID:</strong> {visit.farmerPIMAID}</p>
                      <p><strong>Farmer TNS ID:</strong> {visit.farmerTNSID}</p>
                      <p><strong>Date Visited:</strong> {visit.dateVisited}</p>
                      <p><strong>Farmer Name:</strong> {visit.farmerName}</p>
                      <p><strong>Farmer Trainer:</strong> {visit.farmerTrainer}</p>
                      <p><strong>Observations:</strong> {visit.observation.join(', ')}</p>
                    </div>
                    <div className="visit-image">
                      <img src={visit.image} alt="Farm Visit" onClick={() => handleImageClick(visit.image)} />
                    </div>
                    <div className="answer-field">
                      <label>Correct Answer?</label>
                      <select
                        value={answers[visit.id] || ''}
                        onChange={(e) => handleAnswerChange(visit.id, e.target.value)}
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
                        value={comments[visit.id] || ''}
                        onChange={(e) => handleCommentsChange(visit.id, e.target.value)}
                        placeholder="Optional comments..."
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination-controls">
                <button disabled={page === 0} onClick={() => setPage(page - 1)}>
                  Previous Page
                </button>
                <button onClick={() => setPage(page + 1)}>Next Page</button>
              </div>
              <button className="submit-button" onClick={handleSubmitBatch}>
                Submit Batch
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

// Practice card component
const PracticeCard = ({ practice, projectId, onSelect }) => {
  const { data, loading, error } = useQuery(GET_BEST_PRACTICE_STATS, {
    variables: { projectId, practiceName: practice.name },
  });

  return (
    <div className="practice-card" onClick={() => onSelect(practice)}>
      <h3>{practice.name}</h3>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error.message}</div>}
      {!loading && !error && (
        <div className="progress">
          <p><strong>Reviewed:</strong> {data?.getBestPracticeReviewStats?.reviewedVisits || 0}%</p>
          <p><strong>Remaining:</strong> {data?.getBestPracticeReviewStats?.remainingVisits || 0}%</p>
        </div>
      )}
    </div>
  );
};

export default FarmVisitApp;
