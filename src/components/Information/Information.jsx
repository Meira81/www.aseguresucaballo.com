import React, { useState } from "react";
import "./Information.css";
import image from "../../assets/imagen.jpg";

const Information = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Aquí podrías enviar la información del formulario al servidor
  };

  return (
    <>
      <figure className="information-image">
        <img className="information-image" src={image} alt="imagen-caballo" />
      </figure>
      <div className="information-text-form">
        <section className="info">
          <h1>Asegure su caballo de recreo</h1>
          <p>
            Desde aseguresucaballo.com queremos ofrecerle el seguro de
            responsabilidad civil para su caballo.
          </p>
          <p>
            Con una cobertura anual de 300.000€ estará cubierto ante cualquier
            incidencia.
          </p>
          <p>
            Además la póliza incluye 300€ para los gastos de retirada de
            cadáver.
          </p>
          <p>
            Sin franquicia en daños corporales ni en la retirada del caballo en
            caso de fallecimiento; solo en daños materiales se aplica una
            franquicia de 75€.
          </p>
          <p>Se incluyen además 6.000€ para Fianzas y Defensa.</p>
        </section>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Information;
