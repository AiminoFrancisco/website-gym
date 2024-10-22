/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

import Carousel from "./carrusel";
import ImagenFondoConOverlay from "../Main/Foto";


const Member = () => (
  <section css={styles} className="member">
    <ImagenFondoConOverlay /> 
    <div css={contentStylesTitle}>
      <h2 style={{marginRight:'20px', marginLeft:'20px'}}>
        ¡NO LO <span className="highlight">PIENSES MÁS</span>, EMPEZA <span className="highlight">HOY</span>!
      </h2>
    </div>
    <div css={contentStyles}>
      <p>
        Transforma tu vida con nuestros planes personalizados. No esperes más para mejorar tu bienestar físico y mental. Nuestros entrenamientos están diseñados para adaptarse a tus necesidades y objetivos específicos. Comenzá ahora y experimenta resultados excepcionales.
        <br /><br />
        <strong>Beneficios de unirte a nosotros:</strong>
        <br />
        No dejes para mañana lo que puedes comenzar hoy. Tu mejor versión está a un solo paso de distancia. ¡Haz el cambio ahora y vive una vida más saludable y activa!
        <br /><br />
      </p>

    </div>
    <Carousel />
  </section>
);

const styles = css`
  position: relative;
  width: 100%;
  padding: 50px 0;
  text-align: center;
  overflow-x: hidden;
    min-height: 100vh; 
`;

const contentStylesTitle = css`
  position: relative;
  z-index: 2;
  width: 80%; /* Aumenta el ancho del título */
  margin: 0 auto;
  text-align: center; /* Centra el título */
  color: #fff;

  h2 {
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    margin-bottom: 30px;

    .highlight {
      color: #88C7BE;
      text-decoration: none;
    }
  }

  @media (max-width: 850px) {
    width: 100%;
    h2 {
      font-size: 30px;
    }
  }
`;

const contentStyles = css`
  position: relative;
  z-index: 2;
  width: 40%; /* Ajusta el ancho de la descripción para que sea menor que el título */
  margin: 0 auto;
  text-align: left;
  color: #fff;
 text-align: left;
  p {
    font-size: 16px;
    line-height: 1.7;
    margin: 10px 0;

    strong {
      font-weight: 700;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 10px 0;

      li {
        margin: 5px 0;
      }
    }


    .highlight {
      text-decoration: underline;
      font-weight: 700;
    }
  }

  @media (max-width: 850px) {
    width: 100%;
    text-align: center;
     text-align: left;

    p {
      font-size: 14px;
      padding: 0 20px;
    }
  }
`;

export default Member;
