import React, { Component } from 'react';
import Pestanas from './PestanasPerfilAlumno';
import Presentacion from '../../Utilidades/PresentacionComponente';
import Resenas from '../../Utilidades/ResenasComponente';
import CubiertaContrato from '../../Utilidades/CubiertaContrato';
import ModalCargandoMensaje from '../../Utilidades/ModalCargandoMensaje';
import { Row, Col } from 'reactstrap';

class PerfilProfesorAlumno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idCursoSeleccionado: this.props.perfil.preferencias?this.props.perfil.preferencias[0].idCur:-1,
            idModalidadSeleccionada: this.props.perfil.preferencias?this.props.perfil.preferencias[0].modalidades[0].idMod:-1,
            horarioSeleccionado: {},
            modalAbierto: false
        };
        this.iniciarContrato = this.iniciarContrato.bind(this);
        this.establecerIdCurso = this.establecerIdCurso.bind(this);
        this.establecerIdModalidad = this.establecerIdModalidad.bind(this);
        this.establecerHorario = this.establecerHorario.bind(this);
    }

    iniciarContrato() {
        // Selecciona la pestaña 2
        this.props.seleccionarPestanaPerfilContrato(2);

        // Establece que se encuentra en el primer paso del contrato
        this.props.establecerPasoContrato(1);

        // De ahí, maneja el componente CubiertaContrato

    }

    establecerIdCurso(idCur) {
        this.setState({
            idCursoSeleccionado: idCur
        })
    }

    establecerIdModalidad(idMod) {
        this.setState({
            idModalidadSeleccionada: idMod
        })
    }

    establecerHorario(horario) {
        this.setState({
            horarioSeleccionado: horario
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.contrato.pasoActual == 3) {
            this.props.establecerPasoContrato(-1);
            
            this.props.registrarContrato(this.props.usuario.COD_USU, this.props.perfil.codUsu,
                this.state.horarioSeleccionado.inicio, this.state.horarioSeleccionado.fin,
                this.state.idCursoSeleccionado, this.state.idModalidadSeleccionada);
            this.setState({ modalAbierto: true })

        }
        // this.props.perfil.codUsu
        // this.props.usuario.COD_USU
        /*
        this.props.registrarContrato(this.props.usuario.COD_USU, this.props.perfil.codUsu,
                this.state.horarioSeleccionado.inicio, this.state.horarioSeleccionado.fin,
                this.state.idCursoSeleccionado, this.state.idModalidadSeleccionada);
        */
    }
    render() {
        const perfil = this.props.perfil;
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
                                        <button className="btn-social btn-social-azul" onClick={() => this.iniciarContrato()}>
                                            Contratar</button>
                                        <button className="btn-social btn-social-azul">
                                            Consultar</button>
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
                                        <Presentacion sobreMi={perfil.sobreMi} expLab={perfil.expLab} habCla={perfil.habCla} />
                                    </Col>
                                    <Col xs={6}>
                                        <Pestanas ubicacion={{ latitud: perfil.latitud, longitud: perfil.longitud }}
                                            publicaciones={perfil.publicaciones || []} horarios={perfil.horarios || []}
                                            preferencias={perfil.preferencias || []} perfil={perfil}
                                            pasoActual={this.props.contrato.pasoActual}
                                            establecerIdCurso={this.establecerIdCurso}
                                            establecerIdModalidad={this.establecerIdModalidad}
                                            establecerHorario={this.establecerHorario}
                                        />
                                    </Col>
                                    <Col xs={3}>
                                        <Resenas resenas={perfil.resenas} />
                                    </Col>

                                </Row>
                            </div>
                            {/*
                                this.props.registroContrato.estaCargando
                                    ?
                                    null
                                    :
                                    this.props.registroContrato.resultado
                                        ?
                                        alert(JSON.stringify("Contrato registrado n.n!"))
                                        :
                                        null*/
                            }

                            <CubiertaContrato pasoActual={this.props.contrato.pasoActual}
                                seleccionarPestanaPerfilContrato={this.props.seleccionarPestanaPerfilContrato}
                                establecerPasoContrato={this.props.establecerPasoContrato}
                            />

                        </div>
                }

            </>
        )
    }

}

export default PerfilProfesorAlumno;