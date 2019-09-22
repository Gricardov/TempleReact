import React, { Component } from 'react';
import './TarjetaDetalleCurso.css';

class TarjetaDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="tarjeta-detalle-responsiva tarjeta-detalle-curso">

                    <div className="encabezado-detalle-curso">
                        <span className="fa fa-arrow-left" onClick={() => { this.props.volverMenu() }}></span>
                        <p>Regresar</p>
                    </div>
                    <div className="botonera-detalle-curso">
                        <button className="btn-gestion-modal"> Guardar cambios</button>
                        <span className="fa fa-edit"></span>
                        <span className="fa fa-trash"></span>
                    </div>
                        <p className="txt-descripcion-detalle-curso">Descripcion</p>
                        <textarea className="descripcion-detalle-curso" placeholder="Ejemplo: En este curso, veremos desde lo más básico a más complejo en Geometría"></textarea>

                        <p className="txt-niveles-detalle-curso">Niveles</p>
                        <ul className="niveles-detalle-curso">
                            <li>Primario</li>
                            <li>Secundario</li>
                        </ul>

                        <p className="txt-temas-detalle-curso">Temas</p>
                        <ul className="temas-detalle-curso">
                            <li>Geometría plana</li>
                            <li>Geometría esférica</li>
                        </ul>

                        <p className="txt-costo-hora-detalle-curso">Costo por hora (soles)</p>
                        <input className="costo-hora-detalle-curso" type="text" placeholder="Introduce el precio" min="0"></input>
                        
                        <p className="txt-costo-ejercicio-detalle-curso">Costo por ejercicio online (soles)</p>
                        <input className="costo-ejercicio-detalle-curso" type="text" placeholder="Introduce el precio" min="0"></input>
                        
                        <a className="txt-pregunta-ejercicio-detalle-curso" href="#">¿Qué es esto?</a>
                        <div className="pregunta-ejercicio-detalle-curso">
                        <input type="checkbox" value="1"/> <p>Permitir solicitudes gratuitas también</p>
                        </div>
                </div>
        )
    }

}

export default TarjetaDetalle;