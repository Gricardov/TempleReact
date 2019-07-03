import React, { Component } from 'react';
import Publicaciones from '../Usuario/Alumno/Publicaciones';
import Cursos from '../Usuario/Alumno/Cursos';
import Horarios from '../Usuario/Alumno/Horarios';
import Ubicación from '../Usuario/Alumno/Ubicacion';
import { seleccionarPestanaPerfilContrato } from '../../redux/CreadorAcciones';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    return {
        contrato: state.contrato
    }

}

const mapDispatchToProps = (dispatch) => ({

    seleccionarPestanaPerfilContrato: (numPestana) => dispatch(seleccionarPestanaPerfilContrato(numPestana))
})

class Pestana extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.mostrarPestana = this.mostrarPestana.bind(this);
    }

    mostrarPestana(numero) {
        this.props.seleccionarPestanaPerfilContrato(numero)
    }

    render() {
        return (
            <div className="tarjeta-seccion seccion-pestanas-cursos quickfade">
                <div>
                    <ul id="tabs-list" className="row">
                        <li id="li-for-panel-1" className="col-3">
                            <label className="panel-label" id="pstPublicaciones" onClick={() => { this.mostrarPestana(1) }}
                                htmlFor="panel-1-ctrl">Publicaciones</label>
                        </li>
                        <li id="li-for-panel-2" className="col-3">
                            <label className="panel-label" id="pstCursos" onClick={() => { this.mostrarPestana(2) }}
                                htmlFor="panel-2-ctrl">Cursos</label>
                        </li>
                        <li id="li-for-panel-3" className="col-3">
                            <label className="panel-label" id="pstHorarios" onClick={() => { this.mostrarPestana(3) }}
                                htmlFor="panel-3-ctrl">Horarios</label>
                        </li>
                        <li id="li-for-panel-4" className="col-3">
                            <label className="panel-label" id="pstUbicacion" onClick={() => { this.mostrarPestana(4) }}
                                htmlFor="panel-4-ctrl">Ubicación</label>
                        </li>
                    </ul>
                </div>
                <div className="p-4" style={{ zIndex: '999999', position: 'relative' }}>
                    {
                        this.props.contrato.seleccionada == 1
                            ?
                            <Publicaciones publicaciones={this.props.publicaciones} perfil={this.props.perfil} />
                            :
                            this.props.contrato.seleccionada == 2
                                ?
                                <Cursos cursos={this.props.preferencias} pasoActual={this.props.pasoActual}
                                    establecerIdCurso={this.props.establecerIdCurso}
                                    establecerIdModalidad={this.props.establecerIdModalidad} />
                                :
                                this.props.contrato.seleccionada == 3
                                    ?
                                    <Horarios eventos={this.props.horarios} establecerHorario={this.props.establecerHorario}/>
                                    :
                                    <Ubicación posicion={this.props.ubicacion} />
                    }
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Pestana)