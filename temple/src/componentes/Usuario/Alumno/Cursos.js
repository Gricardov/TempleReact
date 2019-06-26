import React, { Component } from 'react';
import { Row, Col, Input } from 'reactstrap';

class Cursos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idContenidoVisible: 1,
            idModalidadSeleccionada: -1
        };
        this.mostrarContenido = this.mostrarContenido.bind(this);
    }

    mostrarContenido(idCur) {
        this.setState({ idContenidoVisible: idCur });
    }

    render() {
        // Esto es el objeto preferencias, aquí llamado cursos
        const cursos = this.props.cursos.map((curso) => {

            return (
                <button className="enlace-pestana-curso" style={curso.idCur == this.state.idContenidoVisible ?
                    { backgroundColor: "rgb(167, 167, 167)" } : {}}
                    key={curso.idCur} onClick={() => { this.mostrarContenido(curso.idCur) }}>
                    {curso.nomCur}
                </button>
            )
        });

        // Muestra el contenido seleccionado
        const cursoSeleccionado = this.props.cursos.filter((curso) => curso.idCur == this.state.idContenidoVisible)[0];

        // Obtengo los niveles
        const niveles = cursoSeleccionado.niveles.map((e, i) => {
            return (
                <li>{e.nomNiv}</li>

            )
        })

        const modalidades = {};
        // Obtengo las modalidades
        if (cursoSeleccionado.modalidades) {

            const modalidades = cursoSeleccionado.modalidades.map((e, i) => {
                return (
                    <option value={e.idMod}>{e.nomMod}</option>

                )
            })
        }
        // Obtengo la modalidad seleccionada para obtener el precio por hora
        const modalidadSeleccionada = cursoSeleccionado.modalidades.filter((modalidad) => modalidad.idMod == this.state.idModalidadSeleccionada)[0]
        let precioHora = "Seleccione una modalidad"
        if (modalidadSeleccionada) {
            precioHora = "S/. " + modalidadSeleccionada.precioHora;
        }

        return (
            <div id="mainArea" className="quickFade">

                <Row className="mt-4">
                    <Col xs={4} className="contenedor-pestanas-cursos" id="pestanasCursos">
                        {cursos}
                    </Col>
                    <Col xs={8} className="contenido-pestana-curso">
                        <Row className="mt-3">
                            <Col xs={12} className="sectionTitle">
                                <h3 className="text-center">{cursoSeleccionado.nomCur}</h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1 className="titulo-curso">Horas de experiencia</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <p>{cursoSeleccionado.horExp}</p>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1 className="titulo-curso">Descripción</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <p>{cursoSeleccionado.desCur}</p>
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
                                <p>{cursoSeleccionado.silabo}</p>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col xs={5} className="sectionTitle">
                                <h1 className="titulo-curso">Modalidades</h1>
                            </Col>

                            <Col xs={7} className="sectionContent">
                                <Input type="select"
                                    onChange={(e) => { this.setState({ idModalidadSeleccionada: e.target.value }) }}>
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