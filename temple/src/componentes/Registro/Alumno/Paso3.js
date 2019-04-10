import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button } from 'reactstrap';
import Botonera from '../BotoneraRegistro';
import Mapa from '../../Utilidades/ComponenteMapa';

class Paso3 extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            ...this.props.valores[2]
        })
        // Para actualizar coordenadas del mapa
        this.actualizarCoordenadas = this.actualizarCoordenadas.bind(this);
        // Para confirmar cambios
        this.confirmarCambios = this.confirmarCambios.bind(this);
    }

    actualizarCoordenadas = (coords) => {
        this.setState({
            latitud: coords.latitud,
            longitud: coords.longitud
        })
    }

    confirmarCambios = (values) => {
        if (this.state.latitud && this.state.longitud) {
            this.props.siguientePaso(this.state);
        } else {
            this.props.crearError('Ubicación no válida. Prueba a reiniciar la página o usa otro navegador')
        }
    }

    render() {
        return (
            <Col xs={12}>
                <Mapa posicion={{latitud: this.state.latitud, longitud: this.state.longitud}} actualizarCoordenadas={(coords) => this.actualizarCoordenadas(coords)} />
                <Botonera pasoActual={3} valores={this.props.valores} anteriorPaso={this.props.anteriorPaso} siguientePaso={this.confirmarCambios} />
            </Col>
        )
    }
}


export default Paso3;