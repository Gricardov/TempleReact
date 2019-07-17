import React, { Component } from 'react';
import { Row, Col, Input, Card, CardHeader, CardBody, TabContent, TabPane, Nav, NavItem, NavLink, Button, Modal, ModalBody } from 'reactstrap';
import TarjetaCita from '../../Utilidades/TarjetaCita';
import Mapa from '../../Utilidades/ComponenteMapa';
import classnames from 'classnames';

let moment = require('moment');

class MisCitas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pestanaSeleccionada: '1',
            modalAbierto: false,
            posicion: {}
        };
        this.seleccionarPestana = this.seleccionarPestana.bind(this);
        this.mostrarMapa = this.mostrarMapa.bind(this);

    }
    seleccionarPestana(pestana) {
        if (this.state.pestanaSeleccionada !== pestana) {
            this.setState({
                pestanaSeleccionada: pestana
            });
        }
    }
    mostrarMapa(posicion) {
        this.setState({ modalAbierto: true, posicion: posicion })
    }
    render() {
        let futuras = [];
        let presentes = [];
        let pasadas = [];
        let fechaActual = new Date();

        if (this.props.citas) {

            futuras = this.props.citas.map((e, i) => {

                if (moment(e.fecIni).toDate() > fechaActual) {
                    return <TarjetaCita
                        key={i}
                        indice={i}
                        cita={{ nomUsu: e.nomAlu, apaUsu: e.apaAlu, amaUsu: e.amaAlu, ...e }}
                        mostrarMapa={this.mostrarMapa} />;
                }

            })

            presentes = this.props.citas.map((e, i) => {

                if (moment(e.fecIni).toDate() <= fechaActual && fechaActual <=moment(e.fecFin).toDate()) {
                    return <TarjetaCita
                        key={i}
                        indice={i}
                        cita={{ nomUsu: e.nomAlu, apaUsu: e.apaAlu, amaUsu: e.amaAlu, ...e }}
                        mostrarMapa={this.mostrarMapa} />;
                }

            })

            pasadas = this.props.citas.map((e, i) => {

                if (moment(e.fecFin).toDate() < fechaActual) {
                    return <TarjetaCita
                        key={i}
                        indice={i}
                        cita={{ nomUsu: e.nomAlu, apaUsu: e.apaAlu, amaUsu: e.amaAlu, ...e }}
                        mostrarMapa={this.mostrarMapa} />;
                }

            })
        }

        return (

            <div className="row debajo-barra justify-content-center">
                <div className="contenedor-detalles">
                    <h3 className="categories_tittle me_tittle">Mis citas</h3>

                    <Nav tabs>
                        <NavItem style={{ width: '30%' }}>
                            <NavLink
                                className={classnames({ active: this.state.pestanaSeleccionada === '1' })}
                                onClick={() => { this.seleccionarPestana('1'); }}>
                                <i className="fa fa-forward"></i> Futuras
                </NavLink>
                        </NavItem>
                        <NavItem style={{ width: '30%' }}>
                            <NavLink
                                className={classnames({ active: this.state.pestanaSeleccionada === '2' })}
                                onClick={() => { this.seleccionarPestana('2'); }}>
                                <i className="fa fa-clock-o"></i> En este momento
                </NavLink>
                        </NavItem>
                        <NavItem style={{ width: '30%' }}>
                            <NavLink
                                className={classnames({ active: this.state.pestanaSeleccionada === '3' })}
                                onClick={() => { this.seleccionarPestana('3'); }}>
                                <i className="fa fa-list"></i> Pasadas
                </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.pestanaSeleccionada}>
                        <TabPane tabId="1">
                            <Row className="mt-4">
                                <Col xs={12}>
                                    {
                                        futuras
                                    }
                                </Col>
                            </Row>

                        </TabPane>
                        <TabPane tabId="2">
                            <Row className="mt-4">
                                <Col xs={12}>{

                                    presentes
                                }
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row className="mt-4">
                                <Col xs={12}>{

                                    pasadas
                                }
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>

                <Modal className="modal-lg" isOpen={this.state.modalAbierto} toggle={() => { this.setState({ modalAbierto: !this.state.modalAbierto }) }}>
                    <ModalBody>
                        <Mapa posicion={this.state.posicion} soloMuestra={true} />
                    </ModalBody>
                </Modal>

            </div>


        )
    }

}

export default MisCitas;