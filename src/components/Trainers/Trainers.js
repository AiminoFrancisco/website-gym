/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/profejoni.png";
import TrainerTwoBg from "../Image/profeLuz.png";
import TrainerThreeBg from "../Image/trainerThree.jpg";

const Trainers = () => (
  <section style={{backgroundColor:'#312F36'}} css={styles} className="trainers" id="trainers">
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
        desc='Estudiante de Kinesiología y Fisioterapia'
        img={TrainerTwoBg}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  margin-bottom: -2px;

  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #88C7BE;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
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
