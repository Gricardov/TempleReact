import * as Acciones from './Acciones';

export const RegistroPublicacion = (state={

    estaCargando:false,
    mensError:null,
    respuesta:{}

}, action)=>{

    switch (action.type){

        case Acciones.PUBLICACION_REGISTRADA:
            return {...state, estaCargando:false, mensError:null, respuesta:action.payload}

        case Acciones.REGISTRANDO_PUBLICACION:
            return {...state, estaCargando:true, mensError:null, respuesta:{}}

        case Acciones.ERROR_REGISTRO_PUBLICACION:
            return {...state, estaCargando:false, mensError:action.payload, respuesta:{}}

        default:
            return state;
    }

}