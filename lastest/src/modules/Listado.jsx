import React, { useEffect } from 'react';
import Cita from './Cita';

function Listado({ citas, setCitas }) {
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const eliminarCita = (citaAEliminar) => {
    setCitas(citas.filter(cita => cita !== citaAEliminar));
  };

  return (
    <div>
      {citas.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        citas.map((cita, index) => (
          <Cita key={index} datos={cita} eliminarCita={eliminarCita} />
        ))
      )}
    </div>
  );
}

export default Listado;
