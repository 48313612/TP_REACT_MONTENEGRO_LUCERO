
import React, {useState} from 'react';
function Formulario() 
{
    const Formulario = ({enviarDatos}) => {
        const [cita, setCita] = useState({
          mascota: '',
          duenio: '',
          fecha: '',
          hora: '',
          sintomas: '',
        });
    }

    const detectoCambios = (e) => {
        const { name, value } = e.target;
        setCita((cita) => ({ ...cita, [name]: value }));
      };
    
      const tomarDatos = (e) => {
       e.preventDefault();
       let validoMascota = validarText(cita.mascota);
        let validoDuenio = validarText(cita.duenio);
        let validoFecha = validarFecha(cita.fecha);
        let validoHora = validarHora(cita.hora);
        let validoSintomas = validarText(cita.sintomas);

        if(validoMascota && validoDuenio && validoFecha && validoHora && validoSintomas)
        {
            enviarDatos(cita);
        }
        
      };

      const validarText = (text) => {
        let valido = true;
        if(text.trim().length <= 0)
        {
            valido = false;
        }

        return valido;
       };

       const validarFecha = (fecha) => {
        let valido = false;
        const inputFecha = new Date(fecha);
        const fechaActual = new Date();
        const fechaMinima = new Date("1950-01-01");
        if(inputDate instanceof Date && !isNaN(inputDate) && inputDate >= fechaMinima && inputDate <= fechaActual)
          {
            valido = true;
          }
          return valido; 
      };

      const validarHora = (hora) => {
        let valido = false;
        const timePattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
        const [hours, minutes] = hora.split(':').map(Number);
        const horaInicio = 9;
        const minutoInicio = 0;
        const horaFin = 17;
        const minutoFin = 0;
        const inputHora = new Date();
        inputHora.setHours(hours);
        inputHora.setMinutes(minutes);
        inputHora.setSeconds(0); 
        const tiempoInicio = new Date();
        tiempoInicio.setHours(horaInicio, minutoInicio, 0, 0);
        const tiempoFin = new Date();
        tiempoFin.setHours(horaFin, minutoFin, 0, 0);
        if (timePattern.test(hora) || inputHora >= tiempoInicio && inputHora <= tiempoFin) 
        {
            valido = true; 
        }
        return valido;
      };

    return(
    <> 
            <form onSubmit={tomarDatos}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" value="cita.mascota" class="u-full-width" placeholder="Nombre Mascota" onChange={detectoCambios} required/>
                {
                    !validoMascota && <p> ERROR. Ingrese un nombre valido </p>
                }
                <label>Nombre Dueño</label>
                <input type="text" name="duenio" value="cita.duenio" class="u-full-width" placeholder="Nombre dueño de la mascota" onChange={detectoCambios} required/>
                {
                    !validoDuenio && <p> ERROR. Ingrese un nombre valido </p>
                }
                <label>Fecha</label>
                <input type="date" name="fecha" value="cita.fecha" class="u-full-width" onChange={detectoCambios} required/>
                {
                    !validoFecha && <p> ERROR. Ingrese una fecha válida </p>
                }
                <label>hora</label>
                <input type="time" name="hora" value="cita.hora" class="u-full-width" onChange={detectoCambios} required />
                {
                    !validohora && <p> ERROR. Ingrese una hora valida </p>
                }
                <label>Sintomas</label>
                <textarea name="sintomas" value="cita.sintomas" class="u-full-width" onChange={detectoCambios} required></textarea>
                {
                    !validoSintomas && <p> ERROR. Ingrese sintomas validos </p>
                }
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
    </>
    );
}

export default Formulario