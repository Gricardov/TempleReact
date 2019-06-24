import React, { Component } from 'react';
import Barra from '../Bienvenida/BarraBienvenida';
import BarraUsuario from '../Usuario/BarraUsuario';
import Pie from '../Bienvenida/PieBienvenida';
//
import Inicio from '../Bienvenida/InicioBienvenida';
import Descargar from '../Bienvenida/DescargarBienvenida';
import Contacto from '../Bienvenida/ContactoBienvenida';
import SobreNosotros from '../Bienvenida/SobreNosotrosBienvenida';
import Login from '../Bienvenida/IniciarSesionBienvenida';
import RegistroAlumno from '../Registro/Alumno/RegistroAlumno';
import RegistroProfesor from '../Registro/Profesor/RegistroProfesor';
import InicioAlumno from '../Usuario/Alumno/InicioAlumno';
import PerfilProfesorAlumno from '../Usuario/Alumno/PerfilProfesorAlumno';
import MiPerfil from '../Usuario/Alumno/MiPerfil';
import Asistente from '../Utilidades/AsistenteComponente';
import SwitchDeslizador from '../Utilidades/ComponenteSwitchDeslizador';
import CubiertaMensaje from '../Utilidades/CubiertaMensaje';
import * as RUTAS from '../../compartido/rutas';

import { Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import { obtenerLideres, iniciarSesion } from '../../redux/CreadorAcciones';

const mapStateToProps = (state) => {

    return {
        sesion: state.sesion,
        lideres: state.lideres,
        perfilProfesor: state.perfilProfesor
    }

}

const mapDispatchToProps = (dispatch) => ({
    iniciarSesion: (usuario, contrasena) => dispatch(iniciarSesion(usuario, contrasena)),
    obtenerLideres: () => dispatch(obtenerLideres()),
    reiniciarFormContacto: () => dispatch(actions.reset('formContacto'))
})

class Principal extends Component {

    componentDidMount() {

        this.props.obtenerLideres();

    }

    render() {

        return (
            <>

                {
                    this.props.sesion.usuario
                        ?
                        <>
                            <BarraUsuario usuario={this.props.sesion.usuario} />
                            <SwitchDeslizador>
                                <Route exact path="/" component={InicioAlumno} />
                                <Route path={RUTAS.INICIO_ALUMNO.ruta} component={InicioAlumno} />
                                <Route path={RUTAS.PERFIL_PROFESOR_ALUMNO.ruta} component={() =>
                                    <PerfilProfesorAlumno perfil={this.props.perfilProfesor.perfil}
                                        estaCargando={this.props.perfilProfesor.estaCargando}
                                        mensError={this.props.perfilProfesor.mensError} />} />
                                <Route path={RUTAS.MI_PERFIL.ruta} component={() =>
                                    <MiPerfil usuario={this.props.sesion.usuario} />} />
                            </SwitchDeslizador>
                            <CubiertaMensaje mensError={this.props.perfilProfesor.mensError}
                                estaCargando={this.props.perfilProfesor.estaCargando} mensaje="Cargando perfil..." />
                        </>
                        :
                        <>
                            <Barra />
                            <SwitchDeslizador>
                                <Route exact path="/" component={Inicio} />
                                {'// Cambiar ruta para pruebas'}
                                <Route path={RUTAS.INICIO_BIENVENIDA.ruta} component={Inicio} />
                                <Route path={RUTAS.DESCARGAR_BIENVENIDA.ruta} component={Descargar} />
                                <Route path={RUTAS.INICIAR_SESION_BIENVENIDA.ruta} component={() =>
                                    <Login iniciarSesion={this.props.iniciarSesion} />
                                } />

                                <Route path={RUTAS.CONTACTO_BIENVENIDA.ruta} component={() =>

                                    <Contacto reiniciarForm={this.props.reiniciarFormContacto} />

                                } />
                                <Route path={RUTAS.SOBRE_NOSOTROS_BIENVENIDA.ruta} component={() =>

                                    <SobreNosotros lideres={this.props.lideres.lideres}
                                        estaCargando={this.props.lideres.estaCargando}
                                        mensError={this.props.lideres.mensError} />} />

                                <Route path={RUTAS.REGISTRO_PROFESOR_BIENVENIDA.ruta} component={RegistroProfesor} />
                                <Route path={RUTAS.REGISTRO_ALUMNO_BIENVENIDA.ruta} component={RegistroAlumno} />

                                <Redirect to={RUTAS.INICIO_BIENVENIDA.ruta} component={Inicio} />
                            </SwitchDeslizador>
                            <Asistente />

                        </>
                }

                <Pie />

            </>

        )

    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Principal));