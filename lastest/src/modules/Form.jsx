
import React from 'react';
function Form() 
{
    const Formulario = (enviarDatos) => {
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
       let validoMascota = validarText(setCita.mascota);
        let validoDuenio = validarText(setCita.duenio);
        let validoFecha = validarFecha(setCita.fecha);
        let validoSintomas = validarText(setCita.sintomas);
      };

      const validarText = (text) => {
        let valido = true;
        if(text != null)
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
        if(inputDate instanceof Date && !isNaN(inputDate) && inputDate >= minDate && inputDate <= currentDate)
          {
            valido = true;
          }
          return valido; 
      };

      const validarHora = (hora) => {
        let valido = true;
        const timePattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
        if (!timePattern.test(hora)) {
          valido = false;
        }
    
        const [hours, minutes] = hora.split(':').map(Number);
    
        const fechaActual = new Date();
        const currentHours = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();
    
        const inputHora = new Date();
        inputTime.setHours(hours);
        inputTime.setMinutes(minutes);
        inputTime.setSeconds(0);
    
        const isAfterMidnight = inputTime >= new Date().setHours(0, 0, 0, 0);
        const isBeforeCurrentTime = inputTime <= currentTime;
    
        return isAfterMidnight && isBeforeCurrentTime;
      };

    return(
    <> 
            <form onSubmit={tomarDatos}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" value="cita.mascota" class="u-full-width" placeholder="Nombre Mascota" onChange={detectoCambios} required/>
                <label>Nombre Dueño</label>
                <input type="text" name="duenio" value="cita.duenio" class="u-full-width" placeholder="Nombre dueño de la mascota" onChange={detectoCambios} required/>
                <label>Fecha</label>
                <input type="date" name="fecha" value="cita.fecha" class="u-full-width" onChange={detectoCambios} required/>
                <label>hora</label>
                <input type="time" name="hora" value="cita.hora" class="u-full-width" onChange={detectoCambios} required />
                <label>Sintomas</label>
                <textarea name="sintomas" value="cita.sintomas" class="u-full-width" onChange={detectoCambios} required></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
    </>
    );
}

export default Form