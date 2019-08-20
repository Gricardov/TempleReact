import React, { Component } from 'react';
import Slider from 'react-slick';
import TarjetaCurso from '../../Utilidades/TarjetaCurso';
import TarjetaDetalleCurso from '../../Utilidades/TarjetaDetalleCurso';
import { Fade, Transform } from 'react-animation-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Alert } from 'reactstrap';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

let moment = require('moment');

class ContenedorCursos extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        // Ahora, pregunto qué clase de información debo mostrar
        let contenido = null;

        if (this.props.revisandoCurso) {
            // Que muestre el detalle del curso
            contenido = renderizarDetalleCurso(this.props.cursoSeleccionado, this.props.volverMenu, this.props.guardarCambios)
        } else {
            // Que muestre todos los cursos
            if (this.props.cursos) {
                contenido = this.props.cursos.map((e, i) => {
                    return <TarjetaCurso key={i} curso={e} revisarCurso={(id) => { this.props.revisarCurso(id) }} />
                })
            }
        }

        return (
            contenido
        )
    }

}

const renderizarDetalleCurso = (curso, volverMenu, guardarCambios) => {
    return (<TarjetaDetalleCurso curso={curso} volverMenu={volverMenu} guardarCambios={guardarCambios} />)
}

export default ContenedorCursos;