import * as Acciones from './Acciones';

export const ChatBot = (state={

    estaCargando:false,
    mensError:null,
    respuesta:{}

}, action)=>{

    switch (action.type){

        case Acciones.RESPUESTA_RECIBIDA_CHATBOT:
            return {...state, estaCargando:false, mensError:null, respuesta:action.payload}

        case Acciones.ENVIANDO_MENSAJE_CHATBOT:
            return {...state, estaCargando:true, mensError:null, respuesta:{}}

        case Acciones.ERROR_MENSAJE_CHATBOT:
            return {...state, estaCargando:false, mensError:action.payload, respuesta:{}}

        default:
            return state;
    }

}