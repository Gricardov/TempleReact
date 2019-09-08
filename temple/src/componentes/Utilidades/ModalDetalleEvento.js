import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ModalDetalleEvento.css";

class ModalDetalleEvento extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rangoInicio: new Date(),
            rangoFin: new Date(),
            id: null,
            tipo: ''           
        }
    }

    componentDidUpdate(prevProps, prevState) {

        // En otras palabras, si envías un inicio y un fin, es porque haz hecho la selección por arrastre,
        // si no, lo has hecho por medio del botón (que asigne las fechas de hoy como inicio y fin)
        if (prevProps.eventoSeleccionado != this.props.eventoSeleccionado) {
            if (this.props.eventoSeleccionado) {
                this.setState({ rangoInicio: this.props.eventoSeleccionado.start,
                    rangoFin: this.props.eventoSeleccionado.end, id:this.props.eventoSeleccionado.id,
                    tipo: this.props.eventoSeleccionado.title})
            } else {
                this.setState({ rangoInicio: new Date(), rangoFin: new Date(), id:null })
            }

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
                    'tarjeta-detalle-responsiva modal-detalle-evento no-oculto'
                    :
                    'tarjeta-detalle-responsiva modal-detalle-evento oculto'}>
                    <div className="encabezado-detalle-horario">
                        <span className="fa fa-arrow-left" onClick={() => { this.props.cerrar() }}></span>
                        <p>Regresar</p>
                    </div>
                    <div className="botonera-detalle-horario">
                        <button className="btn-guardar-cambios" onClick={() => {
                            this.props.guardarCambios({ start: this.state.rangoInicio, end: this.state.rangoFin, id: this.state.id })
                        }}> Guardar cambios</button>
                        <span className="fa fa-trash" onClick={()=>{this.props.eliminar({id:this.state.id, title: this.state.tipo})}}></span>
                    </div>

                    <p className="txt-tipo-horario-detalle-horario">Fecha y hora</p>
                    <div className="tipo-horario-detalle-horario">
                        <div>
                            <p>Desde </p>
                            <DatePicker
                                selected={this.state.rangoInicio}
                                onChange={fecha => this.setState({ rangoInicio: fecha })}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={5}
                                timeCaption="Hora"
                                dateFormat="dd/MM/yyyy HH:mm (aa)"
                            />
                        </div>
                        <div>
                            <p>Hasta </p>
                            <DatePicker
                                selected={this.state.rangoFin}
                                onChange={fecha => this.setState({ rangoFin: fecha })}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={5}
                                timeCaption="Hora"
                                dateFormat="dd/MM/yyyy HH:mm (aa)"
                            />
                        </div>
                    </div>
                    <p className="txt-fechahora-detalle-horario">Tipo horario</p>
                    <div className="fechahora-detalle-horario">
                        <div className="radio-boton">
                            <input type="radio" name="rd-tipo-horario" value="1" id="rd-clase-libre" defaultChecked="checked" />
                            <label htmlFor="rd-clase-libre">Clase libre</label>
                            <input type="radio" name="rd-tipo-horario" value="2" id="rd-clase-magistral" />
                            <label htmlFor="rd-clase-magistral">Clase magistral</label>
                        </div>
                        <a className="txt-que-esto-extendido">¿Qué es esto?</a>
                        <span className="fa fa-question-circle fa-2x"></span>
                    </div>

                    <p className="txt-curso-detalle-horario">Curso</p>
                    <select className="caja-seleccion curso-detalle-horario">
                        <option>Libre elección</option>
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
            </>
        );
    }

}

export default ModalDetalleEvento;