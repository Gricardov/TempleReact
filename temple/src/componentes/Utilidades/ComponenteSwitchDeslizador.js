import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Slider from '../../Deslizador';
import * as RUTAS from '../../compartido/rutas';

class DeslizaFuera extends React.Component {

    constructor(props){

        super(props);
    
    this.state = {

        posicionHijo: Slider.CENTER,
        hijoActual: props.children,
        idActual:props.idActual,
        hijoAnterior:null,
        idPrevio:null,
        callbackAnimacion:null
        };
    }

componentDidUpdate(prevProps, prevState) {
    
    const idAnterior= prevProps.idActual || prevProps.children.type;
    const idActual=this.props.idActual || this.props.children.type;

    console.log("desde "+idAnterior+" hacia "+idActual);
    if (idActual!==idAnterior){

        this.setState({

        posicionHijo: RUTAS.deslizarDerecha(idAnterior,idActual)?Slider.TO_LEFT:Slider.TO_RIGHT,
        hijoActual:this.props.children,
        idActual:idActual,
        hijoAnterior: prevProps.children,
        idAnterior,
        callbackAnimacion: this.intercambiarHijos,
        });
    }

}

intercambiarHijos=()=>{

    this.setState({
        posicionHijo: this.state.posicionHijo===Slider.TO_LEFT?Slider.FROM_RIGHT:Slider.FROM_LEFT,
        hijoAnterior:null,
        idAnterior:null,
        callbackAnimacion:null

    });
}

render(){

    const{
        hijoAnterior,
        hijoActual,
        posicionHijo,
        callbackAnimacion
    }=this.state;

    return (
        <Slider position={posicionHijo} animationCallback={callbackAnimacion}>
            {hijoAnterior || hijoActual}
        </Slider>
    );

}


}

const SwitchDeslizador = (ComponenteAnimador,SwitchPersonalizado)=>({
    updateStep,
    children,
    paginaCambio
}) => (

    <Route
    render={({location})=>(
        <ComponenteAnimador paginaCambio={paginaCambio} idActual={location.pathname} updateStep={updateStep}>
            <SwitchPersonalizado location={location}>{children}></SwitchPersonalizado>
        </ComponenteAnimador>
    )}    
    />
);

export default SwitchDeslizador(DeslizaFuera,Switch);

