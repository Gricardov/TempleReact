import React, { Component } from 'react';
import { Fade, Transform } from 'react-animation-components';
import Horario from './Horario';
import {establecerOpcionesBarra,seleccionarOpcionBarra} from '../../../redux/CreadorAcciones';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';


import './GestionHorarios.css';
const mapDispatchToProps = (dispatch) => ({
    establecerOpcionesBarra: (opciones) => dispatch(establecerOpcionesBarra(opciones)),
    seleccionarOpcionBarra: (opcion) => dispatch(seleccionarOpcionBarra(opcion))

})

const mapStateToProps = (state) => {

    return {
        barra: state.barra
    }

}

class GestionHorarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectores: [
                { id:1, nombre: "Calendario", icono:'fa fa-calendar'},
                { id:2, nombre: "Buscar", icono:'fa fa-search'},
                { id:3, nombre: "Agregar", icono: 'fa fa-plus'}

            ],
            modalDetalleAbierto: false
        };
        this.props.establecerOpcionesBarra(this.state.selectores)
        this.props.seleccionarOpcionBarra(0)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GestionHorarios));