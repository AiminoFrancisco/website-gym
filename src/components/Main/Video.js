/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import VideoBg from "../Image/bgVideo.mp4";

const Video = () => (
  <video css={styles} autoPlay muted loop>
    <source src={VideoBg} type="video/mp4" />
  </video>
);

const styles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  
  /* Ajustes para dispositivos móviles */
  @media (max-width: 768px) {
    height: 100vh; /* Ajusta la altura para dispositivos móviles */
    object-fit: cover; /* Mantiene la proporción del video */
  }
`;

export default Video;
