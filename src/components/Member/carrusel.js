/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackgroundImage1 from "../Image/pesas.jpg"; 
import BackgroundImage2 from "../Image/pesas.jpg";
import BackgroundImage3 from "../Image/pesas.jpg";
import BackgroundImage4 from "../Image/pesas.jpg"; 
import BackgroundImage5 from "../Image/pesas.jpg"; 



const Carousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 12000,
    focusOnSelect: true,
  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
         
        }
      }
    ]
  };

  const cards = [
    { title: "Evaluación Personalizada: 📈", description: "En el transcurso de la primer semana, realizamos una evaluación completa de tu condición física actual. Esto incluye pruebas de postura, fuerza, coordinación, flexibilidad y análisis de tus objetivos personales. A partir de esta evaluación, diseñamos un plan de entrenamiento ESPECIFICO para vos. ", img: BackgroundImage1 },
    { title: "Entrenamientos a Medida: 🫡", description: "Nuestros entrenamientos son totalmente personalizados. Esto significa que cada plan y sesión de entrenamiento esta adaptada tus objetivos y metas.", img: BackgroundImage2 },
    { title: "Planes de Entrenamiento Flexibles: 🤸🏼", description: "Sabemos que tu tiempo es valioso. Por eso, ofrecemos flexibilidad horaria ajustada a tu rutina diaria. Sin necesidad de sacar previamente turnos.", img: BackgroundImage3 },
    { title: "Asesoramiento y Motivación Continua:💪🏽", description: "Nuestro trabajo es brindarte herramientas y enseñarte técnicas de entrenamiento, corrección postural y estrategias para mantenerte motivado y enfocado en tus objetivos.", img: BackgroundImage4 },
    { title: "Seguimiento y Ajustes Constantes: 👏🏼", description: "Realizamos seguimientos regulares para evaluar tu progreso y hacer ajustes en tu plan de entrenamiento según sea necesario para que cada sesión sea lo más efectiva posible.", img: BackgroundImage5 },
  ];

  return (
    <section className="slider" css={styles}>
      <Slider {...settings} >
        {cards.map((card, index) => (
          <div key={index} className="card" style={{ backgroundImage: `url(${card.img})` }}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const styles = css`
  .slider {
    border: 1px solid #fff;
    border-radius: 19px;

    width: 100%; /* Para asegurar que ocupe todo el ancho disponible */
  }

  .slick-slide {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
  .slick-center {
    opacity: 1;
    transform: scale(1.1);
  }
  .card {
  
    border-radius: 10px;
 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 80%;  /* Ajusta el ancho de las tarjetas */
    height: 300px; /* Ajusta la altura de las tarjetas */
    margin: 0 auto; /* Centra las tarjetas */
    
    h3 {
      margin: 0 0 10px 0;
      font-size: 20px;
      color: #fff;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    }
    p {
      font-size: 16px;
      color: #fff;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 768px) {
      width: 100%;  /* Ajusta el ancho de las tarjetas para móviles */
      height: 200px; /* Ajusta la altura de las tarjetas para móviles */
      h3 {
        font-size: 18px; /* Ajusta el tamaño de la fuente para móviles */
      }
      p {
        font-size: 14px; /* Ajusta el tamaño de la fuente para móviles */
      }
    }
  }

  @media (max-width: 768px) {
    width: 80%; /* Ajusta el ancho del slider para móviles */
    margin: 0 auto; /* Centra el slider en móviles */
  }
`;

export default Carousel;
