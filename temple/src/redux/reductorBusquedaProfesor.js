import * as Acciones from './Acciones';

export const ProfesoresBusqueda = (state={

    estaCargando:false,
    mensError:null,
    profesores:[]

}, action)=>{
    switch (action.type){

        case Acciones.PROFESORES_OBTENIDOS_BUSQUEDA:
            return {...state, estaCargando:false, mensError:null, profesores:action.payload}

        case Acciones.CARGANDO_PROFESORES_BUSQUEDA:
            return {...state, estaCargando:true, mensError:null, profesores:[]}

        case Acciones.ERROR_PROFESORES_BUSQUEDA:
            return {...state, estaCargando:false, mensError:action.payload, profesores:[]}

        default:
            return state;
    }

}