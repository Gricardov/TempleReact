import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Button } from 'reactstrap';
let moment = require('moment');

class TarjetaCita extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        return (
            <Card key={this.props.indice} className="mb-4">
                <CardHeader>
                    <Row>
                        <Col xs={12}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="mr-2">
                                        <img className="rounded-circle" width="45" src={this.props.cita.imgPer} alt="" />
                                    </div>
                                    <div className="ml-2">
                                        <div className="h5 m-0">Cita con {this.props.cita.nomUsu} {this.props.cita.apaUsu} {this.props.cita.amaUsu}</div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Row className="valign-wrapper popular_item" key={this.props.cita.idCon}>
                        <Col xs={7} className="ml-2">
                            <span><b>Curso:</b> {this.props.cita.nomCur}</span><br />
                            <span><b>Modalidad:</b> {this.props.cita.nomMod}</span><br />
                            <span><b>Desde:</b> {moment(this.props.cita.fecIni).format('DD-MM-YYYY HH:mm:ss')}</span><br />
                            <span><b>Hasta:</b> {moment(this.props.cita.fecFin).format('DD-MM-YYYY HH:mm:ss')}</span>
                        </Col>
                        <Col xs={4}>
                                <Button color="primary" onClick={()=>{this.props.mostrarMapa({longitud:this.props.cita.longitud,latitud:this.props.cita.latitud})}}><i className="fa fa-eye"></i> Ver en mapa</Button>
                        </Col>
                    </Row>

                </CardBody>

            </Card>
        )
    }

}

export default TarjetaCita;