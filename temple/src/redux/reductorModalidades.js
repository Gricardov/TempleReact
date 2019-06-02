import * as Acciones from './Acciones';

export const Modalidades=(state={

    estaCargando:false,
    mensError:null,
    modalidades:[]

}, action)=>{

    switch(action.type){

        case Acciones.CARGANDO_MODALIDADES:
            return {...state, estaCargando:true, mensError:null, modalidades:[]}
        case Acciones.MODALIDADES_OBTENIDAS:
            return {...state, estaCargando:false, mensError:null, modalidades:action.payload}
        case Acciones.ERROR_MODALIDADES:
            return {...state, estaCargando:false, mensError:action.payload, modalidades:[]}
        default:
            return state;
    }



}