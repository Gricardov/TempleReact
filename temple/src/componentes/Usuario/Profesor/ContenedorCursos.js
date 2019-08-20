import React, { Component } from 'react';
import Slider from 'react-slick';
import TarjetaCurso from './TarjetaCurso';
import TarjetaDetalleEjercicio from '../../Utilidades/TarjetaDetalleEjercicio';
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

        let cursos = [];
        if (this.props.cursos) {
            cursos = this.props.cursos.map((e, i) => {
                return <TarjetaCurso curso={e} />
            })
        }

        // Ahora, pregunto qué clase de información debo mostrar
        let contenido = null;

        switch (this.props.seleccionPrincipal) {

            case -2:
                // Detalle ejercicio
                //contenido = renderizarDetalleEjercicio(this.props.ejercicioSeleccionado,
                //this.props.volverMenu, this.props.enviarRespuesta);
                break;
            case 0:
                // Citas
                //contenido = renderizarCitas(this.props.seleccionSecundaria, this.props.citas);
                break;
            case 1:
                // Solución de ejercicios
                //contenido = renderizarEjercicios(this.props.seleccionSecundaria, this.props.ejercicios,
                //this.props.revisarEjercicio);
                break;
            case 2:
                // Mensajes
                //contenido=renderizarMensajes(this.props.seleccionSecundaria);
                break;
            default:
            // Perfil
            //contenido=renderizarPerfil(this.props.seleccionSecundaria);

        }
        contenido = null;
        return (
            cursos
        )
    }

}

const renderizarCitas = (seleccionado, citasRecibidas) => {

    let citas = [];
    let fechaActual = new Date();

    // Si está vacío, que muestre un mensaje bonito
    if (!citas[0]) {
        citas = <Fade in>
            <Alert color="danger">No tienes citas para esta selección</Alert>
        </Fade>
    }
    return citas;
}

const renderizarEjercicios = (seleccionado, ejerciciosRecibidos, revisarEjercicio) => {
    /*
        let ejercicios = [];
    
        if (ejerciciosRecibidos) {
    
            // Si el seleccionado es 0, ese está reservado
            if (seleccionado == 0) {
    
                // Itero todos para agregarlos uno por uno
                ejerciciosRecibidos.map((ee, ii) => {
                    ejercicios.push(ejerciciosRecibidos[ii].ejercicios.map((e, i) => {
                        return <TarjetaEjercicio
                            key={i}
                            indice={i}
                            ejercicio={e}
                            revisarEjercicio={(id) => { revisarEjercicio(id) }}
                        />;
                    }))
                })
            } else {
                ejercicios = ejerciciosRecibidos[seleccionado - 1].ejercicios.map((e, i) => {
                    return <TarjetaEjercicio
                        key={i}
                        indice={i}
                        ejercicio={e}
                        revisarEjercicio={(id) => { revisarEjercicio(id) }}
                    />;
                })
            }
    
        }
    */
    // Si está vacío, que muestre un mensaje bonito
    let ejercicios = null;
    if (!ejercicios[0]) {
        ejercicios = <Fade in><Alert color="danger">No tienes ejercicios para esta selección</Alert></Fade>;
    }
    return ejercicios;
}

const renderizarDetalleEjercicio = (ejercicio, volverMenu, enviarRespuesta) => {
    return (<TarjetaDetalleEjercicio ejercicio={ejercicio} volverMenu={volverMenu} enviarRespuesta={enviarRespuesta} />)
}

export default ContenedorCursos;