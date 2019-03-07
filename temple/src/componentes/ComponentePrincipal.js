import React, { Component } from 'react';
import Barra from './BarraBienvenida';
import Pie from './PieBienvenida';

import Inicio from './InicioBienvenida';
import Contacto from './ContactoBienvenida';
import SobreNosotros from './SobreNosotrosBienvenida';
import Login from './IniciarSesionBienvenida';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
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
        return (
            <div>

                <Barra />
                <Switch>
                    <Route path="/bienvenida" component={Inicio} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route exact path="/sobreNosotros" component={()=>
                    
                        <SobreNosotros lideres={this.props.lideres.lideres}
                        estaCargando={this.props.lideres.estaCargando}
                        mensError={this.props.lideres.mensError} /> } />                       
                
                <Route exact path="/iniciarSesion" component={()=>
                
                    <Login iniciarSesion={this.props.iniciarSesion}
                    estaCargando={this.props.estadoSesion.estaCargando}
                    mensError={this.props.estadoSesion.mensError}
                    usuario={this.props.estadoSesion.usuario}
                    />
                
                } />

                    <Redirect to="/bienvenida" />
                    }

                </Switch>
                <Pie />
            </div>


        )

    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Principal));