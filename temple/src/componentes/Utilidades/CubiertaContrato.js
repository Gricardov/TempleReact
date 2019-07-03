import React, { Component } from 'react';

class CubiertaContrato extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                {
                    this.props.pasoActual != -1
                        ?
                        this.props.pasoActual == 1
                            ?
                            <div className="cubierta-mensaje">
                                <div className="texto-cubierta-contrato">Selecciona curso y modalidad
                                {' '}
                                    <button className="btn-social btn-social-azul" onClick={() => {
                                        this.props.establecerPasoContrato(this.props.pasoActual + 1);
                                        this.props.seleccionarPestanaPerfilContrato(3)                               
                                        }}>
                                        Siguiente
                                        </button>
                                        {' '}
                                        <button className="btn-social btn-social-rojo" onClick={() => this.props.establecerPasoContrato(-1)}>
                                        Cancelar
                                        </button>
                                </div>
                            </div>
                            :
                            this.props.pasoActual == 2
                            ?
                            <div className="cubierta-mensaje">
                                <div className="texto-cubierta-contrato">Selecciona horario
                                {' '}
                                    <button className="btn-social btn-social-azul" onClick={() => {
                                        this.props.establecerPasoContrato(this.props.pasoActual + 1);
                                        }}>
                                        Finalizar
                                        </button>
                                        {' '}
                                        <button className="btn-social btn-social-rojo" onClick={() => this.props.establecerPasoContrato(-1)}>
                                        Cancelar
                                        </button>
                                </div>
                            </div>
                            :
                            null
                        :
                        null
                }

            </>
        )

    }

}

export default CubiertaContrato;