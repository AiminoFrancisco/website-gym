/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Container from "../GlobalComponents/Container";
import Map from "./Map";
import Form from "./Form";
import Carousel from "../Member/carrusel";
import Opinion from "./opinion";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <Container>
      <div className="content">
        <Map className="map" />
        <div className="form-container">
          <Form className="form" />
        </div>
      </div>
    </Container>
    <footer>
      <p>
        Copyright &copy;2024 by Francisco Aimino
      </p>
    </footer>
  </section>
);

const styles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #312F36;

  .container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
  }

  .content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center; /* Centra verticalmente los elementos hijos */
  }

  .map {
    width: 60%;
  }

  .form-container {
    display: flex;
    align-items: center; /* Centra el formulario verticalmente dentro del contenedor */
    width: 40%;
    height: 100%;
  }

  .form {
    width: 100%; /* Asegura que el formulario ocupe todo el ancho del contenedor */
  }

  footer {
    text-align: center;
    padding: 20px 0;
    p {
      font-size: 14px;
      color: #FFF;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      align-items: center;
    }

    .map, .form-container {
      width: 95%;
    }

    footer {
      padding-top: 20px;
    }

    .container {
      padding: 0px;
    }
  }
`;

export default Contact;
