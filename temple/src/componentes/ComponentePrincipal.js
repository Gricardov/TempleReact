import React, { Component } from 'react';
import Barra from './BarraBienvenida';
import Pie from './PieBienvenida';

import Inicio from './InicioBienvenida';
import Descargar from './DescargarBienvenida';
import Contacto from './ContactoBienvenida';
import SobreNosotros from './SobreNosotrosBienvenida';
import Login from './IniciarSesionBienvenida';

import SwitchDeslizador from './ComponenteSwitchDeslizador';
import * as RUTAS from '../compartido/rutas';

import { Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import {obtenerLideres, iniciarSesion} from '../redux/CreadorAcciones';

const mapStateToProps=(state)=>{

    return {

        lideres: state.lideres,
        estadoSesion:state.estadoSesion
    }

}

const mapDispatchToProps=(dispatch)=>({

    obtenerLideres: ()=>dispatch(obtenerLideres()),
    iniciarSesion: (usuario, contrasena)=>dispatch(iniciarSesion(usuario, contrasena))

})

class Principal extends Component {

    componentDidMount(){

        this.props.obtenerLideres();

    }


    render() {

    const redireccionador=()=>{return <Redirect push to="RUTAS.INICIO_BIENVENIDA.ruta"/>};

        return (
            <div>

                <Barra />
                
                <SwitchDeslizador>
                    <Route exact path="/" component={redireccionador} />
                    <Route path={RUTAS.INICIO_BIENVENIDA.ruta} component={Inicio} />
                    <Route path={RUTAS.DESCARGAR_BIENVENIDA.ruta} component={Descargar} />
                    <Route path={RUTAS.INICIAR_SESION_BIENVENIDA.ruta} component={()=>

                    <Login iniciarSesion={this.props.iniciarSesion}
                    estaCargando={this.props.estadoSesion.estaCargando}
                    mensError={this.props.estadoSesion.mensError}
                    usuario={this.props.estadoSesion.usuario} /> } />

                    <Route path={RUTAS.CONTACTO_BIENVENIDA.ruta} component={Contacto} />
                    <Route path={RUTAS.SOBRE_NOSOTROS_BIENVENIDA.ruta} component={()=>
                    
                    <SobreNosotros lideres={this.props.lideres.lideres}
                    estaCargando={this.props.lideres.estaCargando}
                    mensError={this.props.lideres.mensError} /> } />                       
                
                    <Redirect to={RUTAS.INICIO_BIENVENIDA.ruta} />
                    
                    }

                </SwitchDeslizador>
                    
                <Pie />
            </div>


        )

    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Principal));