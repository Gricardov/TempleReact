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

            opcionesAbiertas: false

        };

        this.permutarOpciones = this.permutarOpciones.bind(this);

    }

    permutarOpciones() {

        this.setState({

            opcionesAbiertas: !this.state.opcionesAbiertas

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
                    <div onClick={()=>{this.permutarOpciones()}} className={this.state.opcionesAbiertas?"btn-desplegable btn-barra-seleccionado":"btn-desplegable"}>
                        <i className="fa fa-caret-down"></i>
                        </div>                    
                </div>
                <div className="menu-usuario-barra-responsivo" style={{color:"white"}}>
                    <div><i className="fa fa-bell-o fa-2x"></i></div>
                    <div><i className="fa fa-envelope-o fa-2x"></i></div>
                    <Link to={this.props.usuario.ID_ROL == 1 ? RUTAS.MI_PERFIL_PROFESOR.ruta : RUTAS.MI_PERFIL_ALUMNO.ruta}><div><i className="fa fa-user-circle fa-2x"></i></div></Link>
                </div>
                <Opciones abierto={this.state.opcionesAbiertas} opciones={[
                    {direccion:RUTAS.MIS_CONTRATOS_PROFESOR.ruta, descripcion:'Gestionar clases'},
                    {direccion:RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion:'Gestionar horarios'},
                    {direccion:RUTAS.MIS_CITAS_PROFESOR.ruta, descripcion:'Gestionar cursos'},
                    {direccion:RUTAS.MIS_ALUMNOS_PROFESOR.ruta, descripcion:'Gestionar alumnos'},
                    {direccion:RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion:'Gestionar pagos'},
                    {direccion:RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion:'Configuración'},
                    {direccion:RUTAS.MIS_HORARIOS_PROFESOR.ruta, descripcion:'Ayuda'},
                    {direccion:RUTAS.INICIAR_SESION_BIENVENIDA.ruta, accion:()=>{this.props.cerrarSesion()}, descripcion:'Salir'}
                ]}/>
                <div className="btn-sanguche-barra">
                    <i className="fa fa-bars" size="lg" />
                </div>
            </div>
        );

    }


}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BarraUsuario));
