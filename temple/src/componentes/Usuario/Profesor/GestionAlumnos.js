import React, { Component } from 'react';
import { Fade, Transform } from 'react-animation-components';
import SelectorPastillas from '../../Utilidades/SelectorPastillas';

import './GestionAlumnos.css';

class GestionAlumnos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalDetalleAbierto:false,
            pestanas:[{ nombre: 'Todos' }, { nombre: 'Clases presenciales' }, { nombre: 'Solución de ejercicios' }]
            
        };
    }
    
    render() {
        return (
            <div className="perfil-debajo-barra contenedor-gestion-horarios-css-grid">
                <SelectorPastillas pestanas={this.state.pestanas} seleccionar={(i)=>{this.props.seleccionar(i)}}
                indiceSeleccion={this.props.seleccionSecundaria} oculto={this.props.revisandoEjercicio}/>
                <div className="tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido">
                    <div className="tarjeta-detalle-responsiva tarjeta-horario">
                    
                    </div>
                </div>
            </div>
        )
    }

}

export default GestionAlumnos;