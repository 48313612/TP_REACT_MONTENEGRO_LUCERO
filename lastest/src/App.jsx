import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Cita from './modules/Cita.jsx'
import Form from './modules/Form.jsx'

function App() {
  const [count, setCount] = useState(0)

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
          <Cita/>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
