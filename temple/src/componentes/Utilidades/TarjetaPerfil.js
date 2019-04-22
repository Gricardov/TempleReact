import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class TarjetaPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="tarjeta-perfil text-center">
                <div className="contenedor-img-portada">
                    <img src="https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/IMG_20181128_134718.jpg?alt=media&token=cc498d4e-b10f-44ea-a0d6-cd59407fc62e"
                        className="img img-responsive" />
                </div>
                <div className="contenedor-img-perfil">
                    <img src="https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c"
                        className="img img-responsive" />
                </div>
                <div className="contenido-perfil">
                    <div className="nombre-perfil">
                        Mila Luna
                    </div>
                    <div className="titulo-perfil">
                        @Cora
                    </div>
                    <div className="descripcion-perfil">
                        Especialista en dejar corazones rotos y nunca volver a hablarte.
                </div>
                    <Row>
                        <Col xs={4}>
                            <div className="resumen-perfil">
                                <p>Ternura</p><h5>1300</h5>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="resumen-perfil">
                                <p>Belleza</p><h5>250</h5>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="resumen-perfil">
                                <p>Seguidores</p><h5>168</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

}

export default TarjetaPerfil;


