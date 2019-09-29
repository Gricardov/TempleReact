import React, { Component } from 'react';
import './TarjetaInscrito.css';

const TarjetaInscrito = (props) => {

    return (
        <div className="tarjeta-inscrito seleccionable">
            <img src={props.inscrito.img} alt="img-inscrito" />
            <h1>{props.inscrito.nombres}</h1>
            <div className="estado-inscrito">
                <i className={props.inscrito.idEstado == 1 ? "fa fa-check" : props.inscrito.idEstado == 2 ? "fa fa-clock-o" : "fa fa-times"}
                    style={props.inscrito.idEstado == 1 ? { color: "green" } : props.inscrito.idEstado == 2 ? { color: "#bcc90d" } : { color: "red" }}></i> {props.inscrito.estado}
            </div>
            <div className="asistencia-inscrito">
                <input type="checkbox" checked={props.inscrito.idEstado == 1}></input> Marcar asistencia
                </div>
            <p className="codigo-rda-inscrito"></p>
        </div>

    )
}


export default TarjetaInscrito;