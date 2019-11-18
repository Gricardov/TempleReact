import React from 'react';
import './LateralDerecho.css';
import TarjetaPreguntaGlobal from '../Usuario/Profesor/TarjetaPreguntaGlobal';

const LateralDerecho = (props) => {

    let preguntas =[];
    if (props.preguntas){
        preguntas=props.preguntas.map((e,i)=>{
            return <>
            <TarjetaPreguntaGlobal datos={e}/>
            {
                // Solo si es menor que el último
                i < props.preguntas.length-1
                    ?
                    <hr />
                    :
                    null
            }
            </>
        })
    }

return(
    <div className="tarjeta-contenedora lateral-derecho">
        <div className="encabezado-lateral-derecho">
            <h2>Preguntas</h2>
            <p><i className="fa fa-cog"></i> Filtrar</p>
        </div>
        <div className="cuerpo-lateral-derecho">
            {preguntas}
        </div>
    </div>
    )

}

export default LateralDerecho;