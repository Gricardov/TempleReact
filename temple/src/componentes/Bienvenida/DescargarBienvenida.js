import React, { Component } from 'react';
import { Card, CardTitle, CardBody, Col, Row, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import * as RUTAS from '../../compartido/rutas';

class Descargar extends Component {

    render() {

        return (

            <div className="container debajo-barra bloque-contenedor">

                <Card>
                    <Row>
                        <Col xs={12} sm={8}>
                            <CardBody>

                                <CardTitle className="text-center text-muted mb-5">Encuentra a los mejores profesores a través de
                                la web o de nuestra aplicación</CardTitle>
                                <Row>
                                    <Col xs={12}>
                                        <div className="text-center">
                                            <i className="fa fa-globe fa-5x"></i>
                                            <h3>Web</h3>
                                            <p>Compatible con todos los navegadores</p>
                                            <Link to={RUTAS.INICIAR_SESION_BIENVENIDA.ruta} className="btn btn-info">Iniciar sesión ahora</Link>
                                        </div>
                                        <hr />
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <div className="text-center mb-4">
                                            <i className="fa fa-android fa-5x"></i>
                                            <h3>Android</h3>
                                            <p>Mínima versión requerida: 4.4 KitKat</p>
                                            <p className="text-warning">Próximamente disponible</p>
                                            <Button color="primary"><i className="fa fa-download"></i> Obtener ahora</Button>
                                        </div>
                                        <hr className="d-block d-md-none" />

                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className="text-center mb-4">
                                            <i className="fa fa-apple fa-5x"></i>
                                            <h3>iOS</h3>
                                            <p>Mínima versión requerida: iOS7</p>
                                            <p className="text-warning">Próximamente disponible</p>
                                            <Button color="success"><i className="fa fa-download"></i> Obtener ahora</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>

                        </Col>

                        <Col sm={4} className="d-none d-md-block">
                            <img src="../recursos/imagenes/descargar-app-inicio.jpg" width="100%" height="100%" alt="img-descargar"></img>
                        </Col>
                    </Row>

                </Card>

            </div>

        );

    }

}

export default Descargar;