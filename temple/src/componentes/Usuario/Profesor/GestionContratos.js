import React, { Component } from 'react';
import { Fade, Transform } from 'react-animation-components';
import TarjetaContrato from '../../Utilidades/TarjetaContrato';
import ModalCuadriculaAlumnos from '../../Utilidades/ModalCuadriculaAlumnos';
import ModalInfoDetalle from '../../Utilidades/ModalInfoDetalle';

import './GestionContratos.css';

class GestionContratos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalDetalleAbierto: false,
            modalOpcionesAbierto: false,
            modalGestionAbierto: false,
            idContratoSeleccionado: null
        };
    }

    render() {

        let contratos = [];

        if (this.props.contratos) {
            contratos = this.props.contratos.map((e, i) => {
                return <TarjetaContrato key={i} contrato={e}
                    abrirModalDetalle={(id) => { this.setState({ modalDetalleAbierto: true, idContratoSeleccionado: id }) }}
                    abrirModalGestion={(id) => { this.setState({ modalGestionAbierto: true, idContratoSeleccionado: id }) }}
                    abrirModalOpciones={(id) => { this.setState({ modalOpcionesAbierto: true, idContratoSeleccionado: id }) }}

                />
            })
        }

        return (
            <>
                <div className="perfil-debajo-barra contenedor-gestion-contratos-css-grid panel-fondo">
                    <h1 className="titulo-gestion">Gestión de contratos: Últimos</h1>
                    <div className="botonera">
                        <button className="btn-gestion visible">Estadísticas</button>
                        <button className="btn-gestion visible" onClick={() => { this.setState({ buscar: true }) }}>
                            <i className="fa fa-search"></i></button>
                    </div>
                    <div className="tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido">
                        {contratos}
                    </div>
                </div>
                <ModalInfoDetalle abierto={this.state.modalDetalleAbierto} 
                detalles={{mostrarEstadisticas:false, infoEstadisticas:{},
                    detalles:[
                        {nombre:"Código de clase", valor:"UN4M4n4n4L1Nd4"},
                        {nombre:"Desde", valor:"Hoy a las 16:00"},
                        {nombre:"Hasta", valor:"Hoy a las 20:00"},
                        {nombre:"Lugar", valor:"Mi lugar (Ver en mapa)"},
                        {nombre:"Tipo de clase", valor:"Magistral"},
                        {nombre:"Régimen", valor:"No aplica"},
                        {nombre:"Estado", valor:"Confirmado por el profesor"},
                        {nombre:"Número de inscritos", valor:"2"},
                        {nombre:"Número de asistente", valor:"2"},
                        {nombre:"Número de cupones creados", valor:"16"},
                        {nombre:"Número de cupones usados", valor:"0"},
                        {nombre:"Total a pagar", valor:"150.00"},
                        {nombre:"Total pagado", valor:"0.00"}
                        
                    ]}}
                cerrar={() => { this.setState({ modalDetalleAbierto: false, idContratoSeleccionado: null }) }}/>

                <ModalCuadriculaAlumnos abierto={this.state.modalGestionAbierto}
                    inscritos={[
                    { idInscripcion: 1, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'Mila luna', idEstado: 1, estado: 'Asistió hoy a las 16:43' },
                    { idInscripcion: 2, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'Titán Rojas', idEstado: 2, estado: 'En camino' },
                    { idInscripcion: 3, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'Aldo Bartra', idEstado: 2, estado: 'En camino' },
                    { idInscripcion: 4, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'Bacilos Caraluna', idEstado: 3, estado: 'No asistió' },
                    { idInscripcion: 5, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'José Soto', idEstado: 3, estado: 'No asistió' },
                    { idInscripcion: 6, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'Lisa Simpson', idEstado: 2, estado: 'En camino' }]}
                    cerrar={() => { this.setState({ modalGestionAbierto: false, idContratoSeleccionado: null }) }}/>
            </>
        )
    }

}

export default GestionContratos;