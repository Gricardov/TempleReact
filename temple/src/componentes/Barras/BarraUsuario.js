import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { obtenerPerfil, cerrarSesion, obtenerInicioGalleta } from '../../redux/CreadorAcciones';
import './BarraUsuario.css';
import * as RUTAS from '../../compartido/rutas';
import Opciones from './OpcionesDesplegables';
import IconoNotificacion from '../Utilidades/IconoNotificacion';
import MenuOpcionesDeslizable from '../Utilidades/MenuOpcionesDeslizable';

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

            opcionesAbiertas: false,
            opcionesResponsivasAbiertas: false

        };

        this.permutarOpciones = this.permutarOpciones.bind(this);

    }

    permutarOpciones(opcion) {
        switch (opcion) {
            case 1:
                this.setState({

                    opcionesAbiertas: !this.state.opcionesAbiertas

                });
                break;
            case 2:
                this.setState({

                    opcionesResponsivasAbiertas: !this.state.opcionesResponsivasAbiertas

                });
                break;
        }
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
                <div className="barra-principal">
                    <NavLink to={this.props.usuario.ID_ROL == 1 ? RUTAS.INICIO_PROFESOR.ruta : RUTAS.INICIO_ALUMNO.ruta}>
                        <img className="logo-barra" src="recursos/imagenes/logo.png" />
                    </NavLink>
                    <div className="menu-usuario-barra">
                        <NavLink to={this.props.usuario.ID_ROL == 1 ? RUTAS.MI_PERFIL_PROFESOR.ruta : RUTAS.MI_PERFIL_ALUMNO.ruta}
                            onClick={() => { this.props.obtenerPerfil(this.props.usuario.COD_USU, this.props.usuario.ID_ROL) }}>
                            <div className="btn-usuario">
                                <img alt="img-usuario" src={this.props.usuario.IMG_PER}></img>
                                {' '}
                                {this.props.usuario.NOM_USU}
                                {' '}
                                {this.props.usuario.APA_USU}
                            </div>
                        </NavLink>
                        <div className="btn-notificacion"><i className="fa fa-bell-o"></i></div>
                        <div onClick={() => { this.permutarOpciones(1) }} className={this.state.opcionesAbiertas ? "btn-desplegable btn-barra-seleccionado" : "btn-desplegable"}>
                            <i className="fa fa-caret-down"></i>
                        </div>
                    </div>
                    <div className="menu-usuario-barra-responsivo" style={{ color: "white" }}>
                        <IconoNotificacion icono="fa fa-home" tamano="fa-2x" numero={1} ruta={this.props.usuario.ID_ROL == 1 ? RUTAS.INICIO_PROFESOR.ruta : RUTAS.INICIO_ALUMNO.ruta} />
                        <IconoNotificacion icono="fa fa-bell-o" tamano="fa-2x" numero={1} />
                        <IconoNotificacion icono="fa fa-envelope-o" tamano="fa-2x" numero={2} />
                        <IconoNotificacion icono="fa fa-user-circle" tamano="fa-2x" ruta={this.props.usuario.ID_ROL == 1 ? RUTAS.MI_PERFIL_PROFESOR.ruta : RUTAS.MI_PERFIL_ALUMNO.ruta} />
                    </div>
                    <Opciones abierto={this.state.opcionesAbiertas} opciones={[
                        { direccion: RUTAS.MIS_CONTRATOS_PROFESOR.ruta, descripcion: 'Gestionar clases' },
                        { direccion: RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion: 'Gestionar horarios' },
                        { direccion: RUTAS.MIS_CITAS_PROFESOR.ruta, descripcion: 'Gestionar cursos' },
                        { direccion: RUTAS.MIS_ALUMNOS_PROFESOR.ruta, descripcion: 'Gestionar alumnos' },
                        { direccion: RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion: 'Gestionar pagos' },
                        { direccion: RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion: 'Configuración' },
                        { direccion: RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion: 'Ayuda' },
                        { direccion: RUTAS.INICIAR_SESION_BIENVENIDA.ruta, accion: () => { this.props.cerrarSesion() }, descripcion: 'Salir' }
                    ]} />
                    <div className="btn-sanguche-barra" onClick={() => { this.permutarOpciones(2) }}>
                        <i className="fa fa-bars" />
                    </div>
                </div>
                <MenuOpcionesDeslizable abierto={this.state.opcionesResponsivasAbiertas} opciones={[
                    { direccion: RUTAS.MIS_CONTRATOS_PROFESOR.ruta, descripcion: 'Gestionar clases' },
                    { direccion: RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion: 'Gestionar horarios' },
                    { direccion: RUTAS.MIS_CITAS_PROFESOR.ruta, descripcion: 'Gestionar cursos' },
                    { direccion: RUTAS.MIS_ALUMNOS_PROFESOR.ruta, descripcion: 'Gestionar alumnos' },
                    { direccion: RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion: 'Gestionar pagos' },
                    { direccion: RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion: 'Configuración' },
                    { direccion: RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion: 'Ayuda' },
                    { direccion: RUTAS.INICIAR_SESION_BIENVENIDA.ruta, accion: () => { this.props.cerrarSesion() }, descripcion: 'Salir' }
                ]}
                cerrar={()=>{this.setState({opcionesResponsivasAbiertas:false})}} />
            </>
        );

    }


}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BarraUsuario));
