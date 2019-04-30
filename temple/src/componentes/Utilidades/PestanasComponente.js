import React, { Component } from 'react';

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
                            <div>
                                Presentación
                            </div>
                            :
                            this.state.pestanaVisible == 2
                                ?
                                <div>
                                    Cursos
                            </div>
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