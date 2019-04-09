import React from 'react';
import { FormGroup, Col, Row, Button, ButtonGroup } from 'reactstrap';

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

export default Encabezado;