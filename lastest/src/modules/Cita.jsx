import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Cita({ datos, eliminarCita }) {
  const { mascota, duenio, fecha, hora, sintomas } = datos;

  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{duenio}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
      <button className="button elimnar u-full-width" onClick={() => eliminarCita(datos)}> Eliminar × </button>
    </div>
  );
}

export default Cita;
