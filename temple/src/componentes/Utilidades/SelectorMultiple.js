import React, { Component } from 'react'
import { render } from 'react-dom'
import { Input, Col, Row } from 'reactstrap';

import Opciones from '../Utilidades/OpcionesCombo';

class SelectorMultiple extends Component {

    constructor(props) {
        super(props);
        this.agregarSeleccion = this.agregarSeleccion.bind(this);


    }

    agregarSeleccion(event) {
        let seleccionados=[];
        let seleccionado;
        for (let i = 0, len = event.target.options.length; i < len; i++) {
            seleccionado = event.target.options[i];
    
            if (seleccionado.selected) {
                seleccionados.push(seleccionado.value);
            }
        }

        this.props.modificarPreferencia(seleccionados);
    }

    render() {

        return (

            <Input onChange={(event)=>this.agregarSeleccion(event)}
                type="select"
                component="select"
                multiple>
                <Opciones opciones={this.props.opciones} seleccionados={this.props.seleccionados} />
            </Input>

        );
    }
}
export default SelectorMultiple