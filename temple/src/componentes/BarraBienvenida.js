import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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


                        <NavbarBrand className="mr-auto" href="/">
                            <img src="recursos/imagenes/logo.png" height="30" width="100" alt="logo temple" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.permutarColapso}>

                        </NavbarToggler>
                        <Collapse isOpen={this.state.abierto} navbar className="row justify-content-end">

                            <Nav navbar>

                                <NavItem className="ml-2">
                                    <NavLink className="nav-link" to="/bienvenida">
                                        Inicio
                                </NavLink>

                                </NavItem>
                                <NavItem className="ml-2">
                                    <NavLink className="nav-link" to="/bienvenida">
                                        Descargar
                                </NavLink>

                                </NavItem>
                                <NavItem className="ml-2">
                                    <NavLink className="nav-link" to="/bienvenida">
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