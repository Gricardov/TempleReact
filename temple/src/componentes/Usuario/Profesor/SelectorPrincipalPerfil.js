import React, { Component } from 'react';
import Slider from 'react-slick';
import { Animated } from "react-animated-css";
import { Fade, Transform } from 'react-animation-components';

import '../../../Perfil.css';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
class SelectorPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        var confSelectorPrincipal = {
            className: this.props.revisandoEjercicio ? "control-principal-perfil control-principal-perfil-oculto" : "control-principal-perfil",
            centerMode: false,
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
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerPadding: '30px',
                        slidesToShow: 2.5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerPadding: '20px',
                        slidesToShow: 1.5
                    }
                }
            ]
        };

        return (

            <Slider {...confSelectorPrincipal}>
                <div onClick={() => { this.props.seleccionar(0) }}
                    className={this.props.seleccionado == 0 ? 'boton-control-principal boton-control-principal-seleccionado'
                        : 'boton-control-principal boton-control-principal-deseleccionado'}>
                    <a href="#">Mis clases</a>
                </div>
                <div onClick={() => { this.props.seleccionar(1) }}
                    className={this.props.seleccionado == 1 ? 'boton-control-principal boton-control-principal-seleccionado'
                        : 'boton-control-principal boton-control-principal-deseleccionado'}>
                    <a href="#">Solución de ejercicios</a>
                </div>
                <div onClick={() => { this.props.seleccionar(2) }}
                    className={this.props.seleccionado == 2 ? 'boton-control-principal boton-control-principal-seleccionado'
                        : 'boton-control-principal boton-control-principal-deseleccionado'}>
                    <a href="#">Mi perfil</a>
                </div>
            </Slider>

        )
    }

}

export default SelectorPrincipal;