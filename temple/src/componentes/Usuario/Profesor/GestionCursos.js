import React, { Component } from 'react';
import TarjetaCurso from '../../Utilidades/TarjetaCurso';
import ContenedorCursos from './ContenedorCursos';
import { Fade, Transform } from 'react-animation-components';

import './GestionCursos.css';

class GestionCursos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cursoSeleccionado: null,
            revisandoCurso: false
        };
        this.revisarCurso = this.revisarCurso.bind(this);
        this.volverMenu = this.volverMenu.bind(this);
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
                <button className={this.state.revisandoCurso
                    ?
                    "btn-gestion invisible"
                    :
                    "btn-gestion visible"}>Agregar curso</button>

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

export default GestionCursos;