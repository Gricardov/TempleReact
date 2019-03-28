import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import FormRegistro from './FormRegistroAlumno';

class RegistroAlumno extends Component {
// Este componente maneja los pasos. El formulario se valida a sí mismo y envía la instrucción para cambiar de página.
// Luego, si se cambia de página, se envia esa información al encabezado y la botonera para que se actualicen.

    constructor(props) {

        super(props);
        this.state = {
            pasoActual: 1,
            pasosTotales: 4
        }
        this.siguientePaso = this.siguientePaso.bind(this);
        this.anteriorPaso = this.anteriorPaso.bind(this);
    }

    siguientePaso(valores) {

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
                        <Encabezado pasoActual={this.state.pasoActual} />
                        <FormRegistro pasoActual={this.state.pasoActual} siguientePaso={this.siguientePaso} anteriorPaso={this.anteriorPaso} />
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
                <div className="caption hidden-xs hidden-sm">Paso <span>1</span>: <span>Datos personales</span></div></li>
            <li className=""><div className="step"><i className="fa fa-th-list"></i></div>
                <div className="caption hidden-xs hidden-sm">Paso <span>2</span>: <span>Preferencias</span></div></li>
            <li className=""><div className="step"><i className="fa fa-paper-plane"></i></div>
                <div className="caption hidden-xs hidden-sm">Paso <span>3</span>: <span>Perfil</span></div></li>
        </ol>
    );

}
export default RegistroAlumno;