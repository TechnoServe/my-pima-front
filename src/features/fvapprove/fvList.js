import React, { useState } from "react";
import "./fvList.css";
import imageData from "./exampleImage";

const FarmVisitList = () => {
  const [visits] = useState([
    {
      fv_id: "a149J000000BQBEQA4",
      fv_name: "FV-0000047866",
      training_group: "Qiltu",
      training_session: "TS-0000155913",
      tns_id: "N/A",
      farm_visited: "Maammasami",
      household_id: "a059J000000SAylQAG",
      farmer_trainer: "Riyad Siraj",
      has_training: "No",
      date_visited: "2023-02-20",
      status: "Approved",
      qas: [
        {
          practice_name_id: "Compost",
          practice_name: "Compost",
          questions: [
            "Do you have compost manure?",
            "Take a photo of the compost manure",
            "Status of the photo",
          ],
          answers: [
            "No",
            imageData.image, // Use imported base64 image data
            "not_verified",
          ],
        },
        {
          practice_name_id: "RecordBook",
          practice_name: "Record Book",
          questions: [
            "Do you have a record book?",
            "Are there records on the record book?",
            "Take a photo of the record book",
            "Status of the photo",
          ],
          answers: [
            "Yes",
            "No",
            imageData.image, // Use imported base64 image data
            "not_verified",
          ],
        },
        // Add more qas objects as needed
      ],
    },
    {
      fv_id: "a149J000000BQBEQA5",
      fv_name: "FV-0000047866",
      training_group: "Qiltu",
      training_session: "TS-0000155913",
      tns_id: "N/A",
      farm_visited: "Maammasami",
      household_id: "a059J000000SAylQAG",
      farmer_trainer: "Riyad Siraj",
      has_training: "No",
      date_visited: "2023-02-20",
      status: "Approved",
      qas: [
        {
          practice_name_id: "Compost",
          practice_name: "Compost",
          questions: [
            "Do you have compost manure?",
            "Take a photo of the compost manure",
            "Status of the photo",
          ],
          answers: [
            "No",
            imageData.image, // Use imported base64 image data
            "not_verified",
          ],
        },
        {
          practice_name_id: "RecordBook",
          practice_name: "Record Book",
          questions: [
            "Do you have a record book?",
            "Are there records on the record book?",
            "Take a photo of the record book",
            "Status of the photo",
          ],
          answers: [
            "Yes",
            "No",
            imageData.image, // Use imported base64 image data
            "not_verified",
          ],
        },
        // Add more qas objects as needed
      ],
    },
    // Add more visit objects as needed
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [visitsPerPage] = useState(5);
  const [filterStatus, setFilterStatus] = useState("all");
  const [expandedVisit, setExpandedVisit] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const filteredVisits = filterStatus === "all" ? visits : visits.filter((visit) => visit.status === filterStatus);

  const indexOfLastVisit = currentPage * visitsPerPage;
  const indexOfFirstVisit = indexOfLastVisit - visitsPerPage;
  const currentVisits = filteredVisits.slice(indexOfFirstVisit, indexOfLastVisit);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleExpandVisit = (fv_id) => {
    setExpandedVisit(expandedVisit === fv_id ? null : fv_id);
  };

  const openModal = (image, question) => {
    setSelectedImage(image);
    setSelectedQuestion(question);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedQuestion(null);
  };

  return (
    <div className="farm-visit-list">
      <h1>Farm Visits</h1>
      <div className="filters">
        {["all", "Approved", "ToApprove"].map((status) => (
          <button
            key={status}
            className={filterStatus === status ? "active" : ""}
            onClick={() => setFilterStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>
      <ul className="visit-list">
        {currentVisits.map((visit) => (
          <li key={visit.fv_id} className="visit-item" onClick={() => toggleExpandVisit(visit.fv_id)}>
            <div className="visit-header">
              <span className="fv-id">{visit.fv_name}</span>
              <span className={`status ${visit.status.toLowerCase()}`}>
                {visit.status}
              </span>
            </div>
            {expandedVisit === visit.fv_id && (
              <div className="visit-details">
                <p><span className="label">Training Group:</span> {visit.training_group}</p>
                <p><span className="label">Farm Visited:</span> {visit.farm_visited}</p>
                <p><span className="label">Date Visited:</span> {visit.date_visited}</p>
                <div className="qas">
                  {visit.qas.map((qa) => (
                    <div key={qa.practice_name_id} className="qa">
                      <p className="practice-name">{qa.practice_name}</p>
                      <div className="qa-content">
                        {qa.questions.map((question, index) => (
                          <div key={index} className="question-answer">
                            <p className="question">{question}</p>
                            {question.toLowerCase().includes("take a photo") ? (
                              qa.answers[index] ? (
                                <img
                                  src={qa.answers[index]}
                                  alt="Answer"
                                  className="photo"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(qa.answers[index], question);
                                  }}
                                />
                              ) : (
                                <p className="answer">No photo provided</p>
                              )
                            ) : (
                              <p className="answer">{qa.answers[index]}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <Pagination
        visitsPerPage={visitsPerPage}
        totalVisits={filteredVisits.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <p className="modal-question">{selectedQuestion}</p>
            <div className="modal-buttons">
              <button className="modal-button valid">Data Valid</button>
              <button className="modal-button invalid">Data Invalid</button>
              <button className="modal-button unclear">Data Unclear</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Pagination = ({ visitsPerPage, totalVisits, paginate, currentPage }) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalVisits / visitsPerPage) }, (_, i) => i + 1);

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`pagination-item ${number === currentPage ? "active" : ""}`}
          >
            <button
              onClick={() => paginate(number)}
              className="pagination-button"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FarmVisitList;
