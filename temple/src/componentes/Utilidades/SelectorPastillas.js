import React, { Component } from 'react';
import Slider from 'react-slick';
import './SelectorPastillas.css';

const SelectorPastillas = (props) => {

    // Primero, construyo las pestañas
    let pestanas = [];

    if (props.pestanas) {
        pestanas = props.pestanas.map((e, i) => {
            return (
                <div key={i} className="boton-control-secundario">
                    <a style={{ animationDelay: `${i * 0.1}s` }} onClick={() => { props.seleccionar(i) }}
                        className={props.indiceSeleccion == i ? 'boton-control-secundario-seleccionado'
                            : 'boton-control-secundario-deseleccionado'}>{e.nombre}</a>
                </div>
            )
        })
    }

    var configuracion = {
        className: props.oculto ? "control-secundario oculto" : "control-secundario",
        centerMode: false,
        infinite: false,
        speed: 200,
        slidesToShow: props.pestanasVisibles?props.pestanasVisibles:pestanas.length <= 4 ? pestanas.length : 3.5,
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
        <Slider {...configuracion}>
            {pestanas}
        </Slider>
    )

}

export default SelectorPastillas;