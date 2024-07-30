/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Socials from "./Socials";

const TrainerCard = ({ title, name, desc, img }) => (
  <div css={styles} className="card">
    <img src={img} alt="trainer" />
    <h3>{name}</h3>
    <h5>{title}</h5>
 
    <p>{desc}</p>
    
  </div>
);

const styles = css`
  width: 100%;
  max-width: 31%;
  background: #fff;
  padding: 30px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  border-radius: 4px;
  img {
    width: 100%;
  }
  h5 {
    color: #999;
    margin: 6px 0 0px 0;
    font-weight: 500;
    font-size: 14px;
  }
  h3 {
    color: #232d39;
    letter-spacing: 1px;
    margin-top:10px;
  }
  p {
   
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 400;
 
  }
  @media (max-width: 830px) {
    max-width: 540px;
    margin: 14px 0;
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    max-width: 47%;
    margin: 14px 0;
  }
`;

export default TrainerCard;
