import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import TarjetaAlumnoAsistencia from './TarjetaInscrito';

import './ModalCuadriculaAlumnos.css';

class ModalCuadriculaAlumnos extends Component {

    constructor(props) {
        super(props);
        this.state = {
                     
        }
    }   

    render() {

        let tarjetasAlumnos=[];

        if (this.props.inscritos){
            tarjetasAlumnos=this.props.inscritos.map((e,i)=>{
                return <TarjetaAlumnoAsistencia key={i} inscrito={e}/>
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
                    'tarjeta-detalle-responsiva modal-cuadricula-alumnos no-oculto'
                    :
                    'tarjeta-detalle-responsiva modal-cuadricula-alumnos oculto'}>
                    <div className="encabezado-cuadricula-alumnos">
                        <span className="fa fa-arrow-left" onClick={() => { this.props.cerrar() }}></span>
                        <p>Regresar</p>
                    </div>
                    <div className="botonera-cuadricula-alumnos">
                        <button className="btn-gestion-modal" onClick={() =>{alert('listo')}}> Guardar cambios</button>
                        <button className="btn-buscar btn-gestion-modal"><i className="fa fa-search"></i></button>                        
                    </div>
                    <div className="contenido-cuadricula-alumnos tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido-cuadricula">
                        {tarjetasAlumnos}
                    </div>

                </div>
            </>
        );
    }

}

export default ModalCuadriculaAlumnos;