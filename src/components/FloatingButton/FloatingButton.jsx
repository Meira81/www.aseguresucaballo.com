import React, { useState } from "react";
import "./FloatingButton.css";
import Modal from "../Modal/Modal";
import sgMail from "@sendgrid/mail";

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

    const apiKey = process.env.REACT_APP_SENDGRID_API_KEY;

    sgMail.setApiKey(apiKey);

    const msg = {
      to: "info@aseguresucaballo.com",
      from: "guadidev@gmail.com",
      subject: "Solicitud información desde web",
      text: `Nombre: ${name}\nTeléfono: ${phone}`,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Correo electrónico enviado");
      })
      .catch((error) => {
        console.error(error);
      });

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
            <form className="formulario" onSubmit={handleSubmit}>
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
                required
              />
              <section className="h4-container">
                <p className="disclaimer">
                  Haciendo click en el botón ENVIAR acepta que los datos
                  facilitados en el formulario sean tratados por
                  ASEGURATUCABALLO.COM para ponerse en contacto con usted con la
                  finalidad de gestionar de manera integral su solicitud.
                </p>
              </section>
              <section className="button-submit-container">
              <button className="button-submit" type="submit">
                Enviar
              </button>
              </section>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FloatingButton;
