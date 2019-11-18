import React, { Component } from 'react';
import './LateralIzquierdo.css';
import TarjetaSolicitudGlobal from '../Usuario/Profesor/TarjetaSolicitudGlobal';
import TarjetaDestacadoGlobal from '../Usuario/Profesor/TarjetaDestacadoGlobal';
import SelectorLista from './SelectorLista';
import * as RUTAS from '../../compartido/rutas';

class LateralIzquierdo extends Component {
    constructor(props){
        super(props);
        this.state={
            seleccionado:0
        }
    }
    render() {

        let destacados = [];
        if (this.props.destacados) {
            destacados = this.props.destacados.map((e, i) => {
                return <>
                    <TarjetaDestacadoGlobal datos={e} />
                    {
                        // Solo si es menor que el último
                        i < this.props.destacados.length - 1
                            ?
                            <hr />
                            :
                            null
                    }
                </>
            })

        }

        return (
            <div className="tarjeta-contenedora lateral-izquierdo">
                <div className="encabezado-lateral-izquierdo">
                    <h2>Navegar</h2>                    
                </div>
                <div className="cuerpo-lateral-izquierdo">
                    <SelectorLista seleccionado={this.props.navegableSeleccionado}
                        selectores={this.props.navegables}
                        seleccionar={(indice)=>this.props.seleccionarNavegable(indice)} />
                </div>
                <div className="encabezado-lateral-izquierdo mt-3">
                    <h2>Gestionar</h2>                    
                </div>
                <div className="cuerpo-lateral-izquierdo">
                    <SelectorLista seleccionado={-1}
                        selectores={this.props.gestiones}
                        seleccionar={()=>null} />
                </div>  
                <div className="encabezado-lateral-izquierdo mt-3">
                    <h2>Destacado</h2>
                    <p><i className="fa fa-cog"></i> Filtrar</p>
                </div>
                <div className="cuerpo-lateral-izquierdo">
                    {destacados}
                </div>
            </div>

        )
    }
}

export default LateralIzquierdo;