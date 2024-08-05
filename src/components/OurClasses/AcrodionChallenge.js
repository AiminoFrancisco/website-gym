// AccordionChallenge.js
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./AcordionChallenge.css"; // Asegúrate de tener este archivo CSS también

const AccordionChallenge = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="accordionChallenge">
        
        <AccordionItem
     
          date="2024-08-05"
          isOpen={openIndex === 0}
          onClick={() => handleToggle(0)}
        >
        
        </AccordionItem>
        {/* Agrega más AccordionItem como desees */}
      </div>
    </>
  );
};

export default AccordionChallenge;
