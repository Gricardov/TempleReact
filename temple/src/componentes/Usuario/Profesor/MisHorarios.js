import React, { Component } from 'react';
import { Row, Col, Input, Card, CardHeader, CardBody, TabContent, TabPane, Nav, NavItem, NavLink, Button, Modal, ModalBody } from 'reactstrap';
import TarjetaCita from '../../Utilidades/TarjetaCita';
import Mapa from '../../Utilidades/ComponenteMapa';
import classnames from 'classnames';
import Horario from './HorarioGestor';

let moment = require('moment');

class MisHorarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pestanaSeleccionada: '1',
            modalAbierto: false,
            posicion: {}
        };
        this.seleccionarPestana = this.seleccionarPestana.bind(this);
        this.mostrarMapa = this.mostrarMapa.bind(this);

    }
    seleccionarPestana(pestana) {
        if (this.state.pestanaSeleccionada !== pestana) {
            this.setState({
                pestanaSeleccionada: pestana
            });
        }
    }
    mostrarMapa(posicion) {
        this.setState({ modalAbierto: true, posicion: posicion })
    }
    render() {
        return (
            <div className="row debajo-barra justify-content-center">
                <div className="contenedor-detalles">
                    <h3 className="categories_tittle me_tittle">Mis citas</h3>
                    <Horario eventos={this.props.horarios}
                        establecerHorario={() => { }}
                        seleccionable={true} />
                </div>
            </div>
        )
    }

}

export default MisHorarios;