import React, { useState } from "react";
import "./AcordionItem.css";
import video from '../Image/sivavideo.mp4'
import lesiones from '../Image/videoLesiones.mp4'
import Personalizado from '../Image/videoPesonalizado.mp4'
const AccordionItem = ({ title, date, children, isOpen, onClick }) => {
  return (
    <div>
      <div
        className={`accordion-header ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <div className="title-container">
          <div className="title">{title}</div>
          <div className="date">{date}</div>
        </div>
        <span className={`toggle-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div
        className={`accordion-body ${isOpen ? "open" : ""}`}
        style={{ maxHeight: isOpen ? "1000px" : "0", opacity: isOpen ? 1 : 0 }}
      >
        {children}
      </div>
    </div>
  );
};

const AccordionChallenge = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="accordionChallenge">
        <AccordionItem
          title="Rehabilitación de Lesiones"
          isOpen={openIndex === 0}
          onClick={() => handleToggle(0)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
          >
            <span className="challengeDescription">
            
             

<div className="video-container">
              <video
               alt="Video de prueba"
            width="600"
            controls
            autoPlay // Opcional: para reproducir automáticamente
            muted // Opcional: para reproducir sin sonido
            loop // Opcional: para reproducir en bucle
            src={lesiones}
             // Cambia esto a la ruta del video o URL
          > </video>
          </div>
            </span>
          </div>
        </AccordionItem>
      </div>
      <div className="accordionChallenge">
        <AccordionItem
          title="Entrenamiento Físico Deportivo"
          isOpen={openIndex === 1}
          onClick={() => handleToggle(1)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
          >
           <div className="video-container">
              <video
               alt="Video de prueba"
            width="600"
            controls
            autoPlay // Opcional: para reproducir automáticamente
            muted // Opcional: para reproducir sin sonido
            loop // Opcional: para reproducir en bucle
            src={video}
             // Cambia esto a la ruta del video o URL
          > </video>
          </div>
          </div>
        </AccordionItem>
      </div>
      <div className="accordionChallenge">
        <AccordionItem
          title="Entrenamiento Personalizado"
          isOpen={openIndex === 2}
          onClick={() => handleToggle(2)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
          >
           <div className="video-container">
              <video
               alt="Video de prueba"
            width="600"
            controls
            autoPlay // Opcional: para reproducir automáticamente
            muted // Opcional: para reproducir sin sonido
            loop // Opcional: para reproducir en bucle
            src={Personalizado}
             // Cambia esto a la ruta del video o URL
          > </video>
          </div>
          </div>
        </AccordionItem>
      </div>
    
    </>
  );
};

export default AccordionChallenge;
