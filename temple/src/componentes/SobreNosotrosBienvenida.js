import React, { Component } from 'react';
import { Card, CardImg, CardBody, Row, Col } from 'reactstrap';
import { Cargando } from './CargandoComponente';
import {Fade} from 'react-animation-components';

class SobreNosotros extends Component {

    render() {

        const LideresTarjetas = () => {

            if (this.props.estaCargando) {

                return (

                    <div className="container text-center bloque-contenedor">
                        <Row className="justify-content-center">
                        <Cargando />
                        </Row>
                    </div>


                );

            }

            else if (this.props.mensError) {

                return (

                    <div className="container text-center bloque-contenedor">
                    <Row className="justify-content-center">
                        <p className="text-danger">{this.props.mensError}</p>
                        </Row>
                    </div>

                );

            }
            else {

                const tarjeta = this.props.lideres.map((lider) => {

                    return (
                        <Fade in>

                        <div key={lider.id} className="col-12 m-1">
                            <Card className="tarjeta-presentacion mb-4">
                                <Row>
                                    <Col xs={{size: 12, order:2}} md={{size: 7, order:1}}>
                                        <CardBody>
                                            <h1>{lider.nombre}</h1>
                                            <p className="title">{lider.puesto}</p>
                                            <p>{lider.titulo}</p>
                                            <p className="text-justify">{lider.descripcion}</p>
                                            <div>
                                            <Row className="justify-content-around mb-3">
                                            <Col><i className="fa fa-dribbble enlace-social"></i></Col>
                                            <Col><i className="fa fa-twitter enlace-social"></i></Col>
                                            <Col><i className="fa fa-linkedin enlace-social"></i></Col>
                                            <Col><i className="fa fa-facebook enlace-social"></i></Col>
                                            </Row>
                                            </div>
                                            <p><a href={lider.contacto} className="btn-temple">Contactar</a></p>
                                        </CardBody>
                                    </Col>
                                    <Col xs={{size: 12, order:1}} md={{size: 5, order:2}}>
                                        <CardImg src={lider.img} alt="yo" width="100%" height="100%" />
                                    </Col>
                                </Row>
                            </Card>

                        </div>
                        </Fade>

                    )


                })

                return tarjeta;

            }
        }

        return (

            <div className="container debajo-barra bloque-contenedor">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h4 className="text-left text-muted">Sobre el fundador</h4>
                    </div>
                </div>
                <div className="row">
                    <LideresTarjetas />
                </div>
            </div>

        )



    }






}



export default SobreNosotros;