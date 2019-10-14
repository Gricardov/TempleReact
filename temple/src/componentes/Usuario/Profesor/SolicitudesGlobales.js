import React from 'react';
import './SolicitudesGlobales.css';
import TarjetaSolicitudGlobal from './TarjetaSolicitudGlobal';

const SolicitudesGlobales = (props) => {
    let solicitudes = [];
    if (props.solicitudes) {
        solicitudes = props.solicitudes.map((e, i) => {
            return <>
                <TarjetaSolicitudGlobal datos={e} />
                {
                    // Solo si es menor que el último
                    i < props.solicitudes.length-1
                        ?
                        <hr />
                        :
                        null
                }
            </>
        })
    }
    return (
        <div className="tarjeta-contenedora solicitudes-globales">
            <div className="encabezado-solicitudes-globales">
                <h2>Solicitudes globales</h2>
                <p><i className="fa fa-cog"></i> Filtrar</p>
            </div>
            <div className="cuerpo-solicitudes-globales">
                {solicitudes}
            </div>
        </div>

    )

}

export default SolicitudesGlobales;