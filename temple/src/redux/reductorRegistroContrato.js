import * as Acciones from './Acciones';

export const RegistroContrato = (state={

    estaCargando:false,
    resultado:null

}, action)=>{

    switch (action.type){

        case Acciones.CONTRATO_REGISTRADO:
            return {...state, estaCargando:false, resultado:action.payload}

        case Acciones.REGISTRANDO_CONTRATO:
            return {...state, estaCargando:true, resultado:null}

        case Acciones.ERROR_REGISTRO_CONTRATO:
            return {...state, estaCargando:false, resultado:action.payload}

        default:
            return state;
    }

}