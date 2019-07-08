import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

class Publicador extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                            <textarea cols="150" rows="2" className="form-control entrada-publicacion"
                                style={{ resize: 'none' }} placeholder="Haz una publicación" />
                        </Col>

                    </Row>

                    <Row className="mt-3">
                        <Col xs={{ offset: 8, size: 4 }}>
                            <Button color="primary" block>Publicar</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }

}

export default Publicador;

