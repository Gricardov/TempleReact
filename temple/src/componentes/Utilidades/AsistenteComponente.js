import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


class Asistente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conversacion: [
                {
                    id: '2',
                    message: 'Hello',
                    trigger: '4',
                    
                }
            ]
        }
        this.responder = this.responder.bind(this);
    }

    responder(props) {
   

    }

    render() {

        return (
            <div className="panel panel-chat">
            </div>
        )
    }

}

export default Asistente;