import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import TarjetaAlumnoAsistencia from './TarjetaInscrito';

import './ModalInfoDetalle.css';

class ModalCuadriculaAlumnos extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        let detalles = [];

        if (this.props.detalles) {
            detalles = this.props.detalles.detalles.map((e, i) => {
                return (<><p className="txt-titulo-detalle">{e.nombre}</p>
                <p className="txt-desc-detalle">{e.valor}</p></>)
            })
        }

        return (
            <>
                <div className={this.props.abierto
                    ?
                    'cubierta no-oculto'
                    :
                    'cubierta oculto'} onClick={() => { this.props.cerrar() }}>
                </div>

                <div className={this.props.abierto
                    ?
                    'tarjeta-detalle-responsiva modal-info-detalle no-oculto'
                    :
                    'tarjeta-detalle-responsiva modal-info-detalle oculto'}>
                    <div className="encabezado-info-detalle">
                        <span className="fa fa-arrow-left" onClick={() => { this.props.cerrar() }}></span>
                        <p>Regresar</p>
                    </div>
                    <div className="botonera-info-detalle">
                        <button className={this.props.mostrarEstadisticas
                            ?
                            "btn-gestion-modal no-oculto"
                            :
                            "btn-gestion-modal oculto"} onClick={() => { alert('listo') }}> Estadísticas</button>
                    </div>
                        {detalles}

                </div>
            </>
        );
    }

}

export default ModalCuadriculaAlumnos;