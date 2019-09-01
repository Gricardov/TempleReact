import React, { Component } from 'react';
import { Row, Col, Input, Card, CardHeader, CardBody, TabContent, TabPane, Nav, NavItem, NavLink, Button, Modal, ModalBody } from 'reactstrap';
import TarjetaCita from '../../Utilidades/TarjetaCita';
import Mapa from '../../Utilidades/ComponenteMapa';
import classnames from 'classnames';
import Horario from './Horario';
import { withRouter } from 'react-router-dom';
import * as RUTAS from '../../../compartido/rutas';

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
                        actualizarHorarios={(eventos) => { 
                            this.props.actualizarHorarios(this.props.usuario.COD_USU, eventos)
                            this.props.obtenerPerfil(this.props.usuario.COD_USU, 1);
                            this.props.history.push(RUTAS.MI_PERFIL_PROFESOR.ruta);
                        }}
                    />

                </div>
            </div>
        )
    }

}

export default withRouter(MisHorarios);