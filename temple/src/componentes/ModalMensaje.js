import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';

const ModalMensaje = (props) => {
    if (props.error) {

        return (
            <Modal isOpen={true} toggle={() => props.eliminarError()}>
                <ModalHeader>Ten en cuenta!</ModalHeader>
                <ModalBody>
                    {props.error}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => props.eliminarError()}>Listo</Button>{' '}
                </ModalFooter>
            </Modal>
        );
    } else {
        return (null)
    }
}

export default ModalMensaje;