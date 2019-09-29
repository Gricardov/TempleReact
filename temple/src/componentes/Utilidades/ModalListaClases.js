import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import TarjetaClase from './TarjetaClase';

import './ModalListaClases.css';

class ModalListaClases extends Component {

    constructor(props) {
        super(props);
        this.state = {
                     
        }
    }   

    render() {

        let tarjetasClases=[];

        if (this.props.contratos){
            tarjetasClases=this.props.contratos.map((e,i)=>{                
                return <TarjetaClase key={i} contrato={e} ocultarBotones={true}/>
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
                    'tarjeta-detalle-responsiva modal-lista-clases no-oculto'
                    :
                    'tarjeta-detalle-responsiva modal-lista-clases oculto'}>
                    <div className="encabezado-lista-clases">
                        <span className="fa fa-arrow-left" onClick={() => { this.props.cerrar() }}></span>
                        <p>Regresar</p>
                    </div>
                    <div className="botonera-lista-clases">
                        <button className="btn-gestion-modal" onClick={() =>{alert('listo')}}> Guardar cambios</button>
                        <button className="btn-buscar btn-gestion-modal"><i className="fa fa-search"></i></button>                        
                    </div>
                    <div className="contenido-lista-clases tarjeta-contenedora-contenido-responsiva ">
                        {tarjetasClases}
                    </div>

                </div>
            </>
        );
    }

}

export default ModalListaClases;