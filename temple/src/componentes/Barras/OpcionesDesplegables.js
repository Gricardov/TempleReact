import React from 'react';
import './OpcionesDesplegables.css';
import { Link } from 'react-router-dom';
const Opciones = (props)=>{

    let opciones=[];

    if (props.opciones){
        opciones=props.opciones.map((e,i)=>{
            return <Link to={e.direccion} onClick={e.accion?()=>{e.accion()}:null}><div key={i}>{e.descripcion}</div></Link>
        })
    }

    return(
        <>
        { props.abierto
        ?
        <div className="contenedor-opciones">
            <p>Opciones</p>
            {opciones}
        </div>
        :
        null
        }
        </>
    )
}

export default Opciones;