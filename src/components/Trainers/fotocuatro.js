/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import tercera from "../Image/cuarta.jpg";

const ImagenFondoConOverlayCuatro = () => (
  <div css={backgroundStyles}>
    <div css={overlayStyles}></div>
    <img src={tercera} alt="Imagen de Fondo" />
  </div>
);

const backgroundStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Ajusta para cubrir el área del contenedor padre */
  overflow: hidden;
  z-index: -1; /* Asegúrate de que el z-index esté debajo del contenido principal */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen cubra todo el contenedor */
  }
`;

const overlayStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(35, 45, 57, 0.9);
  z-index: 1; /* Asegúrate de que esté sobre la imagen de fondo */
`;

export default ImagenFondoConOverlayCuatro;
