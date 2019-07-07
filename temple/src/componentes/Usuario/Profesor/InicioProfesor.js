import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cerrarSesion } from '../../../redux/CreadorAcciones';
import { Input } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import Carrusel from '../../Utilidades/CarruselTarjetas';
import Cuadrícula from '../../Utilidades/CuadriculaTarjetas';
import Sugerencias from '../../Utilidades/SugerenciasBusqueda';
import MapaMultiple from '../../Utilidades/ComponenteMapaMultiple';
import { Fade } from 'react-animation-components';

const mapStateToProps = (state) => {

    return {
        sesion: state.sesion

    }

}

const mapDispatchToProps = (dispatch) => ({

    cerrarSesion: () => dispatch(cerrarSesion())

})

class InicioProfesor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.manejarCambio = this.manejarCambio.bind(this);
    }

    manejarCambio(evento) {


    }

    render() {
        // Necesito las publicaciones y las citas para que se muestren primero
        let publicaciones = [];
        let citas = [];
        /*
        if (this.props.sesion.usuario.publicaciones) {
            publicaciones = this.props.sesion.usuario.preferencias.map((e, i) => {

                return (
                    <Row className="mb-3" key={i}>
                        <Col xs={12}>
                            <h5 className="text-muted">Curso <span className="badge badge-pill badge-danger">{e.nomCur}</span>{' '}
                                Nivel <span className="badge badge-pill badge-info">{e.nomNiv}</span>{' '}</h5>
                        </Col>
                        <Col xs={12}>
                            <Carrusel resultados={e.profesores} />
                        </Col>

                    </Row>
                )
            })
        }

        if (this.props.sesion.usuario.citas) {
            publicaciones = this.props.sesion.usuario.preferencias.map((e, i) => {

                return (
                    <Row className="mb-3" key={i}>
                        <Col xs={12}>
                            <h5 className="text-muted">Curso <span className="badge badge-pill badge-danger">{e.nomCur}</span>{' '}
                                Nivel <span className="badge badge-pill badge-info">{e.nomNiv}</span>{' '}</h5>
                        </Col>
                        <Col xs={12}>
                            <Carrusel resultados={e.profesores} />
                        </Col>

                    </Row>
                )
            })
        }*/

        return (
            <div className="container debajo-barra bloque-contenedor">

                <Row className="mb-4">
                    <Col xs={12}>
                        <MensajeAnimado texto={`Bienvenid@ de nuevo, ${this.props.sesion.usuario.NOM_USU}`} />
                    </Col>
                </Row>












            </div>
        )
    }

}

const MensajeAnimado = (props) => {

    const animado = [...props.texto].map((letra, i) => {
        return (
            <FadeTransform in key={i} className="d-inline" transformProps={{ exitTransform: 'delay(1.0) translateY(-100%)' }}>
                <h3 className="d-inline text-muted text-center">{letra}</h3>
            </FadeTransform>
        )
    })

    return (
        <div className="text-center">
            {animado}
        </div>
    );

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InicioProfesor));