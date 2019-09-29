import React, { Component } from 'react';
import './TarjetaAlumno.css';

class TarjetaAlumno extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        let alumno = this.props.alumno;
        return (
            <>
            <div className="tarjeta-detalle-responsiva tarjeta-alumno">

                <img src={alumno.img} alt="img-alumno" />
                <h1 className="nombre-tarjeta-alumno">{alumno.nombres}</h1>
                <div className="tipo-tarjeta-alumno">
                    <p className="etiqueta-pastilla color-clase-magistral">Iniciado</p>
                </div>

                <p className="txt-desde-tarjeta-alumno txt-titulo-tarjeta-alumno">
                    <span className="fa fa-hourglass-2"></span> Horas contigo
            </p>
                <p className="desde-tarjeta-alumno">
                    {alumno.horCla}
                </p>
                <p className="txt-hasta-tarjeta-alumno txt-titulo-tarjeta-alumno">
                    <span className="fa fa-book"></span> Clases contigo
            </p>
            <p className="hasta-tarjeta-alumno">
                    {alumno.numCla}
                </p>
                <div className="botonera-tarjeta-alumno">
                    <button className="btn-tarjeta rojo" onClick={() => { this.props.abrirModalOpciones(alumno.id) }}>Opciones</button>
                    <button className="btn-tarjeta agua" onClick={() => { this.props.abrirModalGestion(alumno.id) }}
                    >Ver clases</button>
                    <button className="btn-tarjeta verde" onClick={()=>{this.props.abrirModalDetalle(alumno.id)}}>Detalles</button>
                    
                </div>
            </div>
            
</>
        )
    }
}


export default TarjetaAlumno;