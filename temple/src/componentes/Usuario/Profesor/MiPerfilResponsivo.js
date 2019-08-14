import React, { Component } from 'react';
import ModalEntradaMensaje from '../../Utilidades/ModalEntradaMensaje';
import Presentacion from '../../Utilidades/PresentacionComponente';
import Pestanas from './PestanasPerfilProfesor';
import Resenas from '../../Utilidades/ResenasComponente';
import Publicaciones from '../../Utilidades/PublicacionesComponente';
import { Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import TarjetaCita from '../../Utilidades/TarjetaCita';

import '../../../Perfil.css';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
let moment = require('moment');

class MiPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMensajeAbierto: false
        };
    }

    render() {

        var confSelectorPrincipal = {
            className: 'control-principal-perfil',
            centerMode: false,
            infinite: false,
            speed: 200,
            slidesToShow: 3.5,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerPadding: '40px',
                        slidesToShow: 2.5
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerPadding: '30px',
                        slidesToShow: 1.5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerPadding: '20px',
                        slidesToShow: 1.2
                    }
                }
            ]
        };

        var confSelectorSecundario = {
            className: "control-secundario-perfil",
            centerMode: true,
            infinite: false,
            speed: 200,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 1.2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1.2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1.2
                    }
                }
            ]
        };

        let futuras = [];
        let fechaActual = new Date();

        if (this.props.citas) {
            futuras = this.props.citas.map((e, i) => {

                if (moment(e.fecIni).toDate() > fechaActual) {
                    return <TarjetaCita key={i}
                        indice={i}
                        cita={{ nomUsu: e.nomProf, apaUsu: e.apaProf, amaUsu: e.amaProf, ...e }}
                        mostrarMapa={this.mostrarMapa} />;
                }

            })
        }
        const perfil = this.props.perfil;
        return (
            <div className="perfil-debajo-barra contenedor-css-grid">
                <div className="avisos">
                    Tienes una nueva notificación
                </div>
                <div className="cajon-colapsable">
                    <div className="foto-perfil" style={{ backgroundImage: `url(${perfil.imgPer})` }}>
                    </div>
                    <h1 style={{ display: "block" }} className="nombres-perfil">{perfil.nomUsu} {perfil.apaUsu} {perfil.amaUsu}</h1>
                    <p className="nombre-seguimiento">@{perfil.logUsu}</p>

                    <div className="contenedor-datos-resumidos-perfil">
                        <i className="fa fa-lightbulb-o fa-2x" style={{ color: "gray" }}></i> Diseñador UI/UX<br />
                        <i className="fa fa-suitcase fa-2x" style={{ color: "gray" }}></i> Academias Trilce
                    </div>
                    <hr />
                    <div className="contenedor-atributos-perfil">
                        <i className="fa fa-check-circle fa-2x" style={{ color: "green" }}></i> Perfil verificado<br />
                        <i className="fa fa-check-circle fa-2x" style={{ color: "green" }}></i> 10 horas de experiencia<br />
                        <i className="fa fa-check-circle fa-2x" style={{ color: "green" }}></i> Rango experto<br />

                    </div>


                </div>

                <div className="selector-principal-perfil">
                    <Slider {...confSelectorPrincipal}>
                        <div className="boton-control-principal">
                            <a href="#">Mis citas</a>
                        </div>
                        <div className="boton-control-principal">
                            <a href="#">Solución de dudas</a>
                        </div>
                        <div className="boton-control-principal">
                            <a href="#">Mis mensajes</a>
                        </div>
                        <div className="boton-control-principal">
                            <a href="#">Mi cuenta</a>
                        </div>
                    </Slider>

                </div>

                <div className="contenedor-selector-secundario">
                    <Slider {...confSelectorSecundario}>
                        <div className="boton-control-secundario">
                            <a href="#">Futuras</a>
                        </div>
                        <div className="boton-control-secundario">
                            <a href="#">En este momento</a>
                        </div>
                        <div className="boton-control-secundario">
                            <a href="#">Pasadas</a>
                        </div>
                    </Slider>
                    <div className="contenido-seleccion">
                        <div className="tarjeta-contenedora-contenido">
                            {futuras}
                        </div>
                    </div>

                </div>
            </div>
        )

    }

}

export default MiPerfil;