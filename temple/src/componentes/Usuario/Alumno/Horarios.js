import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Horario from '../../Utilidades/HorarioComponente';

class Horarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
 
    render() {
        return (
            <div id="mainArea" className="quickFade">
                <Row className="mt-4">
                    <Col xs={12}>
                        <Horario eventos={this.props.eventos} establecerHorario={this.props.establecerHorario}/>
                    </Col>
                </Row>
            </div>
        )

        

    }

}

export default Horarios;