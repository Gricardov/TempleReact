import React, { Component } from 'react';
import Pestanas from '../../Utilidades/PestanasComponente';
import ModalEntradaMensaje from '../../Utilidades/ModalEntradaMensaje';
import Presentacion from '../Alumno/Presentacion';
import Resenas from '../Alumno/Resenas';


import { Row, Col } from 'reactstrap';

class MiPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMensajeAbierto: false
        };
    }

    render() {
        return (
            <div className="perfil-debajo-barra">
                <Row className="contenedor-portada-perfil">
                    <img src="http://4.bp.blogspot.com/-pUDTYSbW7qc/UubgtKShOSI/AAAAAAAAALI/qggus3wtkxI/s1600/mu%25C3%25B1eco+de+caja+mirando+corazones.jpg" />
                    <figure className="foto-perfil" style={{ backgroundImage: `url(${this.props.usuario.IMG_PER})` }}>

                    </figure>
                    <div className="estadisticas-perfil">
                        <ul>
                            <li>13    <span>Horas de experiencia</span></li>
                            <li>4 <span>Cursos</span></li>
                            <li>5    <span>Prestigio</span></li>
                            <li>324   <span>Seguidores</span></li>
                        </ul>
                        <div className="float-right">
                            <a href="#" className="follow ml-3">
                                Contratar
                        </a>
                            <a href="#" className="follow" onClick={() => { this.setState({ modalMensajeAbierto: true }) }}>
                                Consultar
                        </a>
                        </div>
                    </div>
                    <h1 className="nombres-perfil">{this.props.usuario.NOM_USU} {this.props.usuario.APA_USU} {this.props.usuario.AMA_USU}<small>@CorazonDeMelon</small></h1>
                </Row>
                <Row className="contenedor-resumen tarjeta-seccion">
                    <Col xs={12}>
                    <div className="titulo">
                        <h3 className="titulo-seccion">Logros</h3>
                    </div>
                    <div className="contenido">
                        <div className="logro yellow">
                            <div className="circle"> <i className="fa fa-bolt"></i></div>
                            <div className="ribbon">Titulado</div>
                        </div>
                        <div className="logro orange">
                            <div className="circle"> <i className="fa fa-wheelchair-alt"></i></div>
                            <div className="ribbon">Recomendado</div>
                        </div>
                        <div className="logro pink">
                            <div className="circle"> <i className="fa fa-pied-piper"></i></div>
                            <div className="ribbon">Famoso</div>
                        </div>
                        <div className="logro red">
                            <div className="circle"> <i className="fa fa-shield"></i></div>
                            <div className="ribbon">Verificado</div>
                        </div>
                        <div className="logro purple">
                            <div className="circle"> <i className="fa fa-anchor"></i></div>
                            <div className="ribbon">Experto</div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <div className="container-fluid">
                    <Row>
                        <Col xs={3}>
                            <Presentacion />
                        </Col>
                        <Col xs={6}>
                            <Pestanas />
                        </Col>
                        <Col xs={3}>
                            <Resenas />
                        </Col>

                    </Row>
                </div>
                <ModalEntradaMensaje encabezado="Enviar mensaje" abierto={this.state.modalMensajeAbierto} />
            </div>
        )
    }

}

export default MiPerfil;