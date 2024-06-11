import React from "react";
import QASection from "./QASection";

const VisitDetails = ({ visit, openModal }) => (
  <div className="visit-details">
    <p><span className="label">Training Group:</span> {visit.training_group}</p>
    <p><span className="label">Farm Visited:</span> {visit.farm_visited}</p>
    <p><span className="label">Date Visited:</span> {visit.date_visited}</p>
    <div className="qas">
      {visit.qas.map((qa) => (
        <QASection key={qa.practice_name_id} qa={qa} openModal={openModal} />
      ))}
    </div>
  </div>
);

export default VisitDetails;
