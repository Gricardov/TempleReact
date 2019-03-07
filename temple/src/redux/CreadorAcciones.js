import * as Acciones from './Acciones';
import {LIDERES} from '../compartido/lideres'; 
import {URLBase} from '../compartido/URLBase';

// Métodos llamados desde la clase principal

export const obtenerLideres=()=>(dispatch)=>{

    dispatch(cargandoLideres());

    setTimeout(()=>{

        dispatch(lideresObtenidos(LIDERES))

    },2000);

}

export const iniciarSesion=(usuario, contrasena)=>(dispatch)=>{

    dispatch(iniciandoSesion());

    const logueo={

        login:usuario,
        contrasena:contrasena

    }

    return fetch(URLBase+'api/login',{

        method:'POST',
        body:JSON.stringify(logueo),
        headers:{

            'Content-type':'application/json'

        },
        credentials: 'same-origin'

    })
        .then(response=>{

            if (response.ok){

                return response;                

            }

            else {

                var error=new Error("Ha ocurrido un error con el siguiente mensaje:\n"+response.status+" : "+response.statusText);
                error.response=response;
                throw error;

            }


        }, error=>{

            var mensErr=new Error(error.message);
            throw mensErr;

        })
        .then(response=>response.json())
        .then(usuario=>{dispatch(sesionIniciada(usuario));

        })
        .catch(error=>{
            console.log("Sesión no iniciada : "+error.message)
            dispatch(sesionNoIniciada(error.message))

        })

    
}

// Eventos llamados indirectamente


// Líderes
export const cargandoLideres=()=>({

    type: Acciones.CARGANDO_LIDERES,
    
});

export const lideresObtenidos=(lideres)=>({

    type: Acciones.LIDERES_OBTENIDOS,
    payload: lideres

});

export const errorLideres=(mensErr)=>({

    type: Acciones.ERROR_LIDERES,
    payload: mensErr

});

// Iniciar sesión
export const iniciandoSesion=()=>({

    type: Acciones.INICIANDO_SESION,
    
});

export const sesionIniciada=(usuario)=>({

    type: Acciones.SESION_INICIADA,
    payload: usuario
});

export const sesionNoIniciada=(mensErr)=>({

    type: Acciones.SESION_NO_INICIADA,
    payload: mensErr

});