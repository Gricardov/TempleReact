import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cerrarSesion } from '../../../redux/CreadorAcciones';
import { Input } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import Carrusel from '../../Utilidades/CarruselTarjetas';

import * as RUTAS from '../../../compartido/rutas';

const mapStateToProps = (state) => {

    return {

        sesion: state.sesion
    }

}

const mapDispatchToProps = (dispatch) => ({

    cerrarSesion: () => dispatch(cerrarSesion())
})

class InicioAlumno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipoVista:1
        };



    }

    render() {

        return (
            <div className="container debajo-barra bloque-contenedor">

                <Row className="mb-4">
                    <Col xs={12}>
                        <MensajeAnimado texto={`Hola ${this.props.sesion.usuario.nombres}! ¿Qué deseas aprender hoy?`} />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={12}>
                        <Input type="text" placeholder="Por ejemplo: Java, SQL Server, MySQL" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={6}>
                        <a href="#">Búsqueda avanzada</a>
                    </Col>
                    <Col xs={6}>
                        <label className="float-right label">
                            <div className="toggle">
                                <input className="toggle-state" type="checkbox" name="check" value="check" />
                                <div className="toggle-inner">
                                    <div className="indicator"></div>
                                </div>
                                <div className="active-bg"></div>
                            </div>
                            <div className="label-text">Cuadrícula</div>
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Carrusel />
                    </Col>
                </Row>

            </div>
        )
    }

}

const MensajeAnimado = (props) => {

    const animado = [...props.texto].map((letra, i) => {
        return (
                <FadeTransform in key={i} className="d-inline" transformProps={{exitTransform:'delay(1.0) translateY(-100%)'}}>
                    <h2 className="d-inline text-muted text-center">{letra}</h2>
                </FadeTransform>
        )
    })

    return (
        <div className="text-center">
        {animado}
        </div>
        );

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InicioAlumno));