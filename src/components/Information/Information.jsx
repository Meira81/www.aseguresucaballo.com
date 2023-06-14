import React, { useState } from "react";
import "./Information.css";
import image from "../../assets/imagen.png";

const Information = () => {

  return (
    <div className="information">
      <div className="left">
        <article className="information-article-left">
          <p className="information-p-title">SEGURO PARA CABALLOS DE PASEO</p>
          <p className="information-p-subtitle">
            Sal a disfrutar de tu caballo sin preocupaciones
          </p>
        </article>
      </div>

      <figure className="information-figure-image">
        <img className="information-image" src={image} alt="imagen-caballo" />
      </figure>

      <div className="right">
        <section className="container-titulos">
          <h2 className="titulo-coberturas">
            El seguro para caballos que combina la más alta calidad de coberturas con un precio inigualable en el mercado
          </h2>
          <h2 className="coberturas">¿Qué cubre nuestro seguro?</h2>
        </section>
        <div class="container">
          <div class="card">
            <div class="card-icon">
              <i class="fa fa-shield"></i>
            </div>
            <div class="card-content">
              <h3>Responsabilidad Civil</h3>
              <p>Hasta 300.000 € por siniestro para daños a terceros</p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">
              <i class="fa fa-eur"></i>
            </div>
            <div class="card-content">
              <h3>Gastos de retirada</h3>
              <p>
                En caso de fallecimiento reembolsamos los gastos de retirada
                hasta 300 €
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">
              <i class="fa fa-balance-scale"></i>
            </div>
            <div class="card-content">
              <h3>Defensa jurídica</h3>
              <p>
                Hasta 6.000 € por siniestro por si necesitas representación
                legal para cualquier reclamación
              </p>
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
              <h3>Caser Seguros</h3>
              <p>
                Tenemos el respaldo de una compañía líder para poder ofrecerte
                el mejor seguro al mejor precio
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">
              <i class="fa fa-eur"></i>
            </div>
            <div class="card-content">
              <h3>Precio</h3>
              <p>56,03 €/año por caballo</p>
              <p className="nota">
                (sujeto a posibles variaciones por parte de la compañía
                aseguradora)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
