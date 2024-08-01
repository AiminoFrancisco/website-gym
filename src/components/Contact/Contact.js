/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Container from "../GlobalComponents/Container";
import Map from "./Map";
import Form from "./Form";
import Carousel from "../Member/carrusel";

const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <Container>
      <div className="content">
        <Map className="map" />
        <Form className="form" />
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
    align-items: flex-start;
  }

  .map {
    width: 60%;
  }

  .form {
    width: 40%;
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

    .map, .form {
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
