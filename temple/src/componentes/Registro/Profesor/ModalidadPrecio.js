import React, { Component } from 'react'
import { render } from 'react-dom'
import { Input, Col, Row, FormGroup, Label } from 'reactstrap';

class ModalidadPrecio extends Component {

    constructor(props) {
        super(props);
        this.agregarModalidadPrecio = this.agregarModalidadPrecio.bind(this);


    }

    agregarModalidadPrecio(event) {
        let seleccionados = [];
        let seleccionado;
        for (let i = 0, len = event.target.options.length; i < len; i++) {
            seleccionado = event.target.options[i];

            if (seleccionado.selected) {
                seleccionados.push(seleccionado.value);
            }
        }

        this.props.agregarModalidadPrecio(seleccionados);
    }

    render() {

        const menu = this.props.modalidades.map((modalidad) => {
            // For every dish, I'm going to return a layout for the dish
            return (
                <>
                    <Col xs={6}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                {modalidad.NOM_MON}
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={5}>
                        <Input type="text" />
                    </Col>
                </>
            );

        });

        return (

            <>
                {menu}
            </>

        );
    }
}
export default ModalidadPrecio