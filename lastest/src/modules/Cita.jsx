import React from 'react';

function Cita({ datos }) {
  const { mascota, propietario, fecha, hora, sintomas } = datos;

  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Propietario: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
    </div>
  );
}

export default Cita;