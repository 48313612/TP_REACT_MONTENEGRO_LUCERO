import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cita from '../modules/Cita.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cita />
  </StrictMode>,
)
