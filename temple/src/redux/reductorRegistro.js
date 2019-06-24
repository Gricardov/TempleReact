import * as Acciones from './Acciones';

export const Registro = (state={

    estaCargando:false,
    resultado:null

}, action)=>{

    switch (action.type){

        case Acciones.REGISTRO_USUARIO_EXITOSO:
            return {...state, estaCargando:false, resultado:action.payload}

        case Acciones.CARGANDO_REGISTRO_USUARIO:
            return {...state, estaCargando:true, resultado:null}

        case Acciones.ERROR_REGISTRO_USUARIO:
            return {...state, estaCargando:false, resultado:action.payload}

        default:
            return state;
    }

}