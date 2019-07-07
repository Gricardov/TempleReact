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
import InicioProfesor from '../Usuario/Profesor/InicioProfesor';
import PerfilProfesorAlumno from '../Usuario/Alumno/PerfilProfesorAlumno';
import MiPerfil from '../Usuario/Alumno/MiPerfil';
import Asistente from '../Utilidades/AsistenteComponente';
import SwitchDeslizador from '../Utilidades/ComponenteSwitchDeslizador';
import CubiertaMensaje from '../Utilidades/CubiertaMensaje';
import CubiertaContrato from '../Utilidades/CubiertaContrato';
import * as RUTAS from '../../compartido/rutas';

import { Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import { obtenerLideres, iniciarSesion, seleccionarPestanaPerfilContrato, establecerPasoContrato, registrarContrato } from '../../redux/CreadorAcciones';

const mapStateToProps = (state) => {

    return {
        sesion: state.sesion,
        lideres: state.lideres,
        perfil: state.perfil,
        contrato: state.contrato,
        registroContrato: state.registroContrato

    }

}

const mapDispatchToProps = (dispatch) => ({
    iniciarSesion: (usuario, contrasena) => dispatch(iniciarSesion(usuario, contrasena)),
    obtenerLideres: () => dispatch(obtenerLideres()),
    reiniciarFormContacto: () => dispatch(actions.reset('formContacto')),
    seleccionarPestanaPerfilContrato: (numPestana) => dispatch(seleccionarPestanaPerfilContrato(numPestana)),
    establecerPasoContrato: (numPaso) => dispatch(establecerPasoContrato(numPaso)),
    registrarContrato: (codAlu, codProf, fecIni, fecFin, idCur, idMod) => dispatch(registrarContrato(codAlu, codProf, fecIni, fecFin, idCur, idMod))

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
                                <Route path={RUTAS.INICIO_PROFESOR.ruta} component={InicioProfesor} />
                                <Route path={RUTAS.MI_PERFIL.ruta} component={() =>
                                    <MiPerfil
                                        perfil={this.props.perfil.perfil}
                                        estaCargando={this.props.perfil.estaCargando}
                                        mensError={this.props.perfil.mensError} />} />
                                <Route path={RUTAS.PERFIL_PROFESOR_ALUMNO.ruta} component={() =>
                                    <PerfilProfesorAlumno
                                        perfil={this.props.perfil.perfil}
                                        usuario={this.props.sesion.usuario}
                                        estaCargando={this.props.perfil.estaCargando}
                                        mensError={this.props.perfil.mensError}
                                        seleccionarPestanaPerfilContrato={this.props.seleccionarPestanaPerfilContrato}
                                        establecerPasoContrato={this.props.establecerPasoContrato}
                                        contrato={this.props.contrato}
                                        registroContrato={this.props.registroContrato}
                                        registrarContrato={this.props.registrarContrato}
                                         />} />

                            </SwitchDeslizador>
                            <Asistente usuario={this.props.sesion.usuario} />
                            <CubiertaMensaje mensError={this.props.perfil.mensError}
                                estaCargando={this.props.perfil.estaCargando} mensaje="Cargando perfil..." />

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