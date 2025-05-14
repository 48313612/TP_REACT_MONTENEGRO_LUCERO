import Cita from './Cita';

function Listado({ citas }) {
  return (
    <div>
      {citas.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        citas.map((cita, index) => (
          <Cita key={index} datos={cita} />
        ))
      )}
    </div>
  );
}

export default Listado;