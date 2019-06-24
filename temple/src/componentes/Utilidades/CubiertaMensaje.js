import React, { Component } from 'react';

class CubiertaMensaje extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {
                    this.props.estaCargando || this.props.mensError
                        ?
                        <div className="cubierta-mensaje">
                            <div className="texto-cubierta-mensaje">{this.props.mensError || this.props.mensaje}</div>
                        </div>
                        :
                        null
                }

            </>
        )

    }

}

export default CubiertaMensaje;