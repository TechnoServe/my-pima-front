import React from "react";
import VisitDetails from "./VisitDetails";

const VisitItem = ({ visit, expandedVisit, toggleExpandVisit, openModal }) => (
  <li className="visit-item" onClick={() => toggleExpandVisit(visit.fv_id)}>
    <div className="visit-header">
      <span className="fv-id">{visit.fv_name}</span>
      <span className={`status ${visit.status.toLowerCase()}`}>{visit.status}</span>
    </div>
    {expandedVisit === visit.fv_id && (
      <VisitDetails visit={visit} openModal={openModal} />
    )}
  </li>
);

export default VisitItem;
