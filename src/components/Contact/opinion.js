/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackgroundImage1 from "../Image/img1.jpg";
import BackgroundImage2 from "../Image/img2.jpg";
import BackgroundImage3 from "../Image/img3.jpg";
import BackgroundImage4 from "../Image/img4.jpg";
import BackgroundImage5 from "../Image/img5.jpg";
import BackgroundImage6 from "../Image/img6.jpg";
import BackgroundImage7 from "../Image/img7.jpg";
import BackgroundImage8 from "../Image/img8.jpg";

const Opinion = () => {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    speed: 1300, // Velocidad del desplazamiento
    autoplaySpeed: 4000, // Tiempo de espera entre desplazamientos
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px', // Añade un poco de padding lateral en móviles
        }
      }
    ]
  };

  const cards = [
    { img: BackgroundImage1 },
    { img: BackgroundImage2 },
    { img: BackgroundImage3 },
    { img: BackgroundImage4 },
    { img: BackgroundImage5 },
    { img: BackgroundImage6 },
    { img: BackgroundImage7 },
    { img: BackgroundImage8 },
  ];

  return (
    <section className="slider" css={styles}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.img} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

const styles = css`
  .slider {
    position: relative;
    width: 100%;
    overflow: hidden; /* Para evitar el desbordamiento horizontal */
  }

  .slick-slide {
    opacity: 0.5;
    transition: opacity 0.3s ease;
    z-index: 1; /* Asegura que las imágenes laterales estén detrás */
  }

  .slick-center {
    opacity: 1;
    z-index: 2; /* Asegura que la imagen centrada esté sobre las otras */
  }

  .card {
    position: relative;
    width: 100%; /* Ajusta el ancho de las tarjetas */
    height: 100%; /* Ajusta la altura de las tarjetas */
    display: flex; /* Usa Flexbox para centrar la imagen */
    justify-content: center; /* Centra la imagen horizontalmente */
    align-items: center; /* Centra la imagen verticalmente */
    overflow: hidden; /* Asegura que las imágenes no se desborden */
    
    img {
      width: 100%;
      height: 100%; /* Asegura que la imagen cubra todo el contenedor */
      object-fit: cover; /* Asegura que la imagen cubra el contenedor sin distorsionar */
      display: block; /* Asegura que la imagen se muestre como un bloque */
    }

    @media (max-width: 768px) {
      width: 90%; /* Ajusta el ancho de las tarjetas para móviles */
      height: auto; /* Ajusta la altura para móviles */
    }
  }

  .slick-slide {
    padding: 0 5px; /* Espacio entre imágenes */
  }

  .slick-slide img {
    filter: brightness(0.5); /* Aplica un filtro de oscuridad a las imágenes laterales */
  }

  .slick-center img {
    filter: brightness(1); /* La imagen central no tendrá filtro de oscuridad */
  }
`;

export default Opinion;
