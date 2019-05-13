import React, { Component } from 'react';
import Presentación from '../Usuario/Alumno/Presentacion';
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
            <>
                <div>
                    <ul id="tabs-list" className="row">
                        <li id="li-for-panel-1" className="col-3" onClick={() => { this.mostrarPestana(1) }}>
                            <label className="panel-label" id="pstPresentacion"
                                htmlFor="panel-1-ctrl">Presentación</label>
                        </li>
                        <li id="li-for-panel-2" className="col-3" onClick={() => { this.mostrarPestana(2) }}>
                            <label className="panel-label" id="pstCursos"
                                htmlFor="panel-2-ctrl">Cursos</label>
                        </li>
                        <li id="li-for-panel-3" className="col-3" onClick={() => { this.mostrarPestana(3) }}>
                            <label className="panel-label" id="pstHorarios"
                                htmlFor="panel-3-ctrl">Horarios</label>
                        </li>
                        <li id="li-for-panel-4" className="col-3" onClick={() => { this.mostrarPestana(4) }}>
                            <label className="panel-label" id="pstUbicacion"
                                htmlFor="panel-4-ctrl">Ubicación</label>
                        </li>
                    </ul>
                </div>
                <div>
                    {
                        this.state.pestanaVisible == 1
                            ?
                                <Presentación />
                            :
                            this.state.pestanaVisible == 2
                                ?
                                    <Cursos cursos={[{id:'1',nombre:'Matemáticas',descripcion:'Curso 1'},
                                    {id:'2',nombre:'Inglés',descripcion:'Curso 2'},
                                    {id:'3',nombre:'Francés',descripcion:'Curso 3'},
                                    {id:'4',nombre:'Alemán',descripcion:'Curso 4'},
                                    {id:'5',nombre:'Español',descripcion:'Curso 5'}]}/>
                                :
                                this.state.pestanaVisible == 3
                                    ?
                                    <div>
                                        Horarios
                                    </div>
                                    :
                                    <div>
                                        Ubicación
                                    </div>
                    }
                </div>
            </>
        )
    }

}

export default Pestana;