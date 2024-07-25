/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import logoHealth from "../Image/logoHealth.png";

const Logo = () => (
  <div css={containerStyles}>
    <h2 css={styles}>
      Health <span>Training</span>
    </h2>
  </div>
);

const containerStyles = css`
  text-align: center; /* Centra horizontalmente el texto */
  width: 100%; /* Asegura que el contenedor tenga el ancho completo */
`;

const styles = css`
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  
  cursor: pointer;
  span {
    color: #88C7BE;
  }
`;

export default Logo;
