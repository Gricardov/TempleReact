import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Cursos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contenidoVisible: 1
        };
        this.mostrarContenido = this.mostrarContenido.bind(this);
    }

    mostrarContenido(id) {
        this.setState({ contenidoVisible: id });
    }

    render() {

        const cursos = this.props.cursos.map((curso) => {

            return (
                <button className="enlace-pestana-curso" style={curso.id==this.state.contenidoVisible?
                    {backgroundColor:"rgb(167, 167, 167)"}:{}}
                key={curso.id} onClick={() => { this.mostrarContenido(curso.id) }}>
                    {curso.nombre}
                </button>
            )
        });

        // Muestra el contenido seleccionado
        const contenidoCursoSeleccionado = this.props.cursos.filter((curso) => curso.id==this.state.contenidoVisible)[0];

        return (
            <div id="mainArea" className="quickFade">

            <Row className="mt-4">
                <Col xs={4} className="contenedor-pestanas-cursos" id="pestanasCursos">
                    {cursos}
                </Col>
                <Col xs={8} className="contenido-pestana-curso">
                    {contenidoCursoSeleccionado.descripcion}
                </Col>
            </Row>

            </div>
        )
    }

}

export default Cursos;