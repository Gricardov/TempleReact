import * as Acciones from './Acciones';

export const ProfesoresBusquedaChatBot = (state={

    estaCargando:false,
    mensError:null,
    profesores:[]

}, action)=>{
    switch (action.type){

        case Acciones.PROFESORES_OBTENIDOS_BUSQUEDA_CHATBOT:
            return {...state, estaCargando:false, mensError:null, profesores:action.payload}

        case Acciones.CARGANDO_PROFESORES_BUSQUEDA_CHATBOT:
            return {...state, estaCargando:true, mensError:null, profesores:[]}

        case Acciones.ERROR_PROFESORES_BUSQUEDA_CHATBOT:
            return {...state, estaCargando:false, mensError:action.payload, profesores:[]}

        default:
            return state;
    }

}