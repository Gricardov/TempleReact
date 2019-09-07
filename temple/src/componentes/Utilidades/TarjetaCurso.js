import React, { Component } from 'react';
import './TarjetaCurso.css';

const TarjetaCurso = (props) => {
    let curso = props.curso;
    return (
        <div className="tarjeta-curso" onClick={() => { props.revisarCurso(curso.id) }}>

            <img src={curso.img} alt="img-curso" />
            <h1>{curso.nombre}</h1>
            <h2>Perteneciente a la categoria {curso.categoria}</h2>
            <div>
                <p>
                    <span className="fa fa-check"></span> {curso.horExp} horas de experiencia
            </p>
                <p>
                    <span className="fa fa-check"></span> {curso.solEje} solicitudes de ejercicios
            </p>
            </div>
        </div>

    )
}


export default TarjetaCurso;