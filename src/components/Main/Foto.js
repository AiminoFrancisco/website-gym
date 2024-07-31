/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import ImagenSegunda from "../Image/segunda.jpg";

const ImagenFondoConOverlay = () => (
  <div css={backgroundStyles}>
    <div css={overlayStyles}></div>
    <img src={ImagenSegunda} alt="Imagen de Fondo" />
  </div>
);

const backgroundStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

export default ImagenFondoConOverlay;
