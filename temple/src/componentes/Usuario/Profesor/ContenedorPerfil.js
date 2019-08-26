import React, { Component } from 'react';
import Slider from 'react-slick';
import TarjetaCita from '../../Utilidades/TarjetaCita';
import TarjetaEjercicio from '../../Utilidades/TarjetaEjercicio';
import TarjetaDetalleEjercicio from '../../Utilidades/TarjetaDetalleEjercicio';
import { Fade, Transform } from 'react-animation-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Alert } from 'reactstrap';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

let moment = require('moment');

class ContenedorPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        // Primero, construyo las pestañas
        let pestanas = [];

        if (this.props.pestanas) {
            pestanas = this.props.pestanas.map((e, i) => {
                return (
                    <div key={i} className="boton-control-secundario">
                        <a style={{ animationDelay: `${i * 0.1}s` }} onClick={() => { this.props.seleccionar(i) }}
                            className={this.props.seleccionSecundaria == i ? 'boton-control-secundario-seleccionado'
                                : 'boton-control-secundario-deseleccionado'}>{e.nombre}</a>
                    </div>
                )
            })
        }
        // Ahora, pregunto qué clase de información debo mostrar
        let contenido = null;

        switch (this.props.seleccionPrincipal) {

            case -2:
                // Detalle ejercicio
                contenido = renderizarDetalleEjercicio(this.props.ejercicioSeleccionado,
                    this.props.volverMenu, this.props.enviarRespuesta);
                break;
            case 0:
                // Citas
                contenido = renderizarCitas(this.props.seleccionSecundaria, this.props.citas);
                break;
            case 1:
                // Solución de ejercicios
                contenido = renderizarEjercicios(this.props.seleccionSecundaria, this.props.ejercicios,
                    this.props.revisarEjercicio);
                break;
            case 2:
                // Mensajes
                //contenido=renderizarMensajes(this.props.seleccionSecundaria);
                break;
            default:
            // Perfil
            //contenido=renderizarPerfil(this.props.seleccionSecundaria);

        }

        var confSelectorSecundario = {
            className: this.props.revisandoEjercicio ? "control-secundario-perfil-perfil control-secundario-perfil-oculto" : "control-secundario-perfil",
            centerMode: false,
            infinite: false,
            speed: 200,
            slidesToShow: pestanas.length <= 4 ? pestanas.length : 3.5,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 3.5
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 2.5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1.6
                    }
                }
            ]
        };

        return (
            <>
                <Slider {...confSelectorSecundario}>
                    {pestanas}
                </Slider>
                <Transform enterTransform="translateY(0px)" exitTransform="translateY(50px)" duration={300} in>
                    <div className="contenido-seleccion">
                        <div className={this.props.revisandoEjercicio 
                            ?
                            "tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido-extendida"
                            :
                            "tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido"}>
                            {contenido}
                        </div>
                    </div>
                </Transform>
            </>
        )
    }

}

const renderizarCitas = (seleccionado, citasRecibidas) => {

    let citas = [];
    let fechaActual = new Date();

    if (citasRecibidas) {

        switch (seleccionado) {
            case 0:
                // Futuras
                citas = citasRecibidas.map((e, i) => {

                    if (moment(e.fecIni).toDate() > fechaActual) {
                        return <TarjetaCita
                            key={i}
                            indice={i}
                            cita={{ nomUsu: e.nomAlu, apaUsu: e.apaAlu, amaUsu: e.amaAlu, ...e }}
                        />;
                    }

                })
                break;
            case 1:
                // Presentes
                citas = citasRecibidas.map((e, i) => {

                    if (moment(e.fecIni).toDate() <= fechaActual && fechaActual <= moment(e.fecFin).toDate()) {
                        return <TarjetaCita
                            key={i}
                            indice={i}
                            cita={{ nomUsu: e.nomAlu, apaUsu: e.apaAlu, amaUsu: e.amaAlu, ...e }} />;
                    }

                })
                break;

            case 2:
                // Pasadas
                citas = citasRecibidas.map((e, i) => {

                    if (moment(e.fecFin).toDate() < fechaActual) {
                        return <TarjetaCita
                            key={i}
                            indice={i}
                            cita={{ nomUsu: e.nomAlu, apaUsu: e.apaAlu, amaUsu: e.amaAlu, ...e }} />;
                    }

                })
                break;
        }
    }

    // Si está vacío, que muestre un mensaje bonito
    if (!citas[0]) {
        citas = <Fade in>
            <Alert color="danger">No tienes citas para esta selección</Alert>
        </Fade>
    }
    return citas;
}

const renderizarEjercicios = (seleccionado, ejerciciosRecibidos, revisarEjercicio) => {

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

    // Si está vacío, que muestre un mensaje bonito
    if (!ejercicios[0]) {
        ejercicios = <Fade in><Alert color="danger">No tienes ejercicios para esta selección</Alert></Fade>;
    }
    return ejercicios;
}

const renderizarDetalleEjercicio = (ejercicio, volverMenu, enviarRespuesta) => {
    return (<TarjetaDetalleEjercicio ejercicio={ejercicio} volverMenu={volverMenu} enviarRespuesta={enviarRespuesta}/>)
}

export default ContenedorPerfil;