import { useState } from 'react';
import './index.css';
import Formulario from './modules/Form.jsx';
import Listado from './modules/Listado.jsx';

function App() {
  const [citas, setCitas] = useState([]);
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi cita</h2>
            <Formulario enviarDatos={(nuevaCita) => setCitas([...citas, nuevaCita])} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Listado citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
