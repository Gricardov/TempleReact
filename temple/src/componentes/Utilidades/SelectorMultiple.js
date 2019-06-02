import React, { Component } from 'react'
import { render } from 'react-dom'
import { Input, Col, Row } from 'reactstrap';

import Opciones from '../Utilidades/OpcionesCombo';

class SelectorMultiple extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }

    }

    componentDidMount() {

        // Si el mapa solo muestra coordenadas, ya no solicita ubicación

    }

    actualizarPosicion(event) {

        this.setState({

        })
        this.agregarSeleccion = this.agregarSeleccion.bind(this);
    }

    agregarSeleccion(event) {

    }

    render() {


        return (

            <Input
                type="select"
                component="select"
                multiple >
                <Opciones opciones={this.props.opciones} seleccionado={1} />
            </Input>

        );
    }
}
export default SelectorMultiple