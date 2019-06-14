import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cerrarSesion, consultaCursosPorNombre, consultaProfesoresPorIdCurso, consultaProfesoresPorNombreCurso } from '../../../redux/CreadorAcciones';
import { Input } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import Carrusel from '../../Utilidades/CarruselTarjetas';
import Cuadrícula from '../../Utilidades/CuadriculaTarjetas';
import Sugerencias from '../../Utilidades/SugerenciasBusqueda';
import { URLBase } from '../../../compartido/URLBase';
import * as RUTAS from '../../../compartido/rutas';

const mapStateToProps = (state) => {

    return {
        sesion: state.sesion,
        cursos: state.cursos,
        profesoresBusqueda: state.profesoresBusqueda
    }

}

const mapDispatchToProps = (dispatch) => ({

    cerrarSesion: () => dispatch(cerrarSesion()),
    consultaCursosPorNombre: (nomCur) => dispatch(consultaCursosPorNombre(nomCur)),
    consultaProfesoresPorIdCurso: (idCur, idNiv) => dispatch(consultaProfesoresPorIdCurso(idCur, idNiv)),
    consultaProfesoresPorNombreCurso: (nomCur, idNiv) => dispatch(consultaProfesoresPorNombreCurso(nomCur, idNiv))
})

class InicioAlumno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipoVista: 1,
            consulta: '',
            cursoSeleccionado: null
        };

        this.manejarCambio = this.manejarCambio.bind(this);

    }

    manejarCambio(evento) {

        let cursoSeleccionado = this.state.cursoSeleccionado;

        if (cursoSeleccionado) {
            if (evento.target.value.toString() !== cursoSeleccionado.NOM_CUR) {
                this.setState({
                    cursoSeleccionado: null
                })
            }

        }
        // Actualizo la consulta
        this.setState({
            consulta: evento.target.value.toString()
        }, () => {

            // Obtengo las sugerencias de cursos
            this.props.consultaCursosPorNombre(this.state.consulta);

            // Después, busco por id o por nombre de curso
            if (cursoSeleccionado) {
                this.props.consultaProfesoresPorIdCurso(this.state.cursoSeleccionado.ID_CUR, 1);
            } else {
                this.props.consultaProfesoresPorNombreCurso(this.state.consulta);

            }

        })
    }

    render() {
        return (
            <div className="container debajo-barra bloque-contenedor">

                <Row className="mb-4">
                    <Col xs={12}>

                        <Row className="mb-4">
                            <Col xs={12}>
                                <MensajeAnimado texto={`Hola ${this.props.sesion.usuario.NOM_USU}! ¿Qué deseas aprender hoy?`} />
                            </Col>
                        </Row>

                        <Input
                            type="text"
                            className="form-control"
                            placeholder="Por ejemplo: Java, SQL Server, MySQL"
                            autoComplete="off"
                            value={this.state.consulta}
                            onChange={(e) => this.manejarCambio(e)}
                        />


                        {
                            this.state.cursoSeleccionado
                                ?
                                null
                                :
                                <Sugerencias resultados={this.props.cursos.cursos}
                                    modificarPreferencia={(curso) => {
                                        this.setState({ cursoSeleccionado: curso, consulta: curso.texto })
                                    }} />
                        }

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

                <Row className="mb-4">
                    <Col xs={12}>
                        <MensajeAnimado texto={'Resultado búsqueda: '} />
                    </Col>
                </Row>

                <Cuadrícula columnas={4}
                    resultados={this.props.profesoresBusqueda.profesores}
                    cargandoResultados={this.props.profesoresBusqueda.estaCargando}
                    errorResultados={this.props.profesoresBusqueda.mensError} />

                <Row className="mb-4">
                    <Col xs={12}>
                        <MensajeAnimado texto={'Recomendados para ti - Nivel secundaria: '} />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h4 className="text-muted">Biología</h4>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Carrusel />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h4 className="text-muted">Matemáticas</h4>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InicioAlumno));