import React, { Component } from 'react';
import Slider from "react-slick";
import TarjetaPerfil from './TarjetaPerfil';

require('../../../node_modules/slick-carousel/slick/slick.css');
require('../../../node_modules/slick-carousel/slick/slick-theme.css');

class Carrusel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        //header='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/IMG_20181128_134718.jpg?alt=media&token=cc498d4e-b10f-44ea-a0d6-cd59407fc62e'
        //avatar='https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c'

    }

    render() {
        var settings = {
            className: 'center',
            centerMode: false,
            infinite: false,
            speed: 500,
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

        return (
            <Slider {...settings}>
                <div>
                    <TarjetaPerfil />

                </div>
                <div>
                    <TarjetaPerfil />

                </div>
                <div>
                    <TarjetaPerfil />

                </div>
                <div>
                    <TarjetaPerfil />

                </div>
                <div>
                    <TarjetaPerfil />

                </div>
                <div>
                    <TarjetaPerfil />

                </div>
                <div>
                    <TarjetaPerfil />

                </div>
            </Slider>
        );
    }

}

export default Carrusel;