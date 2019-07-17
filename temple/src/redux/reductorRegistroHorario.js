import * as Acciones from './Acciones';

export const RegistroHorario = (state = {

    estaCargando: false,
    mensError: null,
    respuesta: {}

}, action) => {

    switch (action.type) {

        case Acciones.HORARIOS_ACTUALIZADOS:
            return { ...state, estaCargando: false, mensError: null, respuesta: action.payload }

        case Acciones.ACTUALIZANDO_HORARIOS:
            return { ...state, estaCargando: true, mensError: null, respuesta: {} }

        case Acciones.ERROR_ACTUALIZACION_HORARIOS:
            return { ...state, estaCargando: false, mensError: action.payload, respuesta: {} }

        default:
            return state;
    }

}