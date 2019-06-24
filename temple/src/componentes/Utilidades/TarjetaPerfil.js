import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { obtenerPerfilProfesor } from '../../redux/CreadorAcciones';

import * as RUTAS from '../../compartido/rutas';

const mapStateToProps = (state) => {

    return {

    }

}

const mapDispatchToProps = (dispatch) => ({

    obtenerPerfilProfesor: (codUsu) => dispatch(obtenerPerfilProfesor(codUsu))
})

class TarjetaPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Link className="enlace-pie" to={RUTAS.PERFIL_PROFESOR_ALUMNO.ruta}
                onClick={() => {
                    this.props.obtenerPerfilProfesor(this.props.datos.codUsu)
                }}>
                <div className="tarjeta-perfil text-center">
                    <div className="contenedor-img-portada">
                        <img src={this.props.datos.imgPor}
                            className="img img-responsive" />
                    </div>
                    <div className="contenedor-img-perfil">
                        <img src={this.props.datos.imgPer}
                            className="img img-responsive" />
                    </div>
                    <div className="contenido-perfil">
                        <div className="nombre-perfil">
                            {this.props.datos.nomUsu} {this.props.datos.apaUsu}
                        </div>
                        <div className="titulo-perfil">
                            @{this.props.datos.logUsu}
                        </div>
                        <div className="descripcion-perfil">
                            {this.props.datos.especialidad}
                        </div>
                        <Row>
                            <Col xs={4}>
                                <div className="resumen-perfil">
                                    <p>Experiencia</p><h5>{this.props.datos.experiencia}</h5>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className="resumen-perfil">
                                    <p>Prestigio</p><h5>{this.props.datos.prestigio}</h5>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <div className="resumen-perfil">
                                    <p>Seguidores</p><h5>{this.props.datos.seguidores}</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Link>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TarjetaPerfil));

