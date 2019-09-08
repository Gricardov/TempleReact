import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import './ModalCuadriculaAlumnos.css';

class ModalCuadriculaAlumnos extends Component {

    constructor(props) {
        super(props);
        this.state = {
                     
        }
    }   

    render() {
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
                    'tarjeta-detalle-responsiva modal-cuadricula-alumnos no-oculto'
                    :
                    'tarjeta-detalle-responsiva modal-cuadricula-alumnos oculto'}>
                    <div className="encabezado-cuadricula-alumnos">
                        <span className="fa fa-arrow-left" onClick={() => { this.props.cerrar() }}></span>
                        <p>Regresar</p>
                    </div>
                    <div className="botonera-cuadricula-alumnos">
                        <button className="btn-guardar-cambios" onClick={() => {
                            this.props.guardarCambios({ start: this.state.rangoInicio, end: this.state.rangoFin, id: this.state.id })
                        }}> Guardar cambios</button>
                        <span className="fa fa-trash" onClick={()=>{this.props.eliminar({id:this.state.id, title: this.state.tipo})}}></span>
                    </div>
                    <div className="contenido-cuadricula-alumnos tarjeta-contenedora-contenido-cuadricula">
                        <div>holi</div>
                        <div>holi</div>
                        <div>holi</div>
                        <div>holi</div>
                        <div>holi</div>
                        <div>holi</div>
                    </div>

                </div>
            </>
        );
    }

}

export default ModalCuadriculaAlumnos;