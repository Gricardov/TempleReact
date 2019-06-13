import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Slider from "react-slick";
import TarjetaPerfil from './TarjetaPerfil';

require('../../../node_modules/slick-carousel/slick/slick.css');
require('../../../node_modules/slick-carousel/slick/slick-theme.css');

class Cuadricula extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const columnas = this.props.columnas;

        const tarjetas = this.props.tarjetas.map((e, i) => {

            // Divido 12 entre el número de columnas indicadas para que bootstrap pueda mostrarlo en cuadrícula
            let cociente = Math.floor(12 / columnas);
            return (
                    <Col key={i} xs={cociente}>
                        <TarjetaPerfil />
                    </Col>

            )
        });


        return (
            <Row className="mb-4">
                    {tarjetas}
            </Row>
        );
    }

}

export default Cuadricula;