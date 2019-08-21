import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Button } from 'reactstrap';
import { Fade } from 'react-animation-components';
let moment = require('moment');

class TarjetaEjercicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        return (
            <Fade in>
                <div className="tarjeta-ejercicio">

                    <img className="img-perfil-tarjeta-ejercicio" src={this.props.ejercicio.imgPer} alt="" />
                    <div className="encabezado-tarjeta-ejercicio">
                        <h2>Profe ayúdeme porfa con este ejercicio</h2>
                        <p>Preguntado por Mila Luna - Hace 5 horas</p>
                    </div>
                    <div className="estado-tarjeta-ejercicio">
                        <p>No resuelto</p>
                    </div>

                    <div className="contenido-tarjeta-ejercicio">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type
                             specimen book. It has survived not only five centuries, but also the leap into
                             electronic typesetting, remaining essentially unchanged. It was popularised in
                             the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                             and more recently with desktop publishing software like Aldus PageMaker including
                             versions of Lorem Ipsum.
                    </p>
                    </div>
                    <div className="oferta-tarjeta-ejercicio">
                        <p>Oferta: 5 soles</p>
                    </div>
                    <button className="btn-revisar-tarjeta-ejercicio" onClick={() => { this.props.revisarEjercicio(this.props.ejercicio.id) }}>Revisar</button>

                </div>

            </Fade>
        )
    }

}

export default TarjetaEjercicio;