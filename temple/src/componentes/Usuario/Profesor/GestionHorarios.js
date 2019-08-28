import React, { Component } from 'react';
import TarjetaCurso from '../../Utilidades/TarjetaCurso';
import ContenedorCursos from './ContenedorCursos';
import { Fade, Transform } from 'react-animation-components';
import Horario from './HorarioGestor';

import './GestionHorarios.css';

class GestionHorarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horarioSeleccionado: null,
            revisandoHorario: false
        };
        this.revisarHorario = this.revisarHorario.bind(this);
        this.volverMenu = this.volverMenu.bind(this);
    }

    revisarHorario(id) {
        let horarioSeleccionado = this.props.horarios.filter((e, i) => e.id == id)[0];

        this.setState({
            revisandoHorario: true,
            horarioSeleccionado: horarioSeleccionado
        });
    }

    volverMenu() {
        this.setState({
            revisandoHorario: false,
            horarioSeleccionado: null
        })
    }

    render() {
        return (
            <div className="perfil-debajo-barra contenedor-gestion-horarios-css-grid">
                <h1>Horarios de enseñanza</h1>
                <button className={this.state.revisandoHorario
                    ?
                    "btn-agregar-horario invisible"
                    :
                    "btn-agregar-horario visible"}>Agregar horario</button>

                <div className="tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido">
                    <div className="tarjeta-detalle-responsiva tarjeta-horario">
                    <Horario eventos={this.props.horarios}/>

                    </div>
                </div>
            </div>
        )
    }

}

export default GestionHorarios;