import * as Acciones from './Acciones';

export const Usuario = (state={

    estaCargando:false,
    mensError:null,
    usuario:{}

}, action)=>{

    switch (action.type){

        case Acciones.USUARIO_OBTENIDO:
            return {...state, estaCargando:false, mensError:null, usuario:action.payload}

        case Acciones.CARGANDO_USUARIO:
            return {...state, estaCargando:true, mensError:null, usuario:{}}

        case Acciones.ERROR_USUARIO:
            return {...state, estaCargando:false, mensError:action.payload, usuario:[]}

        default:
            return state;
    }

}