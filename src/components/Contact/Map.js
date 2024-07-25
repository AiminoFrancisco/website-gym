/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.455608076221!2d-64.23154292512015!3d-31.373998594202202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299525b9b6855%3A0x9d795ce46699ca3d!2sHEALTH%20%26%20TRAINING%20GYM!5e0!3m2!1ses-419!2sar!4v1721923035469!5m2!1ses-419!2sar"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 50%;
  min-height: 60vh;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    height: 60vh;
  }
`;

export default Map;
