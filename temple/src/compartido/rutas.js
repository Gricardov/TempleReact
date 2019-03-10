export const INICIO_BIENVENIDA={id:0,ruta:"/bienvenida"};
export const DESCARGAR_BIENVENIDA={id:1,ruta:"/descargar"};
export const INICIAR_SESION_BIENVENIDA={id:2,ruta:"/iniciarSesion"};
export const CONTACTO_BIENVENIDA={id:3,ruta:"/contacto"};
export const SOBRE_NOSOTROS_BIENVENIDA={id:4,ruta:"/sobreNosotros"};

export const ARREGLO_RUTAS=[INICIO_BIENVENIDA,DESCARGAR_BIENVENIDA,INICIAR_SESION_BIENVENIDA,
    CONTACTO_BIENVENIDA,SOBRE_NOSOTROS_BIENVENIDA];

export const deslizarDerecha=(rutaDesde, rutaHasta)=>{

    if (rutaDesde==="/" || rutaHasta==="/") return true;

    else {

    let desde=ARREGLO_RUTAS.filter((ruta)=>ruta.ruta===rutaDesde)[0];
    let hasta=ARREGLO_RUTAS.filter((ruta)=>ruta.ruta===rutaHasta)[0];
    
    return (hasta.id>desde.id?true:false);
    }
}
