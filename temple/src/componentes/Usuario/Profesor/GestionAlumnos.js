import React, { Component } from 'react';
import { Fade, Transform } from 'react-animation-components';
import SelectorPastillas from '../../Utilidades/SelectorPastillas';
import TarjetaAlumno from '../../Utilidades/TarjetaAlumno'
import ModalInfoDetalle from '../../Utilidades/ModalInfoDetalle';
import ModalListaClases from '../../Utilidades/ModalListaClases';
import {establecerOpcionesBarra,seleccionarOpcionBarra} from '../../../redux/CreadorAcciones';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import './GestionAlumnos.css';

const mapDispatchToProps = (dispatch) => ({
    establecerOpcionesBarra: (opciones) => dispatch(establecerOpcionesBarra(opciones)),
    seleccionarOpcionBarra: (opcion) => dispatch(seleccionarOpcionBarra(opcion))

})

const mapStateToProps = (state) => {

    return {
        barra: state.barra
    }

}

class GestionAlumnos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectores: [
                { id:0, nombre: "Últimos", icono:'fa fa-list'},
                { id:1, nombre: "Buscar", icono: 'fa fa-search'},
                { id:2, nombre: "Estadísticas", icono:'fa fa-line-chart'}
            ],
            modalDetalleAbierto: false,
            pestanas: [{ nombre: 'Todos' }, { nombre: 'Clases presenciales' }, { nombre: 'Solución de ejercicios' }],
            indiceSeleccion: 0
        };
        this.props.establecerOpcionesBarra(this.state.selectores)
        this.props.seleccionarOpcionBarra(0)
    }

    render() {

        let alumnos = [];

        if (this.props.alumnos) {
            alumnos = this.props.alumnos.map((e, i) => {
                return <TarjetaAlumno key={i} alumno={e}
                    abrirModalDetalle={(id) => { this.setState({ modalDetalleAbierto: true, idContratoSeleccionado: id }) }}
                    abrirModalGestion={(id) => { this.setState({ modalGestionAbierto: true, idContratoSeleccionado: id }) }}
                    abrirModalOpciones={(id) => { this.setState({ modalOpcionesAbierto: true, idContratoSeleccionado: id }) }}
                />
            })
        }

        return (
            <>
                <div className="perfil-debajo-barra contenedor-gestion-alumnos-css-grid panel-fondo">
                    <h1 className="titulo-gestion">Gestión de alumnos: Últimos</h1>
                    <div className="botonera">
                        <button className="btn-gestion visible">Estadísticas</button>
                        <button className="btn-gestion visible" onClick={() => { this.setState({ buscar: true }) }}>
                            <i className="fa fa-search"></i></button>
                    </div>
                    <div className="tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido">
                        {alumnos}
                    </div>
                </div>
                <ModalInfoDetalle abierto={this.state.modalDetalleAbierto}
                    detalles={{
                        mostrarEstadisticas: false, infoEstadisticas: {},
                        detalles: [
                            { nombre: "Código de clase", valor: "UN4M4n4n4L1Nd4" },
                            { nombre: "Desde", valor: "Hoy a las 16:00" },
                            { nombre: "Hasta", valor: "Hoy a las 20:00" },
                            { nombre: "Lugar", valor: "Mi lugar (Ver en mapa)" },
                            { nombre: "Tipo de clase", valor: "Magistral" },
                            { nombre: "Régimen", valor: "No aplica" },
                            { nombre: "Estado", valor: "Confirmado por el profesor" },
                            { nombre: "Número de inscritos", valor: "2" },
                            { nombre: "Número de asistente", valor: "2" },
                            { nombre: "Número de cupones creados", valor: "16" },
                            { nombre: "Número de cupones usados", valor: "0" },
                            { nombre: "Total a pagar", valor: "150.00" },
                            { nombre: "Total pagado", valor: "0.00" }

                        ]
                    }}
                    cerrar={() => { this.setState({ modalDetalleAbierto: false, idAlumnoSeleccionado: null }) }} />
                <ModalListaClases abierto={this.state.modalGestionAbierto}
                    contratos={[
                        {
                            id: 1, nombre: 'Geometría', img: 'https://definicion.mx/wp-content/uploads/educacion/Geometria.jpg',
                            desde: 'Mañana a las 2pm', hasta: 'Mañana a las 4pm', lugar: 'Mi lugar'
                        },
                        {
                            id: 2, nombre: 'Álgebra', img: 'https://www.cienciamatematica.com/wp-content/uploads/algebra.jpg',
                            desde: 'Hoy a la 1pm', hasta: 'Hoy a las 3pm', lugar: 'Jr. Las bellas 123 - piso 4 - surco'
                        }
                    ]}
                    cerrar={() => { this.setState({ modalGestionAbierto: false, idAlumnoSeleccionado: null }) }}
                />
            </>
        )
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GestionAlumnos));