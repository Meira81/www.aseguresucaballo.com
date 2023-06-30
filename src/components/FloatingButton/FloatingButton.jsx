import React, { useState } from "react";
import "./FloatingButton.css";
import Modal from "../Modal/Modal";

const FloatingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar las acciones necesarias después de enviar el formulario

    setName("");
    setPhone("");
    closeModal();
  };

  return (
    <div className="floating-button">
      <button className="button-floating" onClick={openModal}>
        <p className="floating-button-top">¿Te</p>
        <p className="floating-button-bottom">llamamos?</p>
      </button>

      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <div className="modal-content">
            <button className="floatingButton-close" onClick={closeModal}>
              &times;
            </button>
            <h2>Formulario de contacto</h2>
            <form
              className="formulario"
              onSubmit={handleSubmit}
              method="POST"
              action="/form.html"
            ></form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FloatingButton;
