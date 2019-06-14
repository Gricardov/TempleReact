import React, { Component } from 'react';
import Cargando from '../Utilidades/CargandoComponente';

class Sugerencias extends Component {

    render() {

        if (this.props.cargandoResultados) {

            return <div className="autocomplete-items"><Cargando mensaje="Cargando resultados..." medida="fa-2x"/></div>

        } else {
            let resultados = this.props.resultados.map((e, i) => (
                <div key={e.ID_CUR} onClick={() => {
                    this.props.modificarPreferencia({ id: e.ID_CUR, texto: e.NOM_CUR })
                }}>
                    <strong>{e.NOM_CUR}</strong> - Perteneciente a la categoría Ciencias de la computación
                <br />
                    Relacionados:{' '}
                    <span className="badge badge-pill badge-primary">ruby</span>{' '}
                    <span className="badge badge-pill badge-success">sql</span>{' '}
                    <span className="badge badge-pill badge-info">sarita</span>
                </div>
            ));

            return <div className="autocomplete-items">{resultados}</div>

        }



    }
}

export default Sugerencias;