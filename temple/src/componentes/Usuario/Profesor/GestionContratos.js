import React, { Component } from 'react';
import { Fade, Transform } from 'react-animation-components';
import TarjetaContrato from '../../Utilidades/TarjetaContrato';

import './GestionContratos.css';

class GestionContratos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalDetalleAbierto: false
        };
    }

    render() {

        let contratos = [];

        if (this.props.contratos) {
            contratos = this.props.contratos.map((e, i) => {
                return <TarjetaContrato key={i} contrato={e} revisarContrato={()=>{alert('revisando')}}/>
            })
        }

        return (
            <div className="perfil-debajo-barra contenedor-gestion-contratos-css-grid panel-fondo">
                <h1 className="titulo-gestion">Gestión de contratos: Últimos</h1>
                <button className="btn-gestion visible" onClick={() => { this.setState({ modalDetalleAbierto: true }) }}>
                    <i class="fa fa-search"></i> Buscar</button>

                <div className="tarjeta-contenedora-contenido-responsiva tarjeta-contenedora-contenido">
                    {contratos}
                </div>
            </div>
        )
    }

}

export default GestionContratos;