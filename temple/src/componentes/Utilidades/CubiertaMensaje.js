import React, { Component } from 'react';
import { connect } from 'react-redux';
import {cambiarSeleccionPublicador} from '../../redux/CreadorAcciones';

const mapStateToProps = (state) => {

    return {        
        enfasis: state.enfasis
    }

}

const mapDispatchToProps = (dispatch) => ({
    cambiarSeleccionPublicador: (estado) => dispatch(cambiarSeleccionPublicador(estado))   
})

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
                            {
                                this.props.estaCargando
                                    ?
                                    <div className="loading">Loading&#8230;</div>
                                    :
                                    null
                            }
                        </div>
                        :
                        null
                }

            </>
        )

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CubiertaMensaje)
