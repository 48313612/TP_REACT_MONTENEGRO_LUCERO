import React, { useState } from 'react';

function Formulario({ enviarDatos }) {
  const [cita, setCita] = useState({
    mascota: '',
    duenio: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [errores, setErrores] = useState({
    mascota: false,
    duenio: false,
    fecha: false,
    hora: false,
    sintomas: false,
  });

  const detectoCambios = (e) => {
    const { name, value } = e.target;
    setCita((cita) => ({ ...cita, [name]: value }));
  };

  const tomarDatos = (e) => {
    e.preventDefault();
    const validoMascota = validarTexto(cita.mascota);
    const validoDuenio = validarTexto(cita.duenio);
    const validoFecha = validarFecha(cita.fecha);
    const validoHora = validarHora(cita.hora);
    const validoSintomas = validarTexto(cita.sintomas);

    setErrores({
      mascota: !validoMascota,
      duenio: !validoDuenio,
      fecha: !validoFecha,
      hora: !validoHora,
      sintomas: !validoSintomas,
    });

    if (validoMascota && validoDuenio && validoFecha && validoHora && validoSintomas) {
      enviarDatos(cita);

      setCita({
        mascota: '',
        duenio: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });
    }
  };

  const validarTexto = (text) => text.trim().length > 0;

  const validarFecha = (fecha) => {
    let valido = false;
    const inputFecha = new Date(fecha);
    const fechaActual = new Date();
    if(inputFecha instanceof Date && !isNaN(inputFecha) && inputFecha >= fechaActual)
      {
        valido = true;
      }
      return valido;
  };

  const validarHora = (hora) => {
    let valido = false;
    const timePattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    const [hours, minutes] = hora.split(':').map(Number);
    const inputHora = new Date();
    inputHora.setHours(hours, minutes, 0, 0);

    const tiempoInicio = new Date();
    tiempoInicio.setHours(9, 0, 0, 0);

    const tiempoFin = new Date();
    tiempoFin.setHours(17, 0, 0, 0);
    if (timePattern.test(hora) && inputHora >= tiempoInicio && inputHora <= tiempoFin)
    {
        valido = true;
    }
    return valido;
  };

  return (
    <form onSubmit={tomarDatos}>
      <label>Nombre Mascota</label>
        <input type="text" name="mascota" value={cita.mascota} className="u-full-width" placeholder="Escriba el nombre de su mascota" onChange={detectoCambios} required/>
        {errores.mascota && <p> ERROR. Ingrese un nombre válido </p>}
      <label>Nombre Dueño</label>
        <input type="text" name="duenio" value={cita.duenio} className="u-full-width" placeholder="Escriba su nombre" onChange={detectoCambios} required/>
        {errores.duenio && <p> ERROR. Ingrese un nombre válido </p>}
      <label>Fecha</label>
        <input type="date" name="fecha" value={cita.fecha} className="u-full-width" onChange={detectoCambios} min={new Date().toISOString().split("T")[0]}  max={new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0]} required/>
        {errores.fecha && <p> ERROR. Ingrese una fecha válida </p>}
      <label>Hora</label>
        <input type="time" name="hora" value={cita.hora} className="u-full-width" onChange={detectoCambios} min="09:00" max="17:00" required/> 
        {errores.hora && <p> ERROR. Ingrese una hora válida </p>}
      <label>Síntomas</label>
        <textarea name="sintomas" value={cita.sintomas} className="u-full-width" onChange={detectoCambios} placeholder="Escriba los sintomas de su mascota" required/>
        {errores.sintomas && <p> ERROR. Ingrese síntomas válidos </p>}
      <button type="submit" className="u-full-width button-primary"> Agregar cita </button>
    </form>
  );
}

export default Formulario;