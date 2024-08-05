/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/profejoni.png";
import TrainerTwoBg from "../Image/profeLuz.png";
import ImagenFondoConOverlayCuatro from "./fotocuatro";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <ImagenFondoConOverlayCuatro />
    <div className="content">
      <h2>
        <span>Profes</span>
      </h2>
      <Container>
        <TrainerCard
          name="Profe Joni"
          title="Profesor de Ed. Física"
          img={TrainerOneBg}
        />
        <TrainerCard
          name="Profe Luz"
          title="Profesora de Ed. Física"
          desc="Estudiante de Kinesiología y Fisioterapia"
          img={TrainerTwoBg}
        />
      </Container>
    </div>
  </section>
);

const styles = css`
  position: relative; /* Asegúrate de que el contenedor principal tenga position relative */
  width: 100%;
  padding: 120px 0;
  margin-bottom: -2px;
  text-align: center;
  z-index: 0; /* Asegúrate de que tenga un z-index correcto */

  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;

    span {
      color: #88c7be;
    }
  }

  .content {
    position: relative; /* Esto es para que los elementos dentro de .content se muestren sobre el fondo */
    z-index: 1;
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px 0 0 0;
  }

  @media (max-width: 650px) {
    > p {
      padding: 0 30px;

      br {
        display: none;
      }
    }
  }

  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;
