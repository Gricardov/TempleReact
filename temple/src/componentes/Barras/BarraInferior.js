import React from 'react';
import './BarraInferior.css';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import {seleccionarOpcionBarra} from '../../redux/CreadorAcciones';

import {
    
} from '../../redux/CreadorAcciones';

const mapStateToProps = (state) => {

    return {
        barra: state.barra
    }

}

const mapDispatchToProps = (dispatch) => ({
    seleccionarOpcionBarra: (opcion) => dispatch(seleccionarOpcionBarra(opcion))


})


const BarraInferior = (props) => {
    let opciones = [];

    if (props.barra.opciones) {
        opciones = props.barra.opciones.map((e, i) => {
            return <div onClick={() => props.seleccionarOpcionBarra(i)} 
            className={props.barra.seleccionado==i?'opcion-barra-inferior-seleccionada':''}>
                <i className={e.icono} />
                {e.nombre}
            </div>
        })
    }

    return (<div className="barra-inferior">
        {opciones}
    </div>)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BarraInferior));