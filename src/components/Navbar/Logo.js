/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import logoHealth from "../Image/logoHealth.png";

const Logo = () => (
  <h2 css={styles}>
    Health <span>Training</span>

  </h2>
);

const styles = css`
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  
  cursor: pointer;
  span {
    color: #88C7BE;
  }
`;


export default Logo;
