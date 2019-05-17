import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';

const ModalEntradaMensaje = (props) => {
        return (
            <Modal isOpen={props.abierto} toggle={() => props.cambiarEstadoModal()}>
                <ModalHeader>{props.encabezado}</ModalHeader>
                <ModalBody>
                    <textarea cols="5" rows="10" className="form-control" innerRef={(input)=>this.mensaje=input}></textarea>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => props.enviarMensaje(this.mensaje.value)}>Listo</Button>{' '}
                </ModalFooter>
            </Modal>
        );
    
}

export default ModalEntradaMensaje;