import React, { Component } from 'react';

const Opciones = (props) => {

    const opciones=props.opciones.map((e,i)=>{
        return(
            <option key={i} value={e.id} defaultValue={e.id==props.seleccionado}>{e.texto}</option>
        )
    })

        return (
           opciones
        );
    
}

export default Opciones;