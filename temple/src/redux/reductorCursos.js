import * as Acciones from './Acciones';

export const Cursos = (state={

    estaCargando:false,
    mensError:null,
    cursos:[]

}, action)=>{

    switch (action.type){

        case Acciones.CURSOS_OBTENIDOS:
            return {...state, estaCargando:false, mensError:null, cursos:action.payload}

        case Acciones.CARGANDO_CURSOS:
            return {...state, estaCargando:true, mensError:null, cursos:[]}

        case Acciones.ERROR_CURSOS:
            return {...state, estaCargando:false, mensError:action.payload, cursos:[]}

        default:
            return state;
    }

}