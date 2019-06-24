import React, { Component } from 'react';
import Pestanas from '../../Utilidades/PestanasComponente';
import ModalEntradaMensaje from '../../Utilidades/ModalEntradaMensaje';
import Presentacion from '../Alumno/Presentacion';
import Resenas from '../Alumno/Resenas';

import { Row, Col } from 'reactstrap';
import { perfilProfesorObtenido } from '../../../redux/CreadorAcciones';

class PerfilProfesorAlumno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMensajeAbierto: false,
        };
    }

    render() {

        const perfil=this.props.perfil;

        return (

            <>
                {
                    this.props.estaCargando
                        ?
                        null
                        :
                        <div className="perfil-debajo-barra">
                            <Row className="contenedor-portada-perfil">
                                <img src={perfil.imgPor} />
                                <figure className="foto-perfil" style={{ backgroundImage: `url(${perfil.imgPer})` }}>

                                </figure>
                                <div className="estadisticas-perfil">
                                    <ul>
                                        <li>{perfil.experiencia}    <span>Horas de experiencia</span></li>
                                        <li>{perfil.cursos} <span>Cursos</span></li>
                                        <li>{perfil.prestigio}    <span>Prestigio</span></li>
                                        <li>{perfil.seguidores}<span>Seguidores</span></li>
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
                                        <Presentacion sobreMi={perfil.sobreMi} expLab={perfil.expLab} habCla={perfil.habCla}/>
                                    </Col>
                                    <Col xs={6}>
                                        <Pestanas ubicacion={{latitud:perfil.latitud, longitud:perfil.longitud}}
                                        publicaciones={perfil.publicaciones} horarios={perfil.horarios}
                                        preferencias={perfil.preferencias} perfil={perfil}/>
                                    </Col>
                                    <Col xs={3}>
                                        <Resenas resenas={perfil.resenas}/>
                                    </Col>

                                </Row>
                            </div>
                            <ModalEntradaMensaje encabezado="Enviar mensaje" abierto={this.state.modalMensajeAbierto} />
                        </div>
                }

            </>
        )
    }

}

export default PerfilProfesorAlumno;