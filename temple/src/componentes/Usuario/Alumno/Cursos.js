import React, { Component } from 'react';
import { Row, Col, Input } from 'reactstrap';

class Cursos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idContenidoVisible: 1
        };
        this.mostrarContenido = this.mostrarContenido.bind(this);
    }

    mostrarContenido(id) {
        this.setState({ idContenidoVisible: id });
    }

    render() {

        const cursos = this.props.cursos.map((curso) => {

            return (
                <button className="enlace-pestana-curso" style={curso.id == this.state.idContenidoVisible ?
                    { backgroundColor: "rgb(167, 167, 167)" } : {}}
                    key={curso.id} onClick={() => { this.mostrarContenido(curso.id) }}>
                    {curso.nombre}
                </button>
            )
        });

        // Muestra el contenido seleccionado
        const cursoSeleccionado = this.props.cursos.filter((curso) => curso.id == this.state.idContenidoVisible)[0];

        return (
            <div id="mainArea" className="quickFade">

                <Row className="mt-4">
                    <Col xs={4} className="contenedor-pestanas-cursos" id="pestanasCursos">
                        {cursos}
                    </Col>
                    <Col xs={8} className="contenido-pestana-curso">
                        <Row className="mt-3">
                            <Col xs={12} className="sectionTitle">
                                <h3 className="text-center">{cursoSeleccionado.nombre}</h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1>Horas de experiencia</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <p>4</p>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1>Descripción</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <p>{cursoSeleccionado.descripcion}</p>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1>Nivel</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <ul>
                                    <li>Secundaria</li>
                                    <li>Universtario</li>
                                </ul>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1>Temas</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <ul>
                                    <li>Teoría de exponentes</li>
                                    <li>Derivadas</li>
                                    <li>Integrales</li>
                                </ul>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1>Modalidades</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <Input type="select">
                                    <option>Personalizado (mi lugar)</option>
                                    <option>Personalizado (local del profesor)</option>
                                    <option>Grupal (mi lugar)</option>
                                    <option>Grupal (local del profesor)</option>
                                </Input>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1>Precio por hora</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <p>S/. 12.50</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>



            </div>
        )
    }

}

export default Cursos;