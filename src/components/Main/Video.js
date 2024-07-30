/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import VideoBg from "../Image/bgFoto.jpg";

const Video = () => (
  <div css={styles}>
    <img src={VideoBg} alt="Background" />
  </div>
);

const styles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Ajustes para dispositivos móviles */
  @media (max-width: 768px) {
    height: 100vh; /* Ajusta la altura para dispositivos móviles */
    img {
      object-fit: cover; /* Mantiene la proporción de la imagen */
    }
  }
`;

export default Video;
