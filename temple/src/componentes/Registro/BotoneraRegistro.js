import React from 'react';
import { FormGroup, Col, Row, Button, ButtonGroup } from 'reactstrap';

function Botonera(props) {

    return (

        <Row className="mt-3 justify-content-end">
            <ButtonGroup>

                {
                    props.pasoActual > 1
                        ?
                        <>
                            <Button className="d-md-none" color="primary" onClick={() => { props.anteriorPaso() }}><span className="fa fa-angle-left"></span></Button>
                            <Button className="d-none d-md-block" color="primary" onClick={() => { props.anteriorPaso() }}><span className="fa fa-angle-left"></span> Anterior</Button>
                        </>
                        :
                        null
                }

                {
                    props.pasoActual < props.valores.length
                        ?
                        props.siguientePaso
                            ?
                            <>
                                <Button className="d-md-none" onClick={() => { props.siguientePaso() }} color="primary" ><span className="fa fa-angle-right"></span></Button>

                                <Button className="d-none d-md-block" onClick={() => props.siguientePaso()} color="primary">Siguiente <span className="fa fa-angle-right"></span></Button>
                            </>
                            :
                            <>
                                <Button className="d-md-none" type="submit" color="primary"><span className="fa fa-angle-right"></span></Button>

                                <Button className="d-none d-md-block" type="submit" color="primary">Siguiente <span className="fa fa-angle-right"></span></Button>
                            </>
                        :
                        null
                }
                {
                    props.pasoActual == props.valores.length
                        ?
                        props.siguientePaso
                            ?
                            <Button onClick={() => props.siguientePaso()} color="info">Presentar </Button>
                            :
                            <Button type="submit" color="primary">Presentar</Button>

                        :
                        null
                }
            </ButtonGroup>

        </Row>

    )

}

export default Botonera;