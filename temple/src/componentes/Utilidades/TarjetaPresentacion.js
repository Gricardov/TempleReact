import React from 'react';
import { Row, Col, Card, CardBody, CardImg} from 'reactstrap';


const TarjetPresentacion = (props) => {
    return (
        <Card className="tarjeta-presentacion mb-4">
            <Row>
                <Col xs={{ size: 12, order: 2 }} md={{ size: 7, order: 1 }}>
                    <CardBody>
                        <h3>{props.datos.titulo}</h3>
                        <p className="text-justify">{props.datos.descripcion}</p>
                        
                    </CardBody>
                </Col>
                <Col xs={{ size: 12, order: 1 }} md={{ size: 5, order: 2 }}>
                    <CardImg src={props.datos.urlImg} alt="yo" width="100%" height="100%" />
                </Col>
            </Row>
        </Card>
    )
}

export default TarjetPresentacion;