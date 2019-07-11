import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';

const ModalConfirmacion = (props) => {
    return (
        <Modal isOpen={props.abierto} toggle={() => props.cambiarEstadoModal()}>
            <ModalHeader>{props.encabezado}</ModalHeader>
            <ModalBody>
                <p>{props.mensaje}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => props.confirmar()}>Sí</Button>{' '}
                <Button color="danger" onClick={() => props.negar()}>No</Button>
            </ModalFooter>
        </Modal>
    );

}

export default ModalConfirmacion;