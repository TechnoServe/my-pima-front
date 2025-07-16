import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyFarmVisitsV2 as dummyFarmVisits } from '../fvcompare/dummyDataV2';
import FVQAModal from '../../../components/Modals/FVQAModal';
import './fvapprove.css';

const FVApproveWithCompare = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVisit, setSelectedVisit] = useState(null);
  const navigate = useNavigate();

  const farmVisits = dummyFarmVisits;

  const handleAction = (visit) => {
    setSelectedVisit(visit);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedVisit(null);
  };

  const handleCompare = (householdId) => {
    navigate(`/in/farmvisit/compare/${householdId}`);
  };

  const visitsByHousehold = useMemo(() => {
    const groups = {};
    if (farmVisits && Array.isArray(farmVisits)) {
        farmVisits.forEach(visit => {
          if (!groups[visit.household_id]) {
            groups[visit.household_id] = [];
          }
          groups[visit.household_id].push(visit);
        });
    }
    return groups;
  }, [farmVisits]);

  const tableData = useMemo(() => {
    const householdsWithBothVisits = Object.values(visitsByHousehold).filter(
      (visits) => visits.length === 2 && visits.some(v => v.submitted_by_role === 'FT') && visits.some(v => v.submitted_by_role === 'AA')
    );

    const singleVisits = Object.values(visitsByHousehold).filter(
        (visits) => visits.length === 1
    ).flat();

    const comparisonRows = householdsWithBothVisits.map(visits => {
        const ftVisit = visits.find(v => v.submitted_by_role === 'FT');
        const aaVisit = visits.find(v => v.submitted_by_role === 'AA');
        return {
            id: ftVisit.household_id,
            farmer_name: ftVisit.farmer_name,
            ft_visit_date: ftVisit.visit_date,
            aa_visit_date: aaVisit.visit_date,
            status: 'Pending Comparison',
            action: 'compare',
            household_id: ftVisit.household_id
        };
    });

    const singleVisitRows = singleVisits.map(visit => ({
        id: visit.id,
        farmer_name: visit.farmer_name,
        ft_visit_date: visit.submitted_by_role === 'FT' ? visit.visit_date : '-',
        aa_visit_date: visit.submitted_by_role === 'AA' ? visit.visit_date : '-',
        status: visit.status,
        action: 'approve/reject',
        original_visit: visit,
    }));

    return [...comparisonRows, ...singleVisitRows];

  }, [visitsByHousehold]);

  return (
    <div className="fv-approve-container">
      <h2>Farm Visit Comparision</h2>
      <div className="custom-table-container">
        {tableData && tableData.length > 0 ? (
          <table className="custom-table">
            <thead>
              <tr>
                <th>Farmer Name</th>
                <th>FT Visit Date</th>
                <th>AA Visit Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.farmer_name}</td>
                  <td>{row.ft_visit_date}</td>
                  <td>{row.aa_visit_date}</td>
                  <td>{row.status}</td>
                  <td>
                    {row.action === 'compare' ? (
                      <button onClick={() => handleCompare(row.household_id)} className="compare-btn">
                        Compare
                      </button>
                    ) : (
                      <div className="action-buttons">
                        <button onClick={() => handleAction({ ...row.original_visit, action: 'approve' })} className="approve">
                          Approve
                        </button>
                        <button onClick={() => handleAction({ ...row.original_visit, action: 'reject' })} className="reject">
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-data-message">
              <h3>No Farm Visits Found</h3>
              <p>The list is currently empty. Please ensure the routing is correct and dummy data is loaded.</p>
          </div>
        )}
      </div>

      {modalOpen && (
        <FVQAModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          visitData={selectedVisit}
        />
      )}
    </div>
  );
};

export default FVApproveWithCompare;