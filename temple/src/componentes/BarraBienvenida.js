import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Barra extends Component {

    constructor(props) {

        super(props);
        this.state = {

            abierto: false

        };

        this.permutarColapso=this.permutarColapso.bind(this);

    }

    permutarColapso() {

        this.setState({

            abierto: !this.state.abierto

        });

    }

    render() {

        return (
            <>
            <Navbar dark expand="md">

                <div className="container">

                    <NavbarToggler onClick={this.permutarColapso}>

                    </NavbarToggler>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="recursos/imagenes/logo.png" height="30" width="100" alt="logo temple" />
                    </NavbarBrand>

                    <Collapse isOpen={this.state.abierto} navbar className="justify-content-end">

                        <Nav navbar>

                            <NavItem>
                                <NavLink className="nav-link" to="/bienvenida">
                                    Inicio
                                </NavLink>

                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/bienvenida">
                                    Descargar
                                </NavLink>

                            </NavItem>
                            <NavItem>
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