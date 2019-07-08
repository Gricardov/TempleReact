import React, { Component } from 'react';
import Mapa from './ComponenteMapa';

class Ubicacion extends Component {
    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return(
            <Mapa posicion={this.props.posicion} soloMuestra={true}/>
        )
    }

}

export default Ubicacion;