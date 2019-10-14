import React from 'react';
import './TarjetaSolicitudGlobal.css';

const TarjetaSolicitudGlobal = (props) => {

return(
    <div className="tarjeta-solicitud-global">
        <img alt="img-solicitud-global" src={props.datos.img}></img>
        <h2>{props.datos.nombres}</h2>
        <div><p>{props.datos.cuerpo}</p></div>
        <button className="btn-tarjeta-lateral agua">Revisar</button>
    </div>
    )

}

export default TarjetaSolicitudGlobal;