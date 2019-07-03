import * as Acciones from './Acciones';

// Esto básicamente sirve para que un padre o un hijo puedan controlar la selección de pestañas para contratar dentro de un perfil
export const Contrato=(state={

    seleccionada:1,
    pasoActual:-1,
    datosContrato:{}

}, action)=>{
    
    switch(action.type){

        case Acciones.SELECCIONAR_PESTANA_PERFIL_CONTRATO:
            return {...state, seleccionada: action.payload}    
        case Acciones.ESTABLECER_PASO_CONTRATO:
            return {...state, pasoActual: action.payload}
        case Acciones.ESTABLECER_DATOS_CONTRATO:
            return {...state, datosContrato: action.payload}
        default:
            return state;
    }



}