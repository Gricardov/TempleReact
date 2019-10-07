import React, { Component } from 'react';
import TarjetaCurso from '../../Utilidades/TarjetaCurso';
import ContenedorCursos from './ContenedorCursos';
import { Fade, Transform } from 'react-animation-components';
import {establecerOpcionesBarra,seleccionarOpcionBarra} from '../../../redux/CreadorAcciones';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import './GestionCursos.css';

const mapDispatchToProps = (dispatch) => ({
    establecerOpcionesBarra: (opciones) => dispatch(establecerOpcionesBarra(opciones)),
    seleccionarOpcionBarra: (opcion) => dispatch(seleccionarOpcionBarra(opcion))

})

const mapStateToProps = (state) => {

    return {
        barra: state.barra
    }

}

class GestionCursos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectores: [
                { id:0, nombre: "Todos", icono:'fa fa-list-alt'},
                { id:1, nombre: "Buscar", icono: 'fa fa-search'},
                { id:1, nombre: "Agregar", icono: 'fa fa-plus'}
            ],
            cursoSeleccionado: null,
            revisandoCurso: false
        };
        this.revisarCurso = this.revisarCurso.bind(this);
        this.volverMenu = this.volverMenu.bind(this);
        this.props.establecerOpcionesBarra(this.state.selectores)
        this.props.seleccionarOpcionBarra(0)
    }

    revisarCurso(id) {
        let cursoSeleccionado = this.props.cursos.filter((e, i) => e.id == id)[0];

        this.setState({
            revisandoCurso: true,
            cursoSeleccionado: cursoSeleccionado
        });
    }

    volverMenu() {
        this.setState({
            revisandoCurso: false,
            cursoSeleccionado: null
        })
    }

    render() {
        return (
            <div className="perfil-debajo-barra contenedor-gestion-cursos-css-grid panel-fondo">
                <h1 className="titulo-gestion">Cursos que enseño{this.state.revisandoCurso ? `: ${this.state.cursoSeleccionado.nombre}` : null}</h1>
                <div className="botonera">
                    <button className={this.state.revisandoCurso
                        ?
                        "btn-gestion invisible"
                        :
                        "btn-gestion visible"}>Crear</button>
                        <button className="btn-gestion visible" onClick={() => { this.setState({ buscar: true }) }}>
                            <i className="fa fa-search"></i></button>
                </div>
                <div className={this.state.revisandoCurso
                    ?
                    "tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido tarjeta-contenedora-contenido-entera"
                    :
                    "tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido tarjeta-contenedora-contenido-cuadricula"}>
                    <ContenedorCursos
                        cursos={this.props.cursos}
                        revisarCurso={(id) => {
                            this.revisarCurso(id);
                        }}
                        cursoSeleccionado={this.state.cursoSeleccionado}
                        revisandoCurso={this.state.revisandoCurso}
                        volverMenu={this.volverMenu}
                    />
                </div>
            </div>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GestionCursos));