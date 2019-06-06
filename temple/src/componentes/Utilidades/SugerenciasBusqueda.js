import React, { Component } from 'react';

const Sugerencias = (props) => {

    const options = props.resultados.map((e, i) => (
        <div key={e.ID_CUR} onClick={() => {
            props.modificarPreferencia(props.indice, { id: e.ID_CUR, texto: e.NOM_CUR })
        }}>
            <strong>{e.NOM_CUR}</strong> - Perteneciente a la categoría Ciencias de la computación
            <br />
            Relacionados:{' '}
            <span className="badge badge-pill badge-primary">ruby</span>{' '}
            <span className="badge badge-pill badge-success">sql</span>{' '}
            <span className="badge badge-pill badge-info">sarita</span>
        </div>
    ))
    return <div className="autocomplete-items">{options}</div>
}

export default Sugerencias;