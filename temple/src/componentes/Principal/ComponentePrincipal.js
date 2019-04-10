import React, { Component } from 'react';
import Barra from '../Bienvenida/BarraBienvenida';
import Pie from '../Bienvenida/PieBienvenida';

import Inicio from '../Bienvenida/InicioBienvenida';
import Descargar from '../Bienvenida/DescargarBienvenida';
import Contacto from '../Bienvenida/ContactoBienvenida';
import SobreNosotros from '../Bienvenida/SobreNosotrosBienvenida';
import Login from '../Bienvenida/IniciarSesionBienvenida';
import RegistroAlumno from '../Registro/Alumno/RegistroAlumno';
import RegistroProfesor from '../Registro/Profesor/RegistroProfesor';

import SwitchDeslizador from '../Utilidades/ComponenteSwitchDeslizador';
import * as RUTAS from '../../compartido/rutas';

import { Route, Redirect, withRouter } from 'react-router-dom';

import {connect} from 'react-redux';
import {actions} from 'react-redux-form';

import {obtenerLideres, iniciarSesion} from '../../redux/CreadorAcciones';

const mapStateToProps=(state)=>{

    return {

        lideres: state.lideres,
        estadoSesion:state.estadoSesion
    }

}

const mapDispatchToProps=(dispatch)=>({

    obtenerLideres: ()=>dispatch(obtenerLideres()),
    iniciarSesion: (usuario, contrasena)=>dispatch(iniciarSesion(usuario, contrasena)),
    reiniciarFormContacto: ()=>dispatch(actions.reset('formContacto'))
})

class Principal extends Component {

    

 
    componentDidMount(){

        this.props.obtenerLideres();

    }

    
    render() {
      
      
        return (
            <div>
                <Barra/>
                
                <SwitchDeslizador>
                    <Route exact path="/" component={Inicio} />
                    <Route path={RUTAS.INICIO_BIENVENIDA.ruta} component={Inicio} />
                    <Route path={RUTAS.DESCARGAR_BIENVENIDA.ruta} component={Descargar} />
                    <Route path={RUTAS.INICIAR_SESION_BIENVENIDA.ruta} component={()=>

                    <Login iniciarSesion={this.props.iniciarSesion}
                    estaCargando={this.props.estadoSesion.estaCargando}
                    mensError={this.props.estadoSesion.mensError}
                    usuario={this.props.estadoSesion.usuario} /> } />
                   
                    <Route path={RUTAS.CONTACTO_BIENVENIDA.ruta} component={()=>
                    
                    <Contacto reiniciarForm={this.props.reiniciarFormContacto}/>

                    } />
                    <Route path={RUTAS.SOBRE_NOSOTROS_BIENVENIDA.ruta} component={()=>
                    
                    <SobreNosotros lideres={this.props.lideres.lideres}
                    estaCargando={this.props.lideres.estaCargando}
                    mensError={this.props.lideres.mensError} /> } />                       
                                        
                    <Route path={RUTAS.REGISTRO_PROFESOR_BIENVENIDA.ruta} component={RegistroProfesor}/>
                    <Route path={RUTAS.REGISTRO_ALUMNO_BIENVENIDA.ruta} component={RegistroAlumno}/>

                    <Redirect to={RUTAS.INICIO_BIENVENIDA.ruta} component={Inicio}/>
                    
                    }

                </SwitchDeslizador>
                    
                <Pie />
            </div>


        )

    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Principal));