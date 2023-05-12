import React, { useState } from "react";
import "./Information.css";
import image from "../../assets/imagen.jpg";

const Information = () => {
  /* const [formData, setFormData] = useState({
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
  }; */

  return (
    <div className="information">
      
        <div className="left">
          <article className="information-article-left">
            <p className="information-p-title">SEGURO PARA CABALLOS DE PASEO</p>
            <p>Sal a disfrutar de tu caballo sin preocupaciones</p>
            {/* <p>Sal a cabalgar con tu caballo sin preocupaciones</p> */}
          </article>
        </div>
  
      <figure className="information-figure-image">
        <img className="information-image" src={image} alt="imagen-caballo" />
      </figure>

      <div className="right">
        <div class="container">
          <div class="card">
            <div class="card-icon">
              <i class="fa fa-shield"></i>
            </div>
            <div class="card-content">
              <h3>Responsabilidad Civil</h3>
              <p>Hasta 300.000 €</p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">
              <i class="fa fa-eur"></i>
            </div>
            <div class="card-content">
              <h3>Reembolso de gastos de retirada</h3>
              <p>En caso de fallecimiento hasta 300 €</p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">
              <i class="fa fa-balance-scale"></i>
            </div>
            <div class="card-content">
              <h3>Defensa jurídica</h3>
              <p>Hasta 6.000 €</p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">
              <i class="fa fa-eur"></i>
            </div>
            <div class="card-content">
              <h3>Sin franquicias</h3>
              <p>
                Ni en la retirada ni en los daños a personas que ocasione el
                caballo, sólo 75 euros en caso de daños materiales
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">
              <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            </div>
            <div class="card-content">
              <h3>Con la garantía de Caser Seguros</h3>
              <p></p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">
              <i class="fa fa-eur"></i>
            </div>
            <div class="card-content">
              <h3>56,09 €</h3>
              <p>Precio fijo anual por caballo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
