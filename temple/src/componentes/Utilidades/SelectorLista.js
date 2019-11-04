import React from 'react';
import './SelectorLista.css';
import * as RUTAS from '../../compartido/rutas';
import { Route, Redirect, withRouter } from 'react-router-dom';

const SelectorLista = (props) => {
    
    let selectores = [];
    if (props.selectores){
        selectores = props.selectores.map((e,i)=>{
            return <div onClick={()=>e.ruta?
                props.history.push(e.ruta):props.seleccionar(i)}
            className={i==props.seleccionado?'seleccionado':''}><p>{e.nombre}</p></div>
        })
    }

    return(
        <div className="selector-lista">
            {selectores}
        </div>
    )
}

export default withRouter(SelectorLista);