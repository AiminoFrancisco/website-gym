/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Logo from "./Logo";
import LinksContainer from "./LinksContainer";
import Container from "../GlobalComponents/Container";

const Nav = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <nav css={styles}>
      <Container className="container">
        <Logo />
     
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 20px 0;
  background: rgba(250, 250, 250, 0.1);
  z-index: 20;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative; /* Asegura que el menú desplegable se posicione correctamente */
  }

  #burgerMenu {
    color: #fff;
    cursor: pointer;
    display: none; /* Oculta el icono en pantallas grandes */
  }

  @media (max-width: 1000px) {
    background: rgba(35, 45, 57, 0.8);
    .container {
      flex-wrap: wrap;
      #burgerMenu {
        display: block; /* Muestra el icono en pantallas pequeñas */
      }
    }
  }
`;

export default Nav;
