import React from 'react';
import './PreguntasGlobales.css';
import TarjetaPreguntaGlobal from './TarjetaPreguntaGlobal';

const PreguntasGlobales = (props) => {

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
    <div className="tarjeta-contenedora preguntas-globales">
        <div className="encabezado-preguntas-globales">
            <h2>Preguntas</h2>
            <p><i className="fa fa-cog"></i> Filtrar</p>
        </div>
        <div className="cuerpo-preguntas-globales">
            {preguntas}
        </div>
    </div>
    )

}

export default PreguntasGlobales;