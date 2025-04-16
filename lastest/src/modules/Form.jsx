
import React from 'react';
function Form() 
{
    return(
    <> 
            <form>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" onChange=""/>
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" onChange=""/>
                <label>Fecha</label>
                <input type="date" name="fecha" class="u-full-width" onChange=""/>
                <label>hora</label>
                <input type="time" name="hora" class="u-full-width" onChange=""/>
                <label>Sintomas</label>
                <textarea name="sintomas" class="u-full-width"></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
    </>
    );
}

export default Form