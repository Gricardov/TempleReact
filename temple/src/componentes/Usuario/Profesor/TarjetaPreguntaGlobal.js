import React from 'react';
import './TarjetaPreguntaGlobal.css';

const TarjetaPreguntaGlobal = (props) => {

return(
    <div className="tarjeta-pregunta-global">
        <h2>{props.datos.curso}</h2>
        {
            // Si es que hay imagen, que la considere dentro del grid
            props.datos.img
            ?
            <img alt="img-pregunta-global" src={props.datos.img}></img>       
            :
            null
        }
        {
            // Si es que hay imagen, que la considere dentro del grid
            props.datos.descripcion
            ?
            <div><p>{props.datos.descripcion}</p></div>
            :
            null
        }
        <button className="btn-tarjeta-lateral naranja">Revisar</button>
    </div>
    )

}

export default TarjetaPreguntaGlobal;