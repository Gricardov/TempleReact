import React from 'react';
import './BarraInferior.css';

const BarraInferior = (props) => {

    let opciones = [];

    if (props.opciones) {
        opciones = props.opciones.map((e, i) => {
            return <div onClick={() => props.seleccionar(i)}>
                <i className={e.icono} />
                {e.nombre}
            </div>
        })
    }

    return (<div className="barra-inferior">
        {opciones}
    </div>)
}

export default BarraInferior;