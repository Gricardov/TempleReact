import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cerrarSesion } from '../../../redux/CreadorAcciones';
import { Button } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import Publicaciones from '../../Utilidades/PublicacionesComponente';
import Carrusel from '../../Utilidades/CarruselTarjetas';
import Cuadrícula from '../../Utilidades/CuadriculaTarjetas';
import Sugerencias from '../../Utilidades/SugerenciasBusqueda';
import MapaMultiple from '../../Utilidades/ComponenteMapaMultiple';
import Citas from './Citas';

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
        
        return (
            <div className="container debajo-barra bloque-contenedor">

                <Row className="mb-4">
                    <Col xs={12}>
                        <MensajeAnimado texto={`Bienvenid@ de nuevo, ${this.props.sesion.usuario.NOM_USU}`} />
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col xs={9}>
                        <Row>
                            <Card className="mb-3">
                                <CardBody>
                                    <Row>
                                        <Col xs={2}>
                                            <div className="contenedor-img-circular">
                                                <img className="img-circular" src={this.props.sesion.usuario.IMG_PER} />
                                            </div>
                                        </Col>
                                        <Col xs={10}>
                                            <textarea cols="150" rows="2" className="form-control entrada-publicacion"
                                                style={{ resize: 'none' }} placeholder="Haz una publicación" />
                                        </Col>

                                    </Row>

                                    <Row className="mt-3">
                                        <Col xs={{ offset: 8, size: 4 }}>
                                            <Button color="primary" block>Publicar</Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            
                        </Row>

                        {this.props.sesion.usuario.publicaciones
                            ?
                            <Publicaciones publicaciones={this.props.sesion.usuario.publicaciones} />
                            :
                            null
                        }
                    </Col>



                    <Col xs={3}>
                        {this.props.sesion.usuario.contratos
                            ?
                            <Citas citas={this.props.sesion.usuario.contratos} />
                            
                            :
                            null}
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