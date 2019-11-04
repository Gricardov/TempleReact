export const INICIO_BIENVENIDA={id:0,ruta:"/bienvenida"};
export const DESCARGAR_BIENVENIDA={id:1,ruta:"/descargar"};
export const INICIAR_SESION_BIENVENIDA={id:2,ruta:"/iniciarSesion"};
export const CONTACTO_BIENVENIDA={id:3,ruta:"/contacto"};
export const SOBRE_NOSOTROS_BIENVENIDA={id:4,ruta:"/sobreNosotros"};
export const MISION_VISION_BIENVENIDA={id:5,ruta:"/bienvenida"};
export const TERMINOS_USO_BIENVENIDA={id:6,ruta:"/bienvenida"};
export const PREGUNTAS_FRECUENTES_BIENVENIDA={id:7,ruta:"/bienvenida"};
export const REGISTRO_PROFESOR_BIENVENIDA={id:8,ruta:"/registroProfesor"};
export const REGISTRO_ALUMNO_BIENVENIDA={id:9,ruta:"/registroAlumno"};
export const INICIO_ALUMNO={id:10,ruta:"/inicioAlumno"};
export const INICIO_PROFESOR={id:11,ruta:"/inicioProfesor"};
export const PERFIL_PROFESOR_ALUMNO={id:12,ruta:"/perfilProfesor"};
export const MI_PERFIL_ALUMNO={id:13,ruta:"/miPerfilAlumno"};
export const MI_PERFIL_PROFESOR={id:14,ruta:"/miPerfilProfesor"};
export const MIS_CITAS_PROFESOR={id:15,ruta:"/misCursosProfesor"};
export const MIS_HORARIOS_PROFESOR={id:16,ruta:"/misHorariosProfesor"};
export const MIS_CITAS_ALUMNO={id:17,ruta:"/misCitasAlumno"};
export const MIS_ALUMNOS_PROFESOR={id:18,ruta:"/misAlumnosProfesor"}
export const MIS_CONTRATOS_PROFESOR={id:19,ruta:"/misContratosProfesor"}


export const ARREGLO_RUTAS=[INICIO_BIENVENIDA,DESCARGAR_BIENVENIDA,INICIAR_SESION_BIENVENIDA,
    CONTACTO_BIENVENIDA,SOBRE_NOSOTROS_BIENVENIDA,MISION_VISION_BIENVENIDA,TERMINOS_USO_BIENVENIDA,
    PREGUNTAS_FRECUENTES_BIENVENIDA,REGISTRO_PROFESOR_BIENVENIDA,REGISTRO_ALUMNO_BIENVENIDA,INICIO_ALUMNO,
    INICIO_PROFESOR,PERFIL_PROFESOR_ALUMNO,MI_PERFIL_ALUMNO,MI_PERFIL_PROFESOR, MIS_CITAS_PROFESOR,
    MIS_HORARIOS_PROFESOR,MIS_CITAS_ALUMNO,MIS_ALUMNOS_PROFESOR,MIS_CONTRATOS_PROFESOR];

export const deslizarDerecha=(rutaDesde, rutaHasta)=>{

    if (rutaDesde==="/" || rutaHasta==="/") return true;

    else {

    let desde=ARREGLO_RUTAS.filter((ruta)=>ruta.ruta===rutaDesde)[0];
    let hasta=ARREGLO_RUTAS.filter((ruta)=>ruta.ruta===rutaHasta)[0];
    
    return (desde===undefined || hasta===undefined?true:(hasta.id>desde.id?true:false));

    }
}
