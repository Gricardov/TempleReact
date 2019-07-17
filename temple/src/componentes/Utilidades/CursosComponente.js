import React, { Component } from 'react';
import { Row, Col, Input } from 'reactstrap';

class Cursos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idContenidoVisible: this.props.cursos[0] ? this.props.cursos[0].idCur : null,
            idModalidadSeleccionada: -1
        };
        this.mostrarContenido = this.mostrarContenido.bind(this);
    }

    mostrarContenido(idCur) {
        this.setState({ idContenidoVisible: idCur });
    }

    render() {
        // Esto es el objeto preferencias, aquí llamado cursos
        let cursos = [];

        // Esto se encarga de las pestañas
        if (this.props.cursos) {
            cursos = this.props.cursos.map((curso, i) => {

                return (
                    <button className="enlace-pestana-curso" style={curso.idCur == this.state.idContenidoVisible ?
                        { backgroundColor: "rgb(167, 167, 167)" } : {}}
                        key={curso.idCur} onClick={() => {

                            if (this.props.establecerIdCurso) {

                                this.props.establecerIdCurso(curso.idCur);
                            }

                            this.mostrarContenido(curso.idCur);
                        }}>
                        {curso.nomCur}
                    </button>
                )
            });
        }

        // Muestra el contenido seleccionado de manera predeterminada
        const cursoSeleccionado = this.props.cursos.filter(curso => curso.idCur == this.state.idContenidoVisible)[0];
        let niveles = [];
        let modalidades = [];

        let precioHora = "";
        let modalidadSeleccionada = {};

        if (cursoSeleccionado) {

            // Obtengo los niveles
            niveles = cursoSeleccionado.niveles.map((e, i) => {
                return (
                    <li key={i}>{e.nomNiv}</li>

                )
            })

            modalidades = cursoSeleccionado.modalidades.map((e, i) => {
                return (
                    <option key={i} value={e.idMod}>{e.nomMod}</option>

                )
            })

            // Obtengo la modalidad seleccionada para obtener el precio por hora
            modalidadSeleccionada = cursoSeleccionado.modalidades.filter((modalidad) => modalidad.idMod == this.state.idModalidadSeleccionada)[0]
            precioHora = "Seleccione una modalidad"
            if (modalidadSeleccionada) {
                precioHora = "S/. " + modalidadSeleccionada.precioHora;
            }
        }

        return (
            <div id="mainArea" className="quickFade" >

                <Row className="mt-4">
                    <Col xs={4} className="contenedor-pestanas-cursos" id="pestanasCursos">
                        {cursos}
                    </Col>
                    <Col xs={8} className="contenido-pestana-curso">
                        <Row className="mt-3">
                            <Col xs={12} className="sectionTitle">
                                {cursoSeleccionado
                                    ?
                                    <h3 className="text-center">{cursoSeleccionado.nomCur}</h3>
                                    :
                                    null
                                }
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1 className="titulo-curso">Horas de experiencia</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                {cursoSeleccionado
                                    ?
                                    <p>{cursoSeleccionado.horExp}</p>
                                    :
                                    null
                                }
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1 className="titulo-curso">Descripción</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                {
                                    cursoSeleccionado
                                        ?
                                        <p>{cursoSeleccionado.desCur}</p>
                                        :
                                        null
                                }
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1 className="titulo-curso">Niveles</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <ul>
                                    {niveles}
                                </ul>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1 className="titulo-curso">Temas</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                {
                                    cursoSeleccionado
                                        ?
                                        <p>{cursoSeleccionado.silabo}</p>
                                        :
                                        null
                                }
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1 className="titulo-curso">Modalidades</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <Input type="select"
                                    onChange={(e) => {

                                        if (this.props.establecerIdModalidad) {
                                            this.props.establecerIdModalidad(e.target.value)
                                        }
                                        this.setState({ idModalidadSeleccionada: e.target.value })
                                    }}>
                                    {modalidades}
                                </Input>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1 className="titulo-curso">Precio por hora</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <p>{precioHora}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>



            </div>
        )
    }

}

export default Cursos;