import * as Acciones from './Acciones';

export const Barra = (state = 
    {
    opciones:[],
    seleccionado:0
},action)=>{

    switch (action.type){

        case Acciones.ESTABLECER_OPCIONES_BARRA:
            return {...state, opciones: action.payload}
        case Acciones.SELECCIONAR_OPCION_BARRA:
            return {...state, seleccionado: action.payload}
            default:
                    return state;
    }

}