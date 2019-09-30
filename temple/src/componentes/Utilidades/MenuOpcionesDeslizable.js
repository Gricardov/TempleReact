import React from 'react';
import './MenuOpcionesDeslizable.css';
import { Link } from 'react-router-dom';

const MenuOpciones = (props) => {

    let opciones = [];

    if (props.opciones) {
        opciones = props.opciones.map((e, i) => {
            return <Link to={e.direccion} onClick={e.accion ? () => { e.accion() } : null}><div key={i}>{e.descripcion}</div></Link>
        })
    }

    return (
        <>
            {
                props.abierto ?
                    <>
                        <div className="cubierta" onClick={() => props.cerrar()}></div>
                        <div className="menu-opciones-deslizable" style={{transform: "translate(220px)"}}
>
                            {opciones}
                        </div>
                    </>
                    :
                    null
            }


        </>
    )
}

export default MenuOpciones;