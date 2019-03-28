import React from 'react';
import { FormGroup, Col, Row, Button, ButtonGroup } from 'reactstrap';

function Botonera(props) {

    return (<>
        <div className="d-none d-md-block">
            <FormGroup row>
                <Col md={{ size: 3, offset: 6 }}>
                    <ButtonGroup>
                        <Button color="primary" onClick={() => { props.anteriorPaso() }}><span className="fa fa-angle-left"></span> Anterior</Button>
                        <Button type="submit" color="primary">Siguiente <span className="fa fa-angle-right"></span></Button>
                    </ButtonGroup>
                </Col>
                <Col md={{ size: 3 }}>
                    <ButtonGroup>
                        <Button color="info">Presentar <span className="fa fa-heart"></span></Button>
                        <Button color="danger">Cancelar <span className="fa fa-close"></span></Button>

                    </ButtonGroup>
                </Col>
            </FormGroup>
        </div>
        <div className="d-md-none">
            <FormGroup row>
                <Col xs={6}>
                    <ButtonGroup>
                        <Button color="primary"><span className="fa fa-angle-left"></span></Button>
                        <Button type="submit" color="primary"><span className="fa fa-angle-right"></span></Button>
                    </ButtonGroup>
                </Col>
                <Col xs={6}>
                    <ButtonGroup>
                        <Button color="info">Presentar</Button>
                        <Button color="danger"><span className="fa fa-close"></span></Button>
                    </ButtonGroup>
                </Col>
            </FormGroup>
        </div>
    </>)

}

export default Botonera;