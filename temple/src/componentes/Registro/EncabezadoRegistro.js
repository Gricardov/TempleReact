import React from 'react';
import { FormGroup, Col, Row, Button, ButtonGroup } from 'reactstrap';

const Encabezado = ({ pasoActual }) => {
    const lista = (
        <Row>
            <Col xs={12}>
                <ol className="step-indicator">

                    <li className={pasoActual == 1 ? "active" : ""}>
                        <div className="step">
                            <i className="fa fa-user-circle"></i>
                        </div>
                        <div className="caption hidden-xs hidden-sm">Paso <span>1</span>: <span>Datos personales</span></div></li>
                    <li className={pasoActual == 2 ? "active" : ""}>
                        <div className="step"><i className="fa fa-th-list"></i></div>
                        <div className="caption hidden-xs hidden-sm">Paso <span>2</span>: <span>Preferencias</span></div></li>
                    <li className={pasoActual == 3 ? "active" : ""}>
                        <div className="step"><i className="fa fa-map-marker"></i></div>
                        <div className="caption hidden-xs hidden-sm">Paso <span>3</span>: <span>Ubicación</span></div></li>
                    <li className={pasoActual == 4 ? "active" : ""}>
                        <div className="step"><i className="fa fa-id-card"></i></div>
                        <div className="caption hidden-xs hidden-sm">Paso <span>4</span>: <span>Perfil</span></div></li>
                </ol>
            </Col>
        </Row>);

    return (
        lista
    );

}

export default Encabezado;