import React, { Component } from 'react';
import Slider from "react-slick";
import TarjetaPerfil from './TarjetaPerfil';
import { Alert } from 'reactstrap';
import { Fade } from 'react-animation-components';

require('../../../node_modules/slick-carousel/slick/slick.css');
require('../../../node_modules/slick-carousel/slick/slick-theme.css');

class Carrusel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        var settings = {
            className: 'center',
            centerMode: false,
            infinite: false,
            speed: 200,
            slidesToShow: 4,
            slidesToScroll: 1,
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
                        arrows: true,
                        centerPadding: '30px',
                        slidesToShow: 2.2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerPadding: '20px',
                        slidesToShow: 1.2
                    }
                }
            ]
        };

        const tarjetas = this.props.resultados.map((e, i) => {
            return (
                <TarjetaPerfil datos={e} key={i} />
            )
        });

        return (

            this.props.resultados.length>0

                ?
                <Slider {...settings}>
                    {tarjetas}

                </Slider>
                :
                <Fade in><Alert color="warning">No hay profesores recomendados :(</Alert></Fade>
        );
    }

}

export default Carrusel;