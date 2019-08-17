import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { obtenerPerfil, cerrarSesion, obtenerInicioGalleta } from '../../redux/CreadorAcciones';

import * as RUTAS from '../../compartido/rutas';

const mapStateToProps = (state) => {

    return {

    }

}

const mapDispatchToProps = (dispatch) => ({

    obtenerPerfil: (codUsu, tipoUsu) => dispatch(obtenerPerfil(codUsu, tipoUsu)),
    cerrarSesion: () => dispatch(cerrarSesion()),
    obtenerInicioGalleta: () => dispatch(obtenerInicioGalleta())

})

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

    componentDidMount() {
        // Si la sesión se ha iniciado correctamente, que pregunte qué tipo de usuario es
        if (this.props.usuario) {

            if (this.props.usuario.ID_ROL == 1) {
                this.props.history.push(RUTAS.INICIO_PROFESOR.ruta);

            } else {
                this.props.history.push(RUTAS.INICIO_ALUMNO.ruta);

            }

        }
    }

    render() {
        return (
            <>
                <Navbar dark expand="md" className="fixed-top sombra-barra">

                    <div className="container">

                        <NavbarBrand className="mr-auto"
                            tag={Link}
                            to={this.props.usuario.ID_ROL == 1 ? RUTAS.INICIO_PROFESOR.ruta : RUTAS.INICIO_ALUMNO.ruta}
                        >
                            <img src="recursos/imagenes/logo.png" height="30" width="100" alt="logo temple" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.permutarColapso} />

                        <Collapse isOpen={this.state.abierto} navbar className="row justify-content-end">

                            <Nav navbar>

                                <NavItem className="ml-2">

                                    <NavLink className="nav-link" to={this.props.usuario.ID_ROL == 1 ? RUTAS.MI_PERFIL_PROFESOR.ruta : RUTAS.MI_PERFIL_ALUMNO.ruta}
                                        onClick={() => { this.props.obtenerPerfil(this.props.usuario.COD_USU, this.props.usuario.ID_ROL) }}>
                                        <img className='img-barra-usuario mr-2' alt="img-barra-usuario" src={this.props.usuario.IMG_PER} />
                                        {' '}
                                        {this.props.usuario.NOM_USU}
                                        {' '}
                                        {this.props.usuario.APA_USU}
                                    </NavLink>
                                </NavItem>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        <span className="fa fa-bell-o" />
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
                                        <span className="fa fa-caret-down" />

                                    </DropdownToggle>



                                    <DropdownMenu right>

                                        {
                                            this.props.usuario.ID_ROL == 1
                                                ?
                                                <>
                                                <DropdownItem onClick={() => {}}>
                                                        Gestionar clases
                                                    </DropdownItem>
                                                    <DropdownItem onClick={() => {
                                                        this.props.obtenerPerfil(this.props.usuario.COD_USU, this.props.usuario.ID_ROL)
                                                        this.props.history.push(RUTAS.MIS_HORARIOS_PROFESOR.ruta);

                                                    }}>
                                                        Gestionar horarios
                                                    </DropdownItem>
                                                    <DropdownItem onClick={() => {
                                                        this.props.obtenerPerfil(this.props.usuario.COD_USU, this.props.usuario.ID_ROL)
                                                        this.props.history.push(RUTAS.MIS_CITAS_PROFESOR.ruta);
                                                    }}>
                                                        Gestionar cursos
                                                    </DropdownItem>
                                                    <DropdownItem onClick={() => {}}>
                                                        Gestionar alumnos
                                                    </DropdownItem>
                                                    <DropdownItem onClick={() => {}}>
                                                        Gestionar pagos
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem onClick={() => {}}>
                                                        Configuración
                                                    </DropdownItem>
                                                    <DropdownItem onClick={() => {}}>
                                                        Ayuda
                                                    </DropdownItem>
                                                </>
                                                :
                                                <DropdownItem onClick={() => {
                                                    this.props.obtenerPerfil(this.props.usuario.COD_USU, this.props.usuario.ID_ROL)
                                                    this.props.history.push(RUTAS.MIS_CITAS_ALUMNO.ruta);
                                                }}>
                                                    Mis citas
                                        </DropdownItem>
                                        }

                                        <DropdownItem divider />
                                        <DropdownItem onClick={() => {
                                            this.props.cerrarSesion()
                                            this.props.history.push(RUTAS.INICIAR_SESION_BIENVENIDA.ruta);
                                        }}>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BarraUsuario));
