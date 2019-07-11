import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Button, Input } from 'reactstrap';
import Cargando from '../Utilidades/CargandoComponente';

class Publicador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descripcion: ''
        };
    }

    render() {
        return (
            <Card className="mb-3">
                <CardBody>
                    <Row>
                        <Col xs={2}>
                            <div className="contenedor-img-circular">
                                <img className="img-circular" src={this.props.usuario.IMG_PER} />
                            </div>
                        </Col>
                        <Col xs={10}>
                            <Row>
                                <Col xs={12} className="mb-2">
                                    <Input placeholder="Título de la publicación" onChange={(e) => { this.setState({ titulo: e.target.value }) }} />
                                </Col>
                                <Col xs={12}>
                                    <textarea cols="150" rows="2" className="form-control entrada-publicacion"
                                        style={{ resize: 'none' }} placeholder="Contenido de la publicación" onChange={(e) => { this.setState({ descripcion: e.target.value }) }} />
                                </Col>
                                {
                                    this.props.registroPublicacion.estaCargando
                                        ?
                                        <Col xs={12}>
                                            <Cargando mensaje="Publicando..." />
                                        </Col>
                                        :
                                        null
                                }
                            </Row>
                        </Col>

                    </Row>

                    <Row className="mt-3">
                        <Col xs={{ offset: 8, size: 4 }}>
                            <Button color="primary" block onClick={(e) => {

                                if (this.state.titulo == '' || this.state.descripcion == '') {
                                    alert("El título ni la descripción pueden estar vacíos")
                                } else {
                                    this.props.registrarPublicacion(this.props.usuario.COD_USU,
                                        this.state.titulo, this.state.descripcion, 0);
                                }

                            }}>Publicar</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }

}

export default Publicador;

