import React from 'react';
import './PreguntasGlobales.css';
import Publicador from './Publicador';
import Publicacion from './Publicacion';

const Publicaciones = (props) => {

    let publicaciones = [];

    if (props.publicaciones) {
        publicaciones = props.publicaciones.map((e,i)=>{
            return <Publicacion datos={e}/>
        })
    
    }
    return (
        <div className="tarjeta-contenedora publicaciones">
            <Publicador img={props.usuario.IMG_PER} />
            <hr />
            {publicaciones}
        </div>
    )

}

export default Publicaciones;