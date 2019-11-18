import React, { Component } from 'react';
import './TarjetaEjercicioGlobal.css';

class TarjetaEjercicioGlobal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="tarjeta-ejercicio-global tarjeta-contenedora">
                {
                    // Si es que hay imagen, que la considere dentro del grid
                    this.props.img
                        ?
                        <img alt="img-ejercicio-global" src={this.props.img}></img>
                        :
                        null
                }
                {
                    // Si es que hay imagen, que la considere dentro del grid
                    this.props.descripcion
                        ?
                        <div><p>{this.props.descripcion}</p></div>
                        :
                        null
                }
                <div className="etiquetas">
                    <div>Matemáticas</div>
                    <div>PreU</div>
                </div>
            </div>
        )
    }

}

export default TarjetaEjercicioGlobal;