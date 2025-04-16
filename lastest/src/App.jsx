import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Cita from './modules/Cita.jsx'
import Form from './modules/Form.jsx'

function App() {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Form />
          </div>
          <div className="one-half column">
          <h2>Administra tus citas</h2>
           <Cita mascota="Nina" duenio='Martin' fecha= '2021-08-05' hora='08:20' sintomas= 'Le duele la pierna'/>
           <Cita mascota="Sifon" duenio='Flecha' fecha= '2023-08-05' hora='09:24' sintomas= 'Duerme mucho'/>
           <Cita mascota="Floki" duenio='Ari' fecha= '2023-08-05' hora='16:15' sintomas= 'No está comiendo'/>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
