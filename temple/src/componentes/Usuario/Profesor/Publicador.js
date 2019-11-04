import React from 'react';
import './Publicador.css';

const Publicador = (props) => {

return(
<div className="publicador">
    <div className="encabezado">
    <img alt="img-perfil" src={props.img}/>
    <input type="text" placeholder="¿Sobre qué tema quieres hablar?"/>
    <hr />
    </div>
    <textarea placeholder="Comparte un texto, una foto o un archivo..."/>
    <div className="controles-publicador">
        
    </div>
</div>
    )

}

export default Publicador;