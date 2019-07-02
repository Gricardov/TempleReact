import React, { Component } from 'react';
import { Row, Col, Alert } from 'reactstrap';
import TarjetaPerfil from './TarjetaPerfil';
import { Fade } from 'react-animation-components';

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
        const tarjetas = this.props.resultados.map((e, i) => {
            // Divido 12 entre el número de columnas indicadas para que bootstrap pueda mostrarlo en cuadrícula
            let cociente = Math.floor(12 / columnas);
            return (
                <Col key={i} xs={cociente}>
                    <Fade in>
                        <TarjetaPerfil datos={e} />
                    </Fade>
                </Col>

            )
        });

        return (
            <Row className="mb-4">

                {this.props.resultados.length == 0
                    ?
                    <Col xs={12}>

                        {
                            this.props.consulta
                                ?
                                <Fade in>
                                    <Alert color="warning">
                                        No se encontraron coincidencias :(
                                </Alert>
                                </Fade>
                                :
                                <Fade in>
                                    <Alert color="primary">
                                        Ingrese un término de búsqueda
                                </Alert>
                                </Fade>
                        }


                    </Col>
                    :
                    <Col xs={12}>
                        <Row>
                            {tarjetas}
                        </Row>
                    </Col>


                }


            </Row>
        );
    }

}

export default Cuadricula;