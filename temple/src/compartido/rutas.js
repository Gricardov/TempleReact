export const INICIO_BIENVENIDA={id:0,ruta:"/bienvenida"};
export const DESCARGAR_BIENVENIDA={id:1,ruta:"/descargar"};
export const INICIAR_SESION_BIENVENIDA={id:2,ruta:"/iniciarSesion"};
export const CONTACTO_BIENVENIDA={id:3,ruta:"/contacto"};
export const SOBRE_NOSOTROS_BIENVENIDA={id:4,ruta:"/sobreNosotros"};
export const MISION_VISION_BIENVENIDA={id:5,ruta:"/bienvenida"};
export const TERMINOS_USO_BIENVENIDA={id:6,ruta:"/bienvenida"};
export const PREGUNTAS_FRECUENTES_BIENVENIDA={id:7,ruta:"/bienvenida"};
export const REGISTRO_PROFESOR_BIENVENIDA={id:8,ruta:"/bienvenida"};
export const REGISTRO_ALUMNO_BIENVENIDA={id:9,ruta:"/bienvenida"};

export const ARREGLO_RUTAS=[INICIO_BIENVENIDA,DESCARGAR_BIENVENIDA,INICIAR_SESION_BIENVENIDA,
    CONTACTO_BIENVENIDA,SOBRE_NOSOTROS_BIENVENIDA];

export const deslizarDerecha=(rutaDesde, rutaHasta)=>{

    if (rutaDesde==="/" || rutaHasta==="/" || (!rutaDesde) || (!rutaHasta)) return true;

    else {

    let desde=ARREGLO_RUTAS.filter((ruta)=>ruta.ruta===rutaDesde)[0];
    let hasta=ARREGLO_RUTAS.filter((ruta)=>ruta.ruta===rutaHasta)[0];
    
    return (hasta.id>desde.id?true:false);
    }
}
