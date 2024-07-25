/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Container from "../GlobalComponents/Container";
import Map from "./Map";
import Form from "./Form";

const Contact = () => (
  <section style={{backgroundColor:'#272F39'}} css={styles} className="contact" id="contact">
    <Container>
      <Map />
      <Form />
    </Container>
    <footer>
      <p>
        Copyright &copy;2024 by Francisco Aimino
       
      </p>
    </footer>
  </section>
);

const styles = css`

  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
  }
  footer {
    text-align: center;
    padding: 36px 0;
    p {
      font-size: 14px;
      color: #FFF;
      a {
        text-decoration: none;
        color: #88C7BE;
        font-weight: 500;
        &:hover {
          color: #88C7BE;
        }
      }
    }
  }
  @media(max-width: 1200px) {
    .container{
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`;

export default Contact;
