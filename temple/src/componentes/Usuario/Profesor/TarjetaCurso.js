import React, { Component } from 'react';

const TarjetaCurso = (props) => {
    let curso = props.curso;
    return (
        <div className="tarjeta-curso">
            <img src={curso.img} alt="img-curso" />
            <h1>{curso.nombre}</h1>
            <h2>Perteneciente a la categoria xxx</h2>
            <div>
            <p>
                <span className="fa fa-check"></span> Esto es una descripción
            </p>
            <p>
            <span className="fa fa-check"></span> Esto es una descripción
            </p>
            </div>
            
        </div>
    )
}


export default TarjetaCurso;