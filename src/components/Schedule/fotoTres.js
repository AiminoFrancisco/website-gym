/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import tercera from "../Image/tercera.jpg";

const ImagenFondoConOverlayTres = () => (
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
  height: 130vh; // Ajusta esto según sea necesario
  overflow: hidden;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 100vh;
    img {
      object-fit: cover;
    }
  }
`;

const overlayStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(35, 45, 57, 0.9);
  z-index: 1;
`;

export default ImagenFondoConOverlayTres;
