import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import * as RUTAS from '../../compartido/rutas';

class Barra extends Component {

    constructor(props) {

        super(props);
        this.state = {

            abierto: false

        };

        this.permutarColapso = this.permutarColapso.bind(this);

    }

    permutarColapso() {

        this.setState({

            abierto: !this.state.abierto

        });

    }

    render() {

        return (
            <>
                <Navbar dark expand="md" className="fixed-top sombra-barra">

                    <div className="container">

                        <NavbarBrand className="mr-auto" tag={Link} to={RUTAS.INICIO_BIENVENIDA.ruta}>
                            <img src="recursos/imagenes/logo.png" height="30" width="100" alt="logo temple" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.permutarColapso} />

                        <Collapse isOpen={this.state.abierto} navbar className="row justify-content-end">

                            <Nav navbar>

                                <NavItem className="ml-2">

                                    <NavLink className="nav-link" to={RUTAS.INICIO_BIENVENIDA.ruta}>
                                        Inicio
                                </NavLink>

                                </NavItem>
                                <NavItem className="ml-2">
                                    <NavLink className="nav-link" to={RUTAS.DESCARGAR_BIENVENIDA.ruta}>
                                        Descargar
                                </NavLink>

                                </NavItem>
                                <NavItem className="ml-2">
                                    <NavLink className="nav-link" to={RUTAS.INICIAR_SESION_BIENVENIDA.ruta}>
                                        Iniciar sesión
                                </NavLink>

                                </NavItem>
                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
            </>

        );

    }


}

export default Barra;