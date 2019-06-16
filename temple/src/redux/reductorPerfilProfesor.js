import * as Acciones from './Acciones';

export const PerfilProfesor = (state={

    estaCargando:false,
    mensError:null,
    perfil:{}

}, action)=>{

    switch (action.type){

        case Acciones.PERFIL_PROFESOR_OBTENIDO:
            return {...state, estaCargando:false, mensError:null, perfil:action.payload}

        case Acciones.CARGANDO_PERFIL_PROFESOR:
            return {...state, estaCargando:true, mensError:null, perfil:{}}

        case Acciones.ERROR_PERFIL_PROFESOR:
            return {...state, estaCargando:false, mensError:action.payload, perfil:{}}

        default:
            return state;
    }

}