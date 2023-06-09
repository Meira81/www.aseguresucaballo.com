import React from "react";
import "./Modal.css";

const Modal = ({ closeModal, children }) => (
  <div className="modal">
    <div className="modal-content-modal">
      <button className="close" onClick={closeModal}>
        &times;
      </button>
      {children}
    </div>
  </div>
);


export default Modal;
