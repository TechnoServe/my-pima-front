import React, { useState, useMemo } from "react";
import "./fvList.css";
import imageData from "./exampleImage";
import VisitItem from "./VisitItem";
import Pagination from "./Pagination";
import Modal from "./Modal";

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

  const filteredVisits = useMemo(
    () =>
      filterStatus === "all"
        ? visits
        : visits.filter((visit) => visit.status === filterStatus),
    [visits, filterStatus]
  );

  const indexOfLastVisit = currentPage * visitsPerPage;
  const indexOfFirstVisit = indexOfLastVisit - visitsPerPage;
  const currentVisits = filteredVisits.slice(
    indexOfFirstVisit,
    indexOfLastVisit
  );

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
        {["All", "Approved", "ToApprove"].map((status) => (
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
          <VisitItem
            key={visit.fv_id}
            visit={visit}
            expandedVisit={expandedVisit}
            toggleExpandVisit={toggleExpandVisit}
            openModal={openModal}
          />
        ))}
      </ul>
      <Pagination
        visitsPerPage={visitsPerPage}
        totalVisits={filteredVisits.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          selectedQuestion={selectedQuestion}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default FarmVisitList;
