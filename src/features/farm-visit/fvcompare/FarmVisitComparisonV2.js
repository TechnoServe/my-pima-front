import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FvCompareV3 from './FvCompareV3'; // Using the new comparison component
import { dummyFarmVisitsV2 } from './dummyDataV2'; // Using the new dummy data
import './FarmVisitComparison.css';

const FarmVisitComparisonV2 = () => {
  const { householdId } = useParams();
  const navigate = useNavigate();

  // Find the FT and AA visits for the given household ID from dummy data
  const ft_data = dummyFarmVisitsV2.find(
    (visit) => visit.household_id === householdId && visit.submitted_by_role === 'FT'
  );
  const aa_data = dummyFarmVisitsV2.find(
    (visit) => visit.household_id === householdId && visit.submitted_by_role === 'AA'
  );

  if (!ft_data || !aa_data) {
    return <div>Data not found for comparison for household {householdId}.</div>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleApprove = () => {
    alert(`Visits for household ${householdId} approved!`);
    navigate('/farm-visit/approve');
  };

    const handleReject = () => {
    alert(`Visits for household ${householdId} rejected!`);
    navigate('/farm-visit/approve');
  };


  return (
    <div className="farm-visit-comparison-page">
        <div className="comparison-header">
             <h1>Farm Visit Comparison</h1>
             <p>Comparing visits for <strong>{ft_data.farmer_name}</strong> (Household: {householdId})</p>
             <button onClick={handleGoBack} className="back-button">
                &larr; Go Back
             </button>
        </div>
      <FvCompareV3 ft_data={ft_data} aa_data={aa_data} />
      <div className="comparison-actions">
        <button className="approve-btn" onClick={handleApprove}>Approve</button>
        <button className="reject-btn" onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

export default FarmVisitComparisonV2;