import React, { Component } from 'react';
import Pestanas from './PestanasPerfilAlumno';
import ModalEntradaMensaje from '../../Utilidades/ModalEntradaMensaje';
import Presentacion from '../../Utilidades/PresentacionComponente';
import Citas from './CitasPerfil';
import Publicaciones from '../../Utilidades/PublicacionesComponente';
import { Row, Col } from 'reactstrap';

class MiPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMensajeAbierto: false
        };
    }

    render() {
        const perfil = this.props.perfil;
        return (
            <div className="perfil-debajo-barra">
                <Row className="contenedor-portada-perfil">
                    <img src={perfil.imgPor} />
                    <figure className="foto-perfil" style={{ backgroundImage: `url(${perfil.imgPer})` }}>

                    </figure>
                    <div className="estadisticas-perfil">
                        <ul>
                            <li>3    <span>Transacciones</span></li>
                            <li>40 <span>Citas</span></li>

                        </ul>

                    </div>
                    <h1 className="nombres-perfil">{perfil.nomUsu} {perfil.apaUsu} {perfil.amaUsu} <small>@{perfil.logUsu}</small></h1>
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
                            <Presentacion sobreMi={perfil.sobreMi} />
                        </Col>

                        <Col xs={6}>

                            <div className="quickFade tarjeta-seccion" style={{ zIndex: '999999', position: 'relative' }}>
                                <Row className="mb-4">
                                    <Col xs={12} className="sectionTitle">
                                        <h3 className="categories_tittle me_tittle">Publicaciones de mis profesores</h3>
                                    </Col>
                                    <Col xs={12} className="mt-4">
                                    <Publicaciones publicaciones={perfil.publicaciones} perfil={perfil} />
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                        <Col xs={3}>
                            <Citas citas={perfil.contratos} />
                        </Col>
                    </Row>
                </div>
            </div>
        )

    }

}

export default MiPerfil;