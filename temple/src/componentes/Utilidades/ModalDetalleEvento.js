import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ModalDetalleEvento extends Component {

    render() {
        return (
            <div className={this.props.abierto
                ?
                'cubierta no-oculto'
                :
                'cubierta oculto'}>
                <div className={this.props.abierto
                    ?
                    'modal-detalle-evento no-oculto'
                    :
                    'modal-detalle-evento oculto'}>

                    <div className="encabezado-detalle-horario">
                        <span className="fa fa-arrow-left" onClick={() => { this.props.cerrar() }}></span>
                        <p>Regresar</p>
                    </div>
                    <div className="botonera-detalle-horario">
                        <button className="btn-guardar-cambios"> Guardar cambios</button>
                        <span className="fa fa-edit"></span>
                        <span className="fa fa-trash"></span>
                    </div>

                    <p className="txt-tipo-horario-detalle-horario">Fecha y hora</p>
                    <div className="tipo-horario-detalle-horario">
                        hi
                    </div>

                    <p className="txt-fechahora-detalle-horario">Tipo horario</p>
                    <div className="fechahora-detalle-horario">
                    <div class="radio-boton">
                            <input type="radio" name="rd-tipo-horario" value="1" id="sizeWeight" checked="checked" />
                            <label for="sizeWeight">Clase libre</label>
                            <input type="radio" name="rd-tipo-horario" value="2" id="sizeDimensions" />
                            <label for="sizeDimensions">Clase magistral</label>
                            <a>¿Qué es esto?</a>
                    </div>
                    
                    </div>

                    <p className="txt-curso-detalle-horario">Curso</p>
                    <select className="caja-seleccion curso-detalle-horario">
                        <option>Cualquiera</option>
                        <option>Geometría</option>
                        <option>Física</option>
                    </select>

                    <p className="txt-lugar-detalle-horario">Lugar</p>
                    <select className="caja-seleccion lugar-detalle-horario">
                        <option>Mi local</option>
                        <option>Local del alumno</option>
                        <option>A elegir</option>
                    </select>

                    <p className="txt-pago-detalle-horario">Tipo de pago</p>
                    <select className="caja-seleccion pago-detalle-horario">
                        <option>Presencial</option>
                        <option>PagoEfectivo</option>
                        <option>Depósito bancario</option>
                    </select>

                    <p className="txt-detalle-detalle-horario">Detalle</p>
                    <textarea className="detalle-detalle-horario"
                        placeholder="Detalles adicionales a tener en cuenta por el alumno"></textarea>

                    <div className="espacio"></div>
                    <a className="opciones-avanzadas-detalle-horario">Opciones avanzadas</a>

                </div>
            </div>
        );
    }

}

export default ModalDetalleEvento;