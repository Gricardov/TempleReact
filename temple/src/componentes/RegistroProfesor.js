import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class RegistroProfesor extends Component {

    constructor(props) {

        super(props);
        this.state = {
            pasoActual: 1,
            pasosTotales: 4
        }
        this.siguientePaso = this.siguientePaso.bind(this);
        this.anteriorPaso = this.anteriorPaso.bind(this);
    }

    siguientePaso() {

        let paso = this.state.pasoActual;

        // Solo si el paso actual es menor que el último, que avance. (Empezamos de 1)
        if (paso < this.state.pasosTotales) {

            this.setState({
                pasoActual: paso + 1
            })

        }

    }

    anteriorPaso() {

        let paso = this.state.pasoActual;

        if (paso > 1) {
            this.setState({
                pasoActual: paso - 1
            })
        }

    }

    render() {
        return (
            <div className="container debajo-barra bloque-contenedor">
                <Row>
                    <Col xs={12}>
                        <Encabezado />
                    </Col>
                </Row>
            </div>
        )
    }

}

const Encabezado = () => {

    return (
        <ol className="step-indicator">
            <li className="active">
                <div className="step">
                    <i className="fa fa-user-circle-o"></i>
                </div>
                <div className="caption hidden-xs hidden-sm">Step <span>1</span>: <span>Personal</span></div></li>
            <li className=""><div className="step"><i className="fa fa-th-list"></i></div>
                <div className="caption hidden-xs hidden-sm">Step <span>2</span>: <span>Details</span></div></li>
            <li className=""><div className="step"><i className="fa fa-paper-plane"></i></div>
                <div className="caption hidden-xs hidden-sm">Step <span>3</span>: <span>Send</span></div></li>
        </ol>
    );

}
export default RegistroProfesor;