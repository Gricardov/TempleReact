import * as Acciones from './Acciones';

export const Niveles = (state={

    estaCargando:false,
    mensError:null,
    niveles:[]

}, action)=>{

    switch (action.type){

        case Acciones.NIVELES_OBTENIDOS:
            return {...state, estaCargando:false, mensError:null, niveles:action.payload}

        case Acciones.CARGANDO_NIVELES:
            return {...state, estaCargando:true, mensError:null, niveles:[]}

        case Acciones.ERROR_NIVELES:
            return {...state, estaCargando:false, mensError:action.payload, niveles:[]}

        default:
            return state;
    }

}