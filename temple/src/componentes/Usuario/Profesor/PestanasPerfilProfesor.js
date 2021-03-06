import React, { Component } from 'react';
import Publicaciones from '../../Utilidades/PublicacionesComponente';
import Cursos from '../../Utilidades/CursosComponente';
import Horario from './HorarioPerfil';
import Ubicación from '../../Utilidades/UbicacionComponente';
import Publicador from '../../Utilidades/PublicadorComponente';

class Pestanas extends Component {
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
                            <>
                                <Publicador usuario={{ IMG_PER: this.props.perfil.imgPer, COD_USU: this.props.perfil.codUsu }}
                                    registrarPublicacion={this.props.registrarPublicacion}
                                    registroPublicacion={this.props.registroPublicacion} />
                                <Publicaciones publicaciones={this.props.publicaciones} perfil={this.props.perfil} />
                            </>
                            :
                            this.props.contrato.seleccionada == 2
                                ?
                                <Cursos cursos={this.props.preferencias} pasoActual={this.props.pasoActual}
                                    establecerIdCurso={this.props.establecerIdCurso}
                                    establecerIdModalidad={this.props.establecerIdModalidad} />
                                :
                                this.props.contrato.seleccionada == 3
                                    ?
                                    <Horario eventos={this.props.horarios}
                                     establecerHorario={this.props.establecerHorario}
                                     seleccionable={false} />
                                    :
                                    <Ubicación posicion={this.props.ubicacion} />
                    }
                </div>
            </div>
        )
    }

}

export default Pestanas;