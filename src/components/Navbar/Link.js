/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Link = ({ name, linkTo }) => {
  return (
    <a href={linkTo} css={linkStyles}>
      {name}
    </a>
  );
};

const linkStyles = css`
  color: #ffffff; /* Color del texto del enlace */
  text-decoration: none; /* Elimina el subrayado */
  margin: 0 15px; /* Espaciado horizontal entre enlaces */
  font-size: 1em; /* Tamaño de la fuente */
  
  &:hover {
    color: #f0f0f0; /* Color al pasar el mouse */
  }

  @media (max-width: 1000px) {
    margin: 0; /* Elimina el margen horizontal en pantallas pequeñas */
  }
`;

export default Link;
