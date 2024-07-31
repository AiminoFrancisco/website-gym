/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import ScheduleLinks from "./ScheduleLinks";
import Table from "./Table";
import Container from "../GlobalComponents/Container";
import logoHealth from "../Image/logoHealth.png";
import ImagenFondoConOverlayTres from "./fotoTres";


const Schedule = () => {
  const [day, setDay] = useState("Monday");

  return (
    <section css={styles} className="schedule" id="schedule">
      <ImagenFondoConOverlayTres />
      <div css={contentStyles}>
        <img src={logoHealth} alt="HealtLogo" style={{ height: '100px' }} />
        <h2>
          HORARIOS <span>HEALTH</span>
        </h2>
        <p>
          Ofrecemos una amplia gama de horarios adaptados a tus necesidades para que puedas
          <br />
          gestionar tu salud y bienestar de manera eficiente.
        </p>
        <Container>
          <ScheduleLinks setDay={setDay} day={day} />
          <Table day={day} />
        </Container>
      </div>
    </section>
  );
};

const styles = css`
  position: relative;
  width: 100%;
  padding-top: 120px;
  
  min-height: 98vh;
  text-align: center;
`;

const contentStyles = css`
  position: relative;
  z-index: 2;
  color: #fff;

  h2 {
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #88C7BE;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    p {
      padding: 0 30px;
      br {
        display: none;
      }
    }

    .container {
      max-width: 92%;
    }
  }
`;

export default Schedule;
