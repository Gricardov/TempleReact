import * as Acciones from './Acciones';

export const Lideres = (state={

    estaCargando:true,
    mensError:null,
    lideres:[]

}, action)=>{

    switch (action.type){

        case Acciones.LIDERES_OBTENIDOS:
            return {...state, estaCargando:false, mensError:null, lideres:action.payload}

        case Acciones.CARGANDO_LIDERES:
            return {...state, estaCargando:true, mensError:null, lideres:[]}

        case Acciones.ERROR_LIDERES:
            return {...state, estaCargando:false, mensError:action.payload, lideres:[]}

        default:
            return state;
    }

}