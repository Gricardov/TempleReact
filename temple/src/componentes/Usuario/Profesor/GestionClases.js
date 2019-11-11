import React, { Component } from 'react';
import { Fade, Transform } from 'react-animation-components';
import TarjetaClase from '../../Utilidades/TarjetaClase';
import ModalCuadriculaAlumnos from '../../Utilidades/ModalCuadriculaAlumnos';
import ModalInfoDetalle from '../../Utilidades/ModalInfoDetalle';
import Horario from './Horario';

import { establecerOpcionesBarra, seleccionarOpcionBarra } from '../../../redux/CreadorAcciones';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import SelectorPastillas from '../../Utilidades/SelectorPastillas';
import moment from 'moment';

import './GestionClases.css';
import './GestionHorarios.css';

const mapDispatchToProps = (dispatch) => ({
    establecerOpcionesBarra: (opciones) => dispatch(establecerOpcionesBarra(opciones)),
    seleccionarOpcionBarra: (opcion) => dispatch(seleccionarOpcionBarra(opcion))

})

const mapStateToProps = (state) => {

    return {
        barra: state.barra
    }

}

class GestionContratos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipoVista: 1,
            selectores: [
                { id: 0, nombre: "Últimas", icono: 'fa fa-list' },
                { id: 1, nombre: "Buscar", icono: 'fa fa-search' },
                { id: 2, nombre: "Estadísticas", icono: 'fa fa-line-chart' }
            ],
            diasSemana: [],
            indiceDiaSemana:0,
            modalDetalleHorarioAbierto: false,
            modalAgregarHorarioAbierto: false,
            modalOpcionesAbierto: false,
            modalGestionAbierto: false,
            idContratoSeleccionado: null
        };
        this.props.establecerOpcionesBarra(this.state.selectores);
        this.props.seleccionarOpcionBarra(0);
        
    }

    componentDidMount(){
        // Genero los días de la semana
        let fechaActual = moment();
        let inicioSemana = fechaActual.clone().startOf('isoWeek');
        let finSemana = fechaActual.clone().endOf('isoWeek');
        let diaActual=fechaActual.clone().format('D');

        let diasSemana = [];
        for (let i = 0; i <= 6; i++) {
            // Genero los días de la semana
            let cadenaDia = moment(inicioSemana).add(i, 'days').format("dddd D").toString();

            diasSemana.push({nombre:cadenaDia[0].toUpperCase() + cadenaDia.slice(1)});

            // Si un día de la semana coincide con la fecha actual, que guarde el índice correspondiente
            if (moment(inicioSemana).add(i,'days').format("D").toString()==fechaActual.clone().format('D')){
                this.setState({indiceDiaSemana:i})
            }

        }

        this.setState({ diasSemana: diasSemana })
    }

    render() {

        let contenido = [];
        switch (this.state.tipoVista) {
            case 1:

                contenido = renderizarLista(this.props.contratos)
                break;

            case 2:
                contenido = renderizarHorario(this.props.horarios, this.state.modalDetalleHorarioAbierto,
                    this.state.modalAgregarHorarioAbierto,
                    (estado) => { this.setState({ modalDetalleHorarioAbierto: estado }) },
                    (estado) => { this.setState({ modalAgregarHorarioAbierto: estado }) })
                break;
        }

        return (
            <>
                <div className="perfil-debajo-barra contenedor-gestion-contratos-css-grid panel-fondo">
                    <h1 className="titulo-gestion">Gestionar clases: Octubre 2019</h1>
                    <div className="botonera">
                        <div className="radio-boton">
                            <input type="radio" onChange={() => this.setState({ 'tipoVista': 1 })} name="rd-tipo-vista-clase" id="rd-lista" defaultChecked={this.state.tipoVista == 1} />
                            <label htmlFor="rd-lista"><i className="fa fa-list" /> Lista</label>
                            <input type="radio" onChange={() => this.setState({ 'tipoVista': 2 })} name="rd-tipo-vista-clase" id="rd-horario" defaultChecked={this.state.tipoVista == 2} />
                            <label htmlFor="rd-horario"><i className="fa fa-calendar" /> Horario</label>
                        </div>
                        <button className="btn-gestion visible" onClick={() => { this.setState({ modalDetalleAbierto: true }) }}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button className="btn-gestion visible"><i className="fa fa-bar-chart"></i></button>
                        <button className="btn-gestion visible" onClick={() => { this.setState({ buscar: true }) }}>
                            <i className="fa fa-search"></i></button>
                    </div>
                    {
                        this.state.tipoVista == 1
                            ?
                            <div className="selector-semana">
                                <SelectorPastillas pestanas={this.state.diasSemana}
                                    pestanasVisibles={7}
                                    indiceSeleccion={this.state.indiceDiaSemana}
                                    seleccionar={(indice)=>this.setState({indiceDiaSemana:indice})}
                                />
                            </div>
                            :
                            null

                    }
                    <div className="tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido">
                        {contenido}
                    </div>
                </div>

                <ModalInfoDetalle abierto={this.state.modalDetalleAbierto}
                    detalles={{
                        mostrarEstadisticas: false, infoEstadisticas: {},
                        detalles: [
                            { nombre: "Código de clase", valor: "UN4M4n4n4L1Nd4" },
                            { nombre: "Desde", valor: "Hoy a las 16:00" },
                            { nombre: "Hasta", valor: "Hoy a las 20:00" },
                            { nombre: "Lugar", valor: "Mi lugar (Ver en mapa)" },
                            { nombre: "Tipo de clase", valor: "Magistral" },
                            { nombre: "Régimen", valor: "No aplica" },
                            { nombre: "Estado", valor: "Confirmado por el profesor" },
                            { nombre: "Número de inscritos", valor: "2" },
                            { nombre: "Número de asistente", valor: "2" },
                            { nombre: "Número de cupones creados", valor: "16" },
                            { nombre: "Número de cupones usados", valor: "0" },
                            { nombre: "Total a pagar", valor: "150.00" },
                            { nombre: "Total pagado", valor: "0.00" }

                        ]
                    }}
                    cerrar={() => { this.setState({ modalDetalleAbierto: false, idContratoSeleccionado: null }) }} />

                <ModalCuadriculaAlumnos abierto={this.state.modalGestionAbierto}
                    inscritos={[
                        { idInscripcion: 1, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'Mila luna', idEstado: 1, estado: 'Asistió hoy a las 16:43' },
                        { idInscripcion: 2, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'Titán Rojas', idEstado: 2, estado: 'En camino' },
                        { idInscripcion: 3, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'Aldo Bartra', idEstado: 2, estado: 'En camino' },
                        { idInscripcion: 4, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'Bacilos Caraluna', idEstado: 3, estado: 'No asistió' },
                        { idInscripcion: 5, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'José Soto', idEstado: 3, estado: 'No asistió' },
                        { idInscripcion: 6, img: 'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp', nombres: 'Lisa Simpson', idEstado: 2, estado: 'En camino' }]}
                    cerrar={() => { this.setState({ modalGestionAbierto: false, idContratoSeleccionado: null }) }} />

            </>
        )
    }

}

const renderizarLista = (contratosRecibidos) => {
    let contratos = [];

    if (contratosRecibidos) {
        contratos = contratosRecibidos.map((e, i) => {
            return <TarjetaClase key={i} contrato={e}
                abrirModalDetalle={(id) => { this.setState({ modalDetalleAbierto: true, idContratoSeleccionado: id }) }}
                abrirModalGestion={(id) => { this.setState({ modalGestionAbierto: true, idContratoSeleccionado: id }) }}
                abrirModalOpciones={(id) => { this.setState({ modalOpcionesAbierto: true, idContratoSeleccionado: id }) }}

            />
        })
    }
    return contratos;
}
const renderizarHorario = (contratosRecibidos, modalDetalleAbierto, modalAgregarAbierto, cambiarEstadoModalDetalle, cambiarEstadoModalAgregar) => {

    return <Horario eventos={contratosRecibidos}
        modalDetalleAbierto={modalDetalleAbierto}
        modalAgregarAbierto={modalAgregarAbierto}
        cambiarEstadoModalDetalle={(estado) => { cambiarEstadoModalDetalle(estado) }}
        cambiarEstadoModalAgregar={(estado) => { cambiarEstadoModalAgregar(estado) }} />

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GestionContratos));
