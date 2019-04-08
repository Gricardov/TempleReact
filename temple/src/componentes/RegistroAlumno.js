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
            pasosTotales: 4,
        }
        this.siguientePaso = this.siguientePaso.bind(this);
        this.anteriorPaso = this.anteriorPaso.bind(this);
    }

    siguientePaso(valores, confirmar) {

        let paso = this.state.pasoActual;

        // Solo si el paso actual es menor que el último, que avance. (Empezamos de 1). Además, que guarde los valores
        if (paso < this.state.pasosTotales) {

            this.setState({
                pasoActual: paso + 1
            })

            confirmar(valores, this.state.pasoActual)

        } else {
            confirmar(null, null)

        }

    }

    anteriorPaso() {
        let paso = this.state.pasoActual;

        if (paso > 1) {
            this.setState({
                pasoActual: paso - 1,
                datosAprobados: null
            })
        }

    }

    render() {
        return (
            <div className="container debajo-barra bloque-contenedor">
                <Row>
                        <Encabezado pasoActual={this.state.pasoActual} />
                        <FormRegistro pasoActual={this.state.pasoActual} siguientePaso={this.siguientePaso} anteriorPaso={this.anteriorPaso}
                            datosAprobados={this.state.datosAprobados} />
                </Row>
            </div>
        )
    }

}

const Encabezado = ({ pasoActual }) => {
    const lista = (
        <Col xs={12}>
            <ol className="step-indicator">

                <li className={pasoActual == 1 ? "active" : ""}>
                    <div className="step">
                        <i className="fa fa-user-circle-o"></i>
                    </div>
                    <div className="caption hidden-xs hidden-sm">Paso <span>1</span>: <span>Datos personales</span></div></li>
                <li className={pasoActual == 2 ? "active" : ""}>
                    <div className="step"><i className="fa fa-th-list"></i></div>
                    <div className="caption hidden-xs hidden-sm">Paso <span>2</span>: <span>Preferencias</span></div></li>
                <li className={pasoActual == 3 ? "active" : ""}>
                    <div className="step"><i className="fa fa-map-marker"></i></div>
                    <div className="caption hidden-xs hidden-sm">Paso <span>3</span>: <span>Ubicación</span></div></li>
                <li className={pasoActual == 4 ? "active" : ""}>
                    <div className="step"><i className="fa fa-apple"></i></div>
                    <div className="caption hidden-xs hidden-sm">Paso <span>4</span>: <span>Perfil</span></div></li>
            </ol>
        </Col>);

    return (
        lista
    );

}
export default RegistroAlumno;