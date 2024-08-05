/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import LinksContainer from "./LinksContainer";
import Results from "./Results";
import Container from "../GlobalComponents/Container";
import AccordionChallenge from "./AcrodionChallenge";
import ImagenFondoConOverlayCuatro from "../Trainers/fotocuatro";


const Classes = ({ text }) => {


  return (
    <section css={styles} className="ourClasses" id="ourClasses">
      <ImagenFondoConOverlayCuatro></ImagenFondoConOverlayCuatro>
      <h2 style={{marginBottom:'70px'}}>
      Estos son algunos de  <span>NUESTROS ENTRENAMIENTOS</span>
      </h2>
    

<AccordionChallenge></AccordionChallenge>

      {/* <Container>
        <LinksContainer setTraining={setTraining} training={training} />
        <Results training={training} />
      </Container> */}
    </section>
  );
};

const styles = css`
  position: relative; /* Asegúrate de que el contenedor principal tenga position relative */
  width: 100%;
  padding: 120px 0;
  margin-bottom: -2px;
  text-align: center;
  z-index: 0; /* Asegúrate de que tenga un z-index correcto */

  h2 {
    color: #FFF;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;

    span {
      color: #88c7be;
    }
    
  }
  P {
          color: #FFF;
          margin: 20px
      }
  .content {
    position: relative; /* Esto es para que los elementos dentro de .content se muestren sobre el fondo */
    z-index: 1;
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

export default Classes;
