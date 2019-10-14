import React from 'react';
import './Publicador.css';

const Publicador = (props) => {

return(
<div className="publicador">
    <img alt="img-perfil" src={props.img}/>
    <input type="text" placeholder="¿Sobre qué tema quieres hablar?"/>
    <textarea placeholder="Comparte un texto, una foto o un archivo..."/>

</div>
    )

}

export default Publicador;