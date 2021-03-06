import React, { Component } from 'react';
import './TarjetaClase.css';

class TarjetaClase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalAlumnosAbierto: false
        };
    }

    render() {

        let contrato = this.props.contrato;
        return (
            <>
                <div className="tarjeta-detalle-responsiva tarjeta-contrato">

                    <img src={contrato.img} alt="img-curso" />
                    <h1 className="nombre-tarjeta-contrato">{contrato.nombre}</h1>
                    <div className="tipo-tarjeta-contrato">
                        <p className="etiqueta-pastilla color-clase-magistral">Clase magistral</p>
                    </div>

                    <p className="txt-desde-tarjeta-contrato txt-titulo-tarjeta-contrato">
                        <span className="fa fa-clock-o"></span> Desde
            </p>
                    <p className="desde-tarjeta-contrato">
                        {contrato.desde}
                    </p>
                    <p className="txt-hasta-tarjeta-contrato txt-titulo-tarjeta-contrato">
                        <span className="fa fa-clock-o"></span> Hasta
            </p>
                    <p className="hasta-tarjeta-contrato">
                        {contrato.hasta}
                    </p>
                    <p className="txt-lugar-tarjeta-contrato txt-titulo-tarjeta-contrato">
                        <span className="fa fa-map-marker"></span> Lugar
            </p>
                    <p className="lugar-tarjeta-contrato">
                        {contrato.lugar}
                    </p>
                    {this.props.ocultarBotones ?
                        null
                        :
                        <div className="botonera-tarjeta-contrato">
                            <button className="btn-tarjeta rojo" onClick={() => { this.props.abrirModalOpciones(contrato.id) }}>Confirmar</button>
                            <button className="btn-tarjeta agua" onClick={() => { this.props.abrirModalGestion(contrato.id) }}
                            >Inscritos</button>
                            <button className="btn-tarjeta verde" onClick={() => { this.props.abrirModalDetalle(contrato.id) }}>Detalles</button>

                        </div>
                    }
                </div>

            </>
        )
    }
}


export default TarjetaClase;