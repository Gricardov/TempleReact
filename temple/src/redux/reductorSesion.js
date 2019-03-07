import * as Acciones from './Acciones';

export const EstadoSesion=(state={

    estaCargando:false,
    mensError:null,
    usuario:null

}, action)=>{

    switch(action.type){

        case Acciones.INICIANDO_SESION:
            return {...state, estaCargando:true, mensError:null, usuario:null}
        case Acciones.SESION_INICIADA:
            return {...state, estaCargando:false, mensError:null, usuario:action.payload}
        case Acciones.SESION_NO_INICIADA:
            return {...state, estaCargando:false, mensError:action.payload, usuario:null}
        default:
            return state;
    }



}