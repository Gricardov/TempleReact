import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';

import * as RUTAS from '../../compartido/rutas';

class InicioAlumno extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="container debajo-barra bloque-contenedor">

                <Row>

                    <Col xs={12}>
                        Holi
            </Col>
                </Row>
            </div>
        )
    }

}

export default InicioAlumno;