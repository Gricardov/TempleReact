import React, { Component } from 'react';
import Barra from '../Bienvenida/BarraBienvenida';
import BarraUsuario from '../Usuario/BarraUsuario';
import Pie from '../Bienvenida/PieBienvenida';

import Inicio from '../Bienvenida/InicioBienvenida';
import Descargar from '../Bienvenida/DescargarBienvenida';
import Contacto from '../Bienvenida/ContactoBienvenida';
import SobreNosotros from '../Bienvenida/SobreNosotrosBienvenida';
import Login from '../Bienvenida/IniciarSesionBienvenida';
import RegistroAlumno from '../Registro/Alumno/RegistroAlumno';
import RegistroProfesor from '../Registro/Profesor/RegistroProfesor';
import InicioAlumno from '../Usuario/Alumno/InicioAlumno';
import PerfilProfesorAlumno from '../Usuario/Alumno/PerfilProfesorAlumno';
import Asistente from '../Utilidades/AsistenteComponente';
import SwitchDeslizador from '../Utilidades/ComponenteSwitchDeslizador';
import * as RUTAS from '../../compartido/rutas';

import { Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import { obtenerLideres, iniciarSesion } from '../../redux/CreadorAcciones';

const mapStateToProps = (state) => {

    return {
        sesion: state.sesion,
        lideres: state.lideres
    }

}

const mapDispatchToProps = (dispatch) => ({

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
                    <Route path={RUTAS.PERFIL_PROFESOR_ALUMNO.ruta} component={PerfilProfesorAlumno} />
                    </SwitchDeslizador>  
                    </>                
                    :     
                    <>
                    <Barra />
                    <SwitchDeslizador>  
                    <Route exact path="/" component={Inicio} />
                    {'// Cambiar ruta para pruebas'}
                    <Route path={RUTAS.INICIO_BIENVENIDA.ruta} component={PerfilProfesorAlumno} />
                    <Route path={RUTAS.DESCARGAR_BIENVENIDA.ruta} component={Descargar} />
                    <Route path={RUTAS.INICIAR_SESION_BIENVENIDA.ruta} component={Login} />

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