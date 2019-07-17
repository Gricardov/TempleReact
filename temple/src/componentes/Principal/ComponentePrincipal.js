import React, { Component } from 'react';
import Barra from '../Bienvenida/BarraBienvenida';
import BarraUsuario from '../Utilidades/BarraUsuarioComponente';
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
import MiPerfilAlumno from '../Usuario/Alumno/MiPerfil';
import MiPerfilProfesor from '../Usuario/Profesor/MiPerfil';
import Asistente from '../Utilidades/AsistenteComponente';
import SwitchDeslizador from '../Utilidades/ComponenteSwitchDeslizador';
import CubiertaMensaje from '../Utilidades/CubiertaMensaje';
import CubiertaContrato from '../Utilidades/CubiertaContrato';
import DetalleCitaAlumno from '../Usuario/Alumno/MisCitas';
import DetalleCitaProfesor from '../Usuario/Profesor/MisCitas';
import MisHorarios from '../Usuario/Profesor/MisHorarios';

import { establecerGalleta, obtenerGalleta } from '../../componentes/Utilidades/gestorCookies';

import * as RUTAS from '../../compartido/rutas';

import { Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import {
    obtenerLideres, iniciarSesion, seleccionarPestanaPerfilContrato,
    establecerPasoContrato, registrarContrato, registrarPublicacion,
    obtenerPerfil, cerrarSesion, consultaCursosPorNombre, consultaProfesoresPorIdCurso,
    consultaProfesoresPorNombreCurso, iniciarSesionGalleta
} from '../../redux/CreadorAcciones';

const mapStateToProps = (state) => {

    return {
        sesion: state.sesion,
        cursos: state.cursos,
        profesoresBusqueda: state.profesoresBusqueda,
        lideres: state.lideres,
        perfil: state.perfil,
        contrato: state.contrato,
        registroContrato: state.registroContrato,
        registroPublicacion: state.registroPublicacion
    }

}

const mapDispatchToProps = (dispatch) => ({
    iniciarSesion: (usuario, contrasena) => dispatch(iniciarSesion(usuario, contrasena)),
    iniciarSesionGalleta: (galleta) => dispatch(iniciarSesionGalleta(galleta)),
    obtenerLideres: () => dispatch(obtenerLideres()),
    reiniciarFormContacto: () => dispatch(actions.reset('formContacto')),
    seleccionarPestanaPerfilContrato: (numPestana) => dispatch(seleccionarPestanaPerfilContrato(numPestana)),
    establecerPasoContrato: (numPaso) => dispatch(establecerPasoContrato(numPaso)),
    registrarContrato: (codAlu, codProf, fecIni, fecFin, idCur, idMod) => dispatch(registrarContrato(codAlu, codProf, fecIni, fecFin, idCur, idMod)),
    registrarPublicacion: (codProf, titPub, desPub, idPriv) => dispatch(registrarPublicacion(codProf, titPub, desPub, idPriv)),
    seleccionarPestanaPerfilContrato: (numPestana) => dispatch(seleccionarPestanaPerfilContrato(numPestana)),
    cerrarSesion: () => dispatch(cerrarSesion()),
    consultaCursosPorNombre: (nomCur) => dispatch(consultaCursosPorNombre(nomCur)),
    consultaProfesoresPorIdCurso: (idCur, idNiv) => dispatch(consultaProfesoresPorIdCurso(idCur, idNiv)),
    consultaProfesoresPorNombreCurso: (nomCur, idNiv) => dispatch(consultaProfesoresPorNombreCurso(nomCur, idNiv)),
    obtenerPerfil: (codUsu, tipoUsu) => dispatch(obtenerPerfil(codUsu, tipoUsu))

})

class Principal extends Component {

    componentDidMount() {
        let usuario = obtenerGalleta("usuario");

        // La galleta indica que hay un usuario logueado
        if (usuario && usuario != "") {
            this.props.iniciarSesionGalleta(usuario);
        }

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
                                <Route exact path="/" component={() =>
                                    <InicioAlumno />} />
                                <Route path={RUTAS.INICIO_ALUMNO.ruta} component={InicioAlumno} />
                                <Route path={RUTAS.INICIO_PROFESOR.ruta} component={() =>
                                    <InicioProfesor
                                        sesion={this.props.sesion}
                                        registroPublicacion={this.props.registroPublicacion}
                                        registrarPublicacion={this.props.registrarPublicacion}
                                    />} />
                                <Route path={RUTAS.MI_PERFIL_ALUMNO.ruta} component={() =>
                                    <MiPerfilAlumno
                                        perfil={this.props.perfil.perfil}
                                        estaCargando={this.props.perfil.estaCargando}
                                        mensError={this.props.perfil.mensError} />} />
                                <Route path={RUTAS.MI_PERFIL_PROFESOR.ruta} component={() =>
                                    <MiPerfilProfesor
                                        perfil={this.props.perfil.perfil}
                                        estaCargando={this.props.perfil.estaCargando}
                                        mensError={this.props.perfil.mensError}
                                        registroPublicacion={this.props.registroPublicacion}
                                        registrarPublicacion={this.props.registrarPublicacion}
                                        seleccionarPestanaPerfilContrato={this.props.seleccionarPestanaPerfilContrato}
                                        contrato={this.props.contrato} />} />
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
                                <Route path={RUTAS.MIS_CITAS_ALUMNO.ruta} component={() =>
                                    <DetalleCitaAlumno
                                        citas={this.props.perfil.perfil.contratos}
                                        estaCargando={this.props.perfil.estaCargando}
                                        mensError={this.props.perfil.mensError}
                                    />} />
                                <Route path={RUTAS.MIS_CITAS_PROFESOR.ruta} component={() =>
                                    <DetalleCitaProfesor
                                        citas={this.props.perfil.perfil.contratos}
                                        estaCargando={this.props.perfil.estaCargando}
                                        mensError={this.props.perfil.mensError}
                                    />} />
                                    <Route path={RUTAS.MIS_HORARIOS_PROFESOR.ruta} component={() =>
                                    <MisHorarios
                                        horarios={this.props.perfil.perfil.horarios}
                                        estaCargando={this.props.perfil.estaCargando}
                                        mensError={this.props.perfil.mensError}
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