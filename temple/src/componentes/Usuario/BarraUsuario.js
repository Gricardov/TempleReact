import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import * as RUTAS from '../../compartido/rutas';

class BarraUsuario extends Component {

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

                                    <NavLink className="nav-link" to={RUTAS.MI_PERFIL.ruta}>
                                        <img className='img-barra-usuario mr-2' alt="img-barra-usuario" src={this.props.usuario.IMG_PER}/>
                                        {' '}
                                        {this.props.usuario.NOM_USU}
                                        {' '}
                                        {this.props.usuario.APA_USU}
                                    </NavLink>
                                </NavItem>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        <span className="fa fa-bell-o"/>
                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Notificación 1
                  </DropdownItem>
                                        <DropdownItem>
                                            Notificación 2
                  </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                    <span className="fa fa-envelope-o"/>

                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Mensaje 1
                  </DropdownItem>
                                        <DropdownItem>
                                            Mensaje 2
                  </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                    <span className="fa fa-caret-down"/>

                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Opción 1
                  </DropdownItem>
                                        <DropdownItem>
                                            Opción 2
                  </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Salir
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>


                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
            </>

        );

    }


}

export default BarraUsuario;