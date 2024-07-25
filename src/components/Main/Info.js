/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";
import logoHealth from "../Image/logoHealth.png";
import dumbbellOrange from "../Image/dumbbellOrange.png";

const Info = () => (
  <div css={styles} className="info" >
    <img style={{marginTop:'20px'}} src={logoHealth} alt="HealtLogo" />
    <h1>
      MEJORAMOS TU ESTILO DE VIDA <span></span>
    </h1>
    <p style={{ margin: '40px' }}>Entrenamiento Personalizado y planes a distancia</p>
  </div>
);

const styles = css`

  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #fff;
  p {
    font-size: 17px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 1.2px;
  }
  h1 {
    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    margin: 36px 0;
    span {
      color: #88C7BE;
    }
  }
  .btn {
    padding: 14px 16px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 42px;
    }
  }
`;

export default Info;
