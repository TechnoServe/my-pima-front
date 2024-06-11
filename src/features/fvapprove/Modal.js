import React from "react";

const Modal = ({ selectedImage, selectedQuestion, closeModal }) => (
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
);

export default Modal;
