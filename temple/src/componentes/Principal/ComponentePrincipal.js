import React, { Component } from 'react';
import Barra from '../Barras/BarraBienvenida';
//import BarraUsuario from '../Utilidades/BarraUsuarioComponente';
import BarraUsuario from '../Barras/BarraUsuario';
import BarraInferior from '../Barras/BarraInferior';
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
import MiPerfilProfesor from '../Usuario/Profesor/MiPerfilResponsivo';
import Asistente from '../Utilidades/AsistenteComponente';
import SwitchDeslizador from '../Utilidades/ComponenteSwitchDeslizador';
import CubiertaMensaje from '../Utilidades/CubiertaMensaje';
import CubiertaContrato from '../Utilidades/CubiertaContrato';
import DetalleCitaAlumno from '../Usuario/Alumno/MisCitas';
import GestionCursos from '../Usuario/Profesor/GestionCursos';
import GestionHorarios from '../Usuario/Profesor/GestionHorarios';
import GestionAlumnos from '../Usuario/Profesor/GestionAlumnos';
import GestionClases from '../Usuario/Profesor/GestionClases';
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
    consultaProfesoresPorNombreCurso, obtenerInicioGalleta, actualizarHorarios
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
    obtenerInicioGalleta: () => dispatch(obtenerInicioGalleta()),
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
    obtenerPerfil: (codUsu, tipoUsu) => dispatch(obtenerPerfil(codUsu, tipoUsu)),
    actualizarHorarios: (codUsu, horarios) => dispatch(actualizarHorarios(codUsu, horarios))

})

class Principal extends Component {

    componentDidMount() {
        let usuario = obtenerGalleta("usuario");

        // La galleta indica que hay un usuario logueado
        if (usuario && usuario != "") {
            this.props.obtenerInicioGalleta();
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
                                        contrato={this.props.contrato}
                                        citas={this.props.perfil.perfil.contratos}
                                        ejercicios={[{
                                            curso: "Geometría",
                                            ejercicios: [{
                                                id: '1001',
                                                imgPer: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp',
                                                asunto: 'Profe ayúdeme con este problema porfa', nomUsu: 'Vane', apaUsu: 'Sita', amaUsu: 'Sita', codUsu: '1002',
                                                fecSol: '2019-08-14 03:00:00', estado: -1,
                                                descripcion: 'Lorem ipsum', imgAdj: '', pdfAdj: '', respuesta: ''
                                            },
                                            {
                                                id: '1002',
                                                imgPer: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp',
                                                asunto: 'Profe no me sale lo de la circunferencia', nomUsu: 'Vane', apaUsu: 'Sita', amaUsu: 'Sita', codUsu: '1002',
                                                fecSol: '2019-08-14 03:40:00', estado: -1,
                                                descripcion: 'Cómo puedes tú ser libre mientras yo soy preso', imgAdj: '', pdfAdj: '', respuesta: ''
                                            }]
                                        },
                                        {
                                            curso: "Programación en Java",
                                            ejercicios: [{
                                                id: '1003',
                                                imgPer: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp',
                                                asunto: 'Problema con los bucles', nomUsu: 'Vane', apaUsu: 'Sita', amaUsu: 'Sita', codUsu: '1002',
                                                fecSol: '2019-08-14 03:00:00', estado: -1,
                                                descripcion: 'Dado un arreglo a con x objetos, se itera...', imgAdj: '', pdfAdj: '', respuesta: ''
                                            }
                                            ]
                                        }
                                        ]}
                                    />} />
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
                                    <GestionCursos cursos={[
                                        { id: 0, nombre: 'Geometría', img: 'https://definicion.mx/wp-content/uploads/educacion/Geometria.jpg', categoria: 'Matemáticas', horExp: '1', solEje: '0' },
                                        { id: 1, nombre: 'Álgebra', img: 'https://www.cienciamatematica.com/wp-content/uploads/algebra.jpg', categoria: 'Matemáticas', horExp: '2', solEje: '1' },
                                        { id: 2, nombre: 'Programación en Javascript con trocitos de chocolate', img: 'https://www.muylinux.com/wp-content/uploads/2017/09/java.png', categoria: 'Programación', horExp: '3', solEje: '3' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 4, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 5, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },/*
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },*/

                                    ]} />} />
                                <Route path={RUTAS.MIS_HORARIOS_PROFESOR.ruta} component={() =>

                                    <GestionHorarios horarios={this.props.perfil.perfil.horarios} />

                                } />
                                <Route path={RUTAS.MIS_ALUMNOS_PROFESOR.ruta} component={() =>

                                    <GestionAlumnos alumnos={[
                                        { img: 'https://i1.sndcdn.com/avatars-000021701752-f0hvgk-t500x500.jpg', nombres: 'Mila Luna', horCla: 15, numCla: 3 },
                                        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RJzD7KFU6AbY8cMy6L-NdM_eajlx7P7FlPbHJc3WEbG0Hph6', nombres: 'Roberto Carlos', horCla: 56, numCla: 7 },
                                        { img: 'https://media.timeout.com/images/103805223/630/472/image.jpg', nombres: 'José José', horCla: 9, numCla: 3 },
                                    ]} />

                                } />
                                <Route path={RUTAS.MIS_CONTRATOS_PROFESOR.ruta} component={() =>

                                    <GestionClases contratos={[
                                        {
                                            id: 1, nombre: 'Geometría', img: 'https://definicion.mx/wp-content/uploads/educacion/Geometria.jpg',
                                            desde: 'Mañana a las 2pm', hasta: 'Mañana a las 4pm', lugar: 'Mi lugar'
                                        },
                                        {
                                            id: 2, nombre: 'Álgebra', img: 'https://www.cienciamatematica.com/wp-content/uploads/algebra.jpg',
                                            desde: 'Hoy a la 1pm', hasta: 'Hoy a las 3pm', lugar: 'Jr. Las bellas 123 - piso 4 - surco'
                                        }
                                    ]} />

                                } />
                                {/*<MisHorarios
                                        actualizarHorarios={this.props.actualizarHorarios}
                                        obtenerPerfil={this.props.obtenerPerfil}
                                        usuario={this.props.sesion.usuario}
                                        horarios={this.props.perfil.perfil.horarios}
                                        estaCargando={this.props.perfil.estaCargando}
                                        mensError={this.props.perfil.mensError}
                                    /> */}
                            </SwitchDeslizador>
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

                        </>
                }
                <BarraInferior opciones={[{id:0, nombre:'Buscar', icono: 'fa fa-search'},
                {id:1, nombre:'Estadísticas', icono:'fa fa-line-chart'},
                {id:2, nombre:'Inscritos', icono:'fa fa-group'}]}/>
                <Asistente usuario={this.props.sesion.usuario} />
                <Pie />

            </>

        )

    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Principal));