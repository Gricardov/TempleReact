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

        let consulta = evento.target.value.toString().trimLeft();

        // Si hay ya un curso seleccionado, que verifique si la consulta es igual o difiere
        if (this.state.cursoSeleccionado) {
            if (consulta !== this.state.cursoSeleccionado.NOM_CUR) {
                this.setState({
                    cursoSeleccionado: null
                })
            }

        }

        // Pase lo que pase, actualizo la consulta
        this.setState({
            consulta: consulta
        }, () => {
            // La profesora más guapa, inteligente y admirable del instituto
            // A professora mais velha, inteligente e admiravle do instituto <3
            // Obtengo las sugerencias de cursos
            this.props.consultaCursosPorNombre(this.state.consulta);

            // Después, busco por id o por nombre de curso
            if (this.state.cursoSeleccionado) {
                this.props.consultaProfesoresPorIdCurso(this.state.cursoSeleccionado.ID_CUR, 1);
            } else {
                this.props.consultaProfesoresPorNombreCurso(this.state.consulta, 1);

            }

        })
    }

    render() {

        const preferencias = this.props.sesion.usuario.preferencias.map((e, i) => {
            return (
                <Row className="mb-2">
                    <Col xs={12}>
                        <MensajeAnimado texto={"Curso: " + e.nomCur + " Nivel: " + e.nomNiv} />
                    </Col>

                </Row>
            )
        })

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

               <Cuadrícula columnas={4}
                    resultados={this.props.profesoresBusqueda.profesores}
                    cargandoResultados={this.props.profesoresBusqueda.estaCargando}
                    errorResultados={this.props.profesoresBusqueda.mensError}
                    consulta={this.state.consulta} />
                
                <Row className="mb-2">
                    <Col xs={12}>
                        <h4 className="text-muted">Recomendados para ti: </h4>
                    </Col>
                </Row>
                {preferencias}

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