import React, { Component } from 'react';
import Publicaciones from '../Usuario/Alumno/Publicaciones';
import Cursos from '../Usuario/Alumno/Cursos';
import Horarios from '../Usuario/Alumno/Horarios';
import Ubicación from '../Usuario/Alumno/Ubicacion';

class Pestana extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pestanaVisible: 1
        };
        this.mostrarPestana = this.mostrarPestana.bind(this);
    }

    mostrarPestana(numero) {
        this.setState({
            pestanaVisible: numero
        })
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
                <div className="p-4">
                    {
                        this.state.pestanaVisible == 1
                                ?
                                <Publicaciones publicaciones={this.props.publicaciones} perfil={this.props.perfil}/>
                                :
                            this.state.pestanaVisible == 2
                                ?
                                    <Cursos cursos={this.props.preferencias}/>
                                :
                                this.state.pestanaVisible == 3
                                    ?
                                    <div>
                                        <Horarios eventos={[{id:0,title:'Disponible',start:new Date("May 16, 2019 23:00:00:00"),end:new Date("May 16, 2019 23:40:00:00"),editable:false,color:'green'}]}/>
                                    </div>
                                    :
                                    <div>
                                        <Ubicación posicion={this.props.ubicacion}/>
                                    </div>
                    }
                </div>
            </div>
        )
    }

}

export default Pestana;