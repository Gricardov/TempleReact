import React from 'react';
import './TarjetaDestacadoGlobal.css';

const TarjetaDestacadoGlobal = (props) => {

return(
    <div className="tarjeta-destacado-global">
        <div className="encabezado">
        <h2>{props.datos.titulo}</h2>
        <p>Escrito por: {props.datos.autor}</p>
        </div>
        <div className="cuerpo"><p>{props.datos.cuerpo}</p></div>
    </div>
    )

}

export default TarjetaDestacadoGlobal;