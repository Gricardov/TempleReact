import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import CargandoComponente from './CargandoComponente';

class ModalMensaje extends Component {

    constructor(props){
        super(props);
       

    }
    
    render(){

        return (
            <Modal isOpen={this.props.modalAbierto} toggle={() => console.log('toggle modal')}>
                <ModalHeader>Procesando</ModalHeader>
                <ModalBody>
                    {
                        this.props.estaCargando
                        ?
                            <CargandoComponente mensaje="Cargando..."/>
                        :
                            <p>{this.props.mensaje}</p>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.props.cerrarModal()}>Listo</Button>{' '}
                </ModalFooter>
            </Modal>
        );
        }
}

export default ModalMensaje;