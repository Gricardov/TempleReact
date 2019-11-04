import React, { Component } from 'react';
import './LateralIzquierdo.css';
import TarjetaSolicitudGlobal from './TarjetaSolicitudGlobal';
import TarjetaDestacadoGlobal from './TarjetaDestacadoGlobal';
import SelectorLista from '../../Utilidades/SelectorLista';
import * as RUTAS from '../../../compartido/rutas';

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
                    <SelectorLista seleccionado={this.state.seleccionado}
                        selectores={[{ nombre: 'Inicio' }, { nombre: 'Ejercicios' }, { nombre: 'Explorar' }]}
                        seleccionar={(indice)=>this.setState({seleccionado:indice})} />
                </div>
                <div className="encabezado-lateral-izquierdo mt-3">
                    <h2>Gestionar</h2>                    
                </div>
                <div className="cuerpo-lateral-izquierdo">
                    <SelectorLista seleccionado={-1}
                        selectores={[   { nombre: 'Mis clases', ruta:RUTAS.MIS_CONTRATOS_PROFESOR.ruta },
                                        { nombre: 'Mis horarios', ruta:RUTAS.MIS_HORARIOS_PROFESOR.ruta },
                                        { nombre: 'Mis cursos', ruta:RUTAS.MIS_CITAS_PROFESOR.ruta },
                                        {nombre:'Mis alumnos', ruta:RUTAS.MIS_ALUMNOS_PROFESOR.ruta}]}
                        seleccionar={(indice)=>this.setState({seleccionado:indice})} />
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