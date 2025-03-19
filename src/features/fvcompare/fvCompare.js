import React, { useState } from 'react';
import './FarmVisitComparison.css';

const dummyData = Array.from({ length: 25 }, (_, i) => ({
  householdName: `Farmer ${i + 1}`,
  tnsId: `TNS-${1000 + i}`,
  householdId: `HH-${2000 + i}`,
  farmVisitDate: `2025-03-${(i % 28) + 1}`,
  advisor: {
    name: `Advisor ${i % 3 === 0 ? 'John' : 'Mike'}`,
    mainStems: 4 + (i % 3),
    hasRecordBook: i % 2 === 0 ? 'Yes' : 'No',
    compostPhoto: i % 2 === 0,
    treeHealth: ['Good', 'Fair', 'Excellent'][i % 3],
  },
  trainer: {
    name: `Trainer ${i % 2 === 0 ? 'Jane' : 'Alice'}`,
    mainStems: 4 + ((i + 1) % 3),
    hasRecordBook: i % 3 === 0 ? 'No' : 'Yes',
    compostPhoto: i % 3 !== 0,
    treeHealth: ['Fair', 'Good', 'Excellent'][i % 3],
  },
}));

const FieldComparison = ({ label, advisorValue, trainerValue }) => {
  const isDifferent = advisorValue !== trainerValue;
  return (
    <div className={`field-row ${isDifferent ? 'highlight' : ''}`}>
      <div className="field-label">{label}</div>
      <div>{advisorValue ?? '-'}</div>
      <div>{trainerValue ?? '-'}</div>
    </div>
  );
};

const HouseholdCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="household-card">
      <div className="household-header" onClick={() => setOpen(!open)}>
        <div className="household-title">
          {data.householdName} <span className="visit-date">({data.farmVisitDate})</span>
          <div className="household-meta">
            <span>TNS ID: {data.tnsId}</span> | <span>Household ID: {data.householdId}</span>
          </div>
        </div>
        <div className={`chevron ${open ? 'rotate' : ''}`}>&#9660;</div>
      </div>
      {open && (
        <div className="comparison-content">
          <div className="field-header">
            <div>Field</div>
            <div>Business Advisor</div>
            <div>Farmer Trainer</div>
          </div>
          <FieldComparison label="Main Stems" advisorValue={data.advisor.mainStems} trainerValue={data.trainer.mainStems} />
          <FieldComparison label="Record Book" advisorValue={data.advisor.hasRecordBook} trainerValue={data.trainer.hasRecordBook} />
          <FieldComparison label="Tree Health" advisorValue={data.advisor.treeHealth} trainerValue={data.trainer.treeHealth} />
          <FieldComparison label="Compost Photo" advisorValue={data.advisor.compostPhoto ? 'Yes' : 'No'} trainerValue={data.trainer.compostPhoto ? 'Yes' : 'No'} />
        </div>
      )}
    </div>
  );
};

export default function FarmVisitComparison() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const currentData = dummyData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="farm-visit-app full-width">
      <div className="back-nav">
        <a href="#" className="indicator-link">Back to Dashboard</a>
      </div>
      <h1 className="dashboard-title">Farm Visit Comparison</h1>

      <div className="visit-list">
        {currentData.map((entry, index) => (
          <HouseholdCard key={index} data={entry} />
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>Previous</button>
        <span className="current-page">Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}
