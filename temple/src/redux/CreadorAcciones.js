import * as Acciones from './Acciones';
import {LIDERES} from '../compartido/lideres'; 

export const obtenerLideres=()=>(dispatch)=>{

    dispatch(cargandoLideres());

    setTimeout(()=>{

        dispatch(lideresObtenidos(LIDERES))

    },2000);

}

export const cargandoLideres=()=>({

    type: Acciones.CARGANDO_LIDERES,
    
});

export const lideresObtenidos=(lideres)=>({

    type: Acciones.OBTENER_LIDERES,
    payload: lideres

});

export const errorLideres=(mensErr)=>({

    type: Acciones.ERROR_LIDERES,
    payload: mensErr

});