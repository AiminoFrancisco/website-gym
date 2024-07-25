/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const ScheduleTable = () => {
  return (
    <table css={styles}>
      <thead>
        <tr>
          <th>Día</th>
          <th className="centered-header">Horario</th> {/* Clase añadida aquí */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lunes</td>
          <td>
            <div className="hours">
              <span className="open-hours">07:30 - 13:30</span> 
              <span className="break">|</span> 
              <span className="open-hours">15:30 - 21:00</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Martes</td>
          <td>
            <div className="hours">
              <span className="open-hours">07:30 - 13:30</span> 
              <span className="break">|</span> 
              <span className="open-hours">15:30 - 21:00</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Miércoles</td>
          <td>
            <div className="hours">
              <span className="open-hours">07:30 - 13:30</span> 
              <span className="break">|</span> 
              <span className="open-hours">15:30 - 21:00</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Jueves</td>
          <td>
            <div className="hours">
              <span className="open-hours">07:30 - 13:30</span> 
              <span className="break">|</span> 
              <span className="open-hours">15:30 - 21:00</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Viernes</td>
          <td>
            <div className="hours">
              <span className="open-hours">07:30 - 13:30</span> 
              <span className="break">|</span> 
              <span className="open-hours">15:30 - 21:00</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Sábado</td>
          <td>
            <div className="hours">
              <span className="open-hours">09:00 - 13:00</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>Domingo</td>
          <td>
            <div className="hours">
              <span className="closed">Cerrado</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const styles = css`
  border-collapse: separate; /* Cambia a 'separate' para aplicar border-radius */
  border-spacing: 0; /* Elimina el espacio entre celdas */
  color: #fff;
  margin: 30px auto;
  width: 60%; /* Ajusta el ancho de la tabla */
  max-width: 1200px; /* Opcional: establece un ancho máximo */
  border-radius: 15px; /* Esquinas redondeadas */
  overflow: hidden; /* Asegura que las esquinas redondeadas se apliquen correctamente */
  background-color: #333; /* Color de fondo de la tabla */

  th, td {
    border: 1px solid #fff;
    padding: 15px;
    text-align: left;
  }

  th {
    background-color: #444;
    font-weight: bold;
  }

  .centered-header { /* Clase para centrar el texto en el encabezado */
    text-align: center;
  }

  tr:nth-of-type(even) {
    background-color: #555;
  }

  tr:nth-of-type(odd) {
    background-color: #666;
  }

  .hours {
    display: flex;
    justify-content: center; /* Centra los horarios en el contenedor */
    align-items: center;
  }

  .open-hours {
    font-weight: bold;
  }

  .break {
    margin: 0 10px; /* Espaciado entre los horarios */
  }

  .closed {
    font-style: italic;
    color: #fff; /* Color para indicar que está cerrado */
  }

  @media (max-width: 640px) {
    font-size: 12px;
    width: 100%; /* Asegura que la tabla ocupe el 100% del contenedor en pantallas pequeñas */
    th, td {
      padding: 10px;
    }
  }
`;

export default ScheduleTable;
