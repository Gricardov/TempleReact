import React, { Component } from 'react';
import { Fade, Transform } from 'react-animation-components';
import Horario from './Horario';

import './GestionHorarios.css';

class GestionHorarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalDetalleAbierto: false
        };
    }

    render() {
        return (
            <div className="perfil-debajo-barra contenedor-gestion-horarios-css-grid panel-fondo">
                <h1 className="titulo-gestion">Horarios de enseñanza</h1>
                <div className="botonera">
                    <button className="btn-gestion visible" onClick={() => { this.setState({ modalDetalleAbierto: true }) }}>
                        Agregar</button>
                    <button className="btn-gestion visible" onClick={() => { this.setState({ buscar: true }) }}>
                        <i className="fa fa-search"></i></button>
                </div>
                <div className="tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido">
                    <div className="tarjeta-detalle-responsiva tarjeta-contenido">
                        <Horario eventos={this.props.horarios} modalDetalleAbierto={this.state.modalDetalleAbierto}
                            cambiarEstadoModalDetalle={(estado) => { this.setState({ modalDetalleAbierto: estado }) }} />
                    </div>
                </div>
            </div>
        )
    }

}

export default GestionHorarios;