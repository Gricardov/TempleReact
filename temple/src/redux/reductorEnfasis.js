import * as Acciones from './Acciones';

export const Enfasis = (state={

    seleccionado: false

}, action)=>{
    switch (action.type){
        
        case Acciones.PUBLICADOR_CAMBIADO:
            return {...state, estado: action.payload}

        default:
            return state;
    }

}