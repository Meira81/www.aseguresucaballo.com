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
      
      {/* <div className="information-text-form"> */}
        
        <figure className="information-figure-image">
        <img className="information-image" src={image} alt="imagen-caballo" />
      </figure>
       {/*  <form onSubmit={handleSubmit}>
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
        </form> */}
      {/* </div> */}
    </>
  );
};

export default Information;
