/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Container from "../GlobalComponents/Container";
import Map from "./Map";
import Form from "./Form";
import ImagenFondoConOverlayCinco from "./fotocinco";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <ImagenFondoConOverlayCinco />
    <Container>
      <div className="content">
        <Map className="map" />
        <div className="form-container">
          <Form className="form" />
        </div>
      </div>
    </Container>
    <footer>
      <p>Copyright &copy;2024 by Francisco Aimino</p>
    </footer>
  </section>
);

const styles = css`
  position: relative; /* Añadido para posicionar los elementos correctamente */
  width: 100%;

  .content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center; /* Centra verticalmente los elementos hijos */
    padding: 20px 0; /* Ajusta el padding si es necesario */

  }

  .map {
    width: 60%;
  }

  .form-container {
    display: flex;
    align-items: center; /* Centra el formulario verticalmente dentro del contenedor */
    width: 40%;
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
      padding: 0; /* Elimina el padding si es necesario en pantallas pequeñas */
    }

    .map, .form-container {
      width: 95%;
    }

    footer {
      padding-top: 20px;
    }
  }
`;

export default Contact;
