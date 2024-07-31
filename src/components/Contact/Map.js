/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Opinion from "./opinion";

const Map = () => (
  <div css={styles} className="mapouter">
    <h3 className="map-title">Reseñas y Opiniones</h3>
    <div style={{ marginBottom: '30px', marginTop: '20px'}}>
      <Opinion />
    </div>
    <div style={{height:'50%', paddingBottom:'30px'}}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.455608076221!2d-64.23154292512015!3d-31.373998594202202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299525b9b6855%3A0x9d795ce46699ca3d!2sHEALTH%20%26%20TRAINING%20GYM!5e0!3m2!1ses-419!2sar!4v1721923035469!5m2!1ses-419!2sar"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
   
  </div>
);

const styles = css`
  width: 80%;
  max-width: 60%;
  min-height: 70vh;
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  
  .map-title {
    color: white; /* Color del texto del título */
    font-size: 24px; /* Tamaño de fuente del título */
    text-align: center; /* Centra el texto dentro del contenedor */
    margin-top: 0; /* Elimina el margen superior para alinear con el contenido */
    margin-bottom: 30px; /* Ajusta el margen inferior para el espaciado */
  }

  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
  }

  @media (max-width: 1200px) {
    max-width: 100%;
    height: 70vh;
  }
`;

export default Map;
