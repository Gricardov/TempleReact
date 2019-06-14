import * as Acciones from './Acciones';

export const Registro = (state={

    estaCargando:false,
    mensaje:null

}, action)=>{

    switch (action.type){

        case Acciones.REGISTRO_USUARIO_EXITOSO:
            return {...state, estaCargando:false, mensaje:action.payload}

        case Acciones.CARGANDO_REGISTRO_USUARIO:
            return {...state, estaCargando:true, mensaje:null}

        case Acciones.ERROR_REGISTRO_USUARIO:
            return {...state, estaCargando:false, mensaje:action.payload}

        default:
            return state;
    }

}