import React from 'react';
import {Row,Col} from 'reactstrap';

export const Cargando=(props)=>{

    return(
        <Row className="justify-content-center">
        <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
        <p>{props.mensaje}</p>
        </Row>
    )

}

export default Cargando;