import React, { Component } from 'react';
import Slider from 'react-slick';
import { Animated } from "react-animated-css";
import { Fade, Transform } from 'react-animation-components';

import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import './SelectorPrincipalPerfil.css';

class SelectorPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        var configuracion = {
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

        let pestanas=[];

        pestanas=this.props.pestanas.map((e,i)=>{
            return (
                <div onClick={() => { this.props.seleccionar(i) }}
                    className={this.props.seleccionado == i ? 'boton-control-principal boton-control-principal-seleccionado'
                        : 'boton-control-principal boton-control-principal-deseleccionado'}>
                    <a href="#">{e.nombre}</a>
                </div>
            )
        })

        return (

            <Slider {...configuracion}>
                {pestanas}                
            </Slider>

        )
    }

}

export default SelectorPrincipal;