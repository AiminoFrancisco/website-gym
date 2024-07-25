/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";
import GymOverlayBg from "../Image/gymOverlayBg.jpg";

const Member = ({ text }) => (
  <section css={styles} className="member">
    <div css={contentStylesTitle}>
      <h2>
        ¡NO LO <span className="highlight">PIENSAS</span>, EMPIEZA <span className="highlight">HOY</span>!
      </h2>
    </div>
    <div css={contentStyles}>
      <p>
        Transforma tu vida con nuestros programas personalizados. No esperes más para mejorar tu bienestar físico y mental. Nuestros entrenamientos están diseñados para adaptarse a tus necesidades y objetivos específicos. Comienza ahora y experimenta resultados excepcionales.
        <br /><br />
        <strong>Beneficios de unirte a nosotros:</strong>
        <br />
        <ul>
          <li><span className="highlight">Entrenamientos personalizados:</span> Ajustados a tu nivel y metas.</li>
          <li><span className="highlight">Planes flexibles:</span> Adaptados a tu horario y estilo de vida.</li>
          <li><span className="highlight">Soporte continuo:</span> Asesoramiento y motivación en cada paso del camino.</li>
        </ul>
        <br />
        No dejes para mañana lo que puedes comenzar hoy. Tu mejor versión está a un solo paso de distancia. ¡Haz el cambio ahora y vive una vida más saludable y activa!
        <br /><br />
      </p>
    </div>
  </section>
);

const styles = css`
  width: 100%;
  padding: 70px 0;
  text-align: center;
  background: url('${GymOverlayBg}') no-repeat center/cover;
`;

const contentStylesTitle = css`
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
  width: 40%; /* Ajusta el ancho de la descripción para que sea menor que el título */
  margin: 0 auto;
  text-align: left;
  color: #fff;
  
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
    
    text-align: justify;
    text-justify: inter-word;
    
    .highlight {
      text-decoration: underline;
      font-weight: 700;
    }
  }

  @media (max-width: 850px) {
    width: 100%;
    text-align: center;
    
    p {
      font-size: 14px;
      padding: 0 20px;
    }
  }
`;

export default Member;
