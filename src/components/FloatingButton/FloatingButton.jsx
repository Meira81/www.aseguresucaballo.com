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
    console.log("Nombre:", name);
    console.log("Teléfono:", phone);
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
          <h2>Formulario de contacto</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
            <button
              type="submit"
              style={{
                fontSize: "14px",
                padding: "8px 16px",
              }}
            >
              Enviar
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default FloatingButton;
