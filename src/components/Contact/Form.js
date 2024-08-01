/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";
import ContactBg from "../Image/contactBg.jpg";
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Opinion from "./opinion";


const Form = ({ text }) => (
  <div className="linksContainer">
     <h1 style={{color:'#fff', margin:'9px', marginTop:'190px'}} >Contactanos a travez de nuestros enlaces directos!</h1>
  <div className="social-icons-wrapper">
  
   
    <div className="social-icon-item whatsapp-link">
      <a
        href="https://wa.me/5493515600446"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <div className="socialicon">
          <div className="socialiconcircle1 whatsappcolor"></div>
          <div className="socialiconcircle2">
            <FontAwesomeIcon
              className="icons"
              color="#40BF50"
              icon={faWhatsapp}
            />
          </div>
        </div>
        <div className="contactLinksWhatsapp">WhatsApp</div>
      </a>
    </div>
    <div className="social-icon-item  github-link">
      <a
        href="https://www.instagram.com/healthtraining_ok/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-item"
      >
        <div className="socialicon  ">
          <div className="socialiconcircle1 githubcolor"></div>
          <div className="socialiconcircle2">
            <div>
            <FontAwesomeIcon
              className="icons"
             color="#C13584"
              icon={faInstagram}
            />
            </div>
           
          </div>
        </div>
        <div className="contactLinksGitHub">
          <a
            href="https://www.instagram.com/healthtraining_ok/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </a>
    </div>
    
  </div>

</div>
);

export default Form;
