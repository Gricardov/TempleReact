import React, { Component } from 'react';

const Opciones = (props) => {
    //alert(JSON.stringify(props.opciones) + " " + JSON.stringify(props.seleccionados))
    // Puede haber uno o varios seleccionados

    const opciones = props.opciones.map((e, i) => {



        return (
            <option key={i} value={e.id} selected={

                // Si hay seleccionados, los recorro. Verifico si algún id coincide
                props.seleccionados.filter(seleccionado => seleccionado == e.id)[0]
                    ?
                    // Si coincide alguno, debe mostrarse seleccionado
                    true
                    :
                    // Si no, falso
                    false


            }> {e.texto}</option >
        )
    })

    return (
        opciones
    );

}

export default Opciones;