import * as Acciones from './Acciones';
import { LIDERES } from '../compartido/lideres';
import { URLBase } from '../compartido/URLBase';
import { actions } from 'react-redux-form';

// Niveles
export const consultaNiveles = () => (dispatch) => {
    dispatch(cargandoNiveles());

    fetch(URLBase + 'curso/consulta/niveles/')
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                error.response = response;
                throw error;

            }

        }, error => {

            var mensErr = new Error(error.message);
            throw mensErr;

        })
        .then(response => response.json())
        .then(niveles => {
            // Lo convierto a un formato que un combox pueda leer
            const nivelesCombo = [];

            niveles.map((e, i) => {
                nivelesCombo.push({ texto: e.NOM_NIV, id: e.ID_NIV })
            })

            dispatch(nivelesObtenidos(nivelesCombo));

        })
        .catch(error => {
            console.log("No se pudo obtener los niveles : " + error.message)

            dispatch(errorNiveles(error.message))

        })
}

// Modalidades
export const consultaModalidades = () => (dispatch) => {
    dispatch(cargandoModalidades());

    fetch(URLBase + 'curso/consulta/modalidades/')
        .then(response => {

            if (response.ok) {
                return response;

            }

            else {

                var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                error.response = response;
                throw error;

            }

        }, error => {

            var mensErr = new Error(error.message);
            throw mensErr;

        })
        .then(response => response.json())
        .then(modalidades => {

            dispatch(modalidadesObtenidas(modalidades));

        })
        .catch(error => {
            console.log("No se pudo obtener las modalidades : " + error.message)

            dispatch(errorModalidades(error.message))

        })
}

// Sesión usuario
export const iniciarSesion = (usuario, contrasena) => (dispatch) => {

    dispatch(iniciandoSesion());

    const datos = {
        datos: {
            login: usuario,
            contrasena: contrasena
        }
    }

    return fetch(URLBase + 'usuario/login/', {

        method: 'POST',
        body: JSON.stringify(datos),
        headers: {

            'Content-type': 'application/json'

        },
        credentials: 'same-origin'

    })
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                error.response = response;
                throw error;

            }


        }, error => {

            var mensErr = new Error(error.message);
            throw mensErr;

        })
        .then(response => response.json())
        .then(usuario => {

            if (Object.keys(usuario).length === 0) {
                console.log("Sesión no iniciada : Datos incorrectos")
                dispatch(sesionNoIniciada("Datos incorrectos"))
            } else {
                dispatch(sesionIniciada(usuario));
            }
            //


        })
        .catch(error => {
            console.log("Sesión no iniciada : " + error.message)
            dispatch(sesionNoIniciada(error.message));

        })
}

// Registro usuario
export const registrarUsuario = (usuario) => (dispatch) => {

    dispatch(registrandoUsuario());
    // Se hace una validación para verificar si es alumno o profesor
    fetch(URLBase + (usuario.pasos[0].rol == 1 ? "profesor/registro" : "alumno/registro"), {

        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error('Error ' + response.status +
                    ': ' + response.statusText);
                error.response = response;
                throw error;

            }

        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;

            })
        .then(response => response.json())
        .then(resultado => {
            dispatch(usuarioRegistrado(resultado));

        })
        .catch(error => {
            dispatch(usuarioNoRegistrado(error));
            console.log('Error: ', error.message)
            alert('Error: ' + error.message)
        })

}



export const cerrarSesion = () => (dispatch) => {

    dispatch(sesionNoIniciada('Cerrado correctamente'));


}

// Usuario
export const consultaUsuarioPorNomUsu = (nomUsu) => (dispatch) => {

    dispatch(cargandoUsuario());

    fetch(URLBase + 'usuario/consulta/porNomUsu/' + nomUsu)
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                error.response = response;
                throw error;

            }

        }, error => {

            var mensErr = new Error(error.message);
            throw mensErr;

        })
        .then(response => response.json())
        .then(usuario => {
            dispatch(usuarioObtenido(usuario));

        })
        .catch(error => {
            console.log("No se pudo obtener el usuario : " + error.message)

            dispatch(errorUsuario(error.message))

        })
}

// Cursos
export const consultaCursosPorNombre = (nomCur) => (dispatch) => {

    dispatch(cargandoCursos());

    fetch(URLBase + 'curso/consulta/porNombre/' + nomCur)
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                error.response = response;
                throw error;

            }


        }, error => {

            var mensErr = new Error(error.message);
            throw mensErr;

        })
        .then(response => response.json())
        .then(cursos => {
            dispatch(cursosObtenidos(cursos));

        })
        .catch(error => {
            console.log("Error : " + error.message);
            dispatch(errorCursos(error.message));
        })
}

// Búsqueda profesores
export const consultaProfesoresPorIdCurso = (idCur, idNiv) => (dispatch) => {

    dispatch(cargandoProfesoresBusqueda());

    const datos = {
        datos: {
            idCur: idCur,
            idNiv: idNiv
        }
    }

    fetch(URLBase + 'usuario/profesor/consulta/porIdCurso', {

        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                error.response = response;
                throw error;

            }


        }, error => {

            var mensErr = new Error(error.message);
            throw mensErr;

        })
        .then(response => response.json())
        .then(profesores => {
            dispatch(profesoresObtenidosBusqueda(profesores));

        })
        .catch(error => {
            console.log("Error : " + error.message);
            dispatch(errorProfesoresBusqueda(error.message));
        })
}

export const consultaProfesoresPorNombreCurso = (nomCur, idNiv) => (dispatch) => {

    dispatch(cargandoProfesoresBusqueda());

    const datos = {
        datos: {
            nomCur: nomCur,
            idNiv: idNiv
        }
    }

    fetch(URLBase + 'usuario/profesor/consulta/porNombreCurso', {

        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                error.response = response;
                throw error;

            }


        }, error => {

            var mensErr = new Error(error.message);
            throw mensErr;

        })
        .then(response => response.json())
        .then(profesores => {
            dispatch(profesoresObtenidosBusqueda(profesores));

        })
        .catch(error => {
            console.log("Error : " + error.message);
            dispatch(errorProfesoresBusqueda(error.message));
        })
}

// Perfil profesor
export const obtenerPerfilProfesor = (codUsu) => (dispatch) => {
    dispatch(cargandoPerfilProfesor());

    const datos = {
        datos: {
            codUsu: codUsu
        }
    }

    fetch(URLBase + 'usuario/profesor/consulta/perfil', {

        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                error.response = response;
                throw error;

            }


        }, error => {

            var mensErr = new Error(error.message);
            throw mensErr;

        })
        .then(response => response.json())
        .then(perfil => {
            dispatch(perfilProfesorObtenido(perfil));

        })
        .catch(error => {
            console.log("Error : " + error.message);
            dispatch(errorPerfilProfesor(error.message));
        })
}

// Líderes
export const obtenerLideres = () => (dispatch) => {

    dispatch(cargandoLideres());

    setTimeout(() => {

        dispatch(lideresObtenidos(LIDERES))

    }, 2000);

}

// Eventos llamados indirectamente

// Registro

export const registrandoUsuario = () => ({
    type: Acciones.CARGANDO_REGISTRO_USUARIO
})

export const usuarioNoRegistrado = (error) => ({
    type: Acciones.ERROR_REGISTRO_USUARIO,
    payload: error
})

export const usuarioRegistrado = (resultado) => ({
    type: Acciones.REGISTRO_USUARIO_EXITOSO,
    payload: resultado
})

// Niveles

export const cargandoNiveles = () => ({
    type: Acciones.CARGANDO_NIVELES
})

export const nivelesObtenidos = (niveles) => ({
    type: Acciones.NIVELES_OBTENIDOS,
    payload: niveles
})

export const errorNiveles = (mensErr) => ({
    type: Acciones.ERROR_NIVELES,
    payload: mensErr

})

// Modalidades
export const cargandoModalidades = () => ({
    type: Acciones.CARGANDO_MODALIDADES
})

export const modalidadesObtenidas = (modalidades) => ({
    type: Acciones.MODALIDADES_OBTENIDAS,
    payload: modalidades
})

export const errorModalidades = (mensErr) => ({
    type: Acciones.ERROR_MODALIDADES,
    payload: mensErr

})

// Usuario
export const cargandoUsuario = () => ({
    type: Acciones.CARGANDO_USUARIO
})

export const usuarioObtenido = (usuario) => ({
    type: Acciones.USUARIO_OBTENIDO,
    payload: usuario
})

export const errorUsuario = (mensErr) => ({
    type: Acciones.ERROR_USUARIO,
    payload: mensErr

})

// Cursos
export const cargandoCursos = () => ({
    type: Acciones.CARGANDO_CURSOS
})

export const cursosObtenidos = (cursos) => ({
    type: Acciones.CURSOS_OBTENIDOS,
    payload: cursos
})

export const errorCursos = (mensErr) => ({
    type: Acciones.ERROR_CURSOS,
    payload: mensErr

})

// Profesores búsqueda
export const cargandoProfesoresBusqueda = () => ({
    type: Acciones.CARGANDO_PROFESORES_BUSQUEDA
})

export const profesoresObtenidosBusqueda = (profesores) => ({
    type: Acciones.PROFESORES_OBTENIDOS_BUSQUEDA,
    payload: profesores
})

export const errorProfesoresBusqueda = (mensErr) => ({
    type: Acciones.ERROR_PROFESORES_BUSQUEDA,
    payload: mensErr

})

// Perfil profesor
export const cargandoPerfilProfesor = () => ({
    type: Acciones.CARGANDO_PERFIL_PROFESOR
})

export const perfilProfesorObtenido = (perfil) => ({
    type: Acciones.PERFIL_PROFESOR_OBTENIDO,
    payload: perfil
})

export const errorPerfilProfesor = (mensErr) => ({
    type: Acciones.ERROR_PERFIL_PROFESOR,
    payload: mensErr

})



// Líderes
export const cargandoLideres = () => ({

    type: Acciones.CARGANDO_LIDERES,

});

export const lideresObtenidos = (lideres) => ({

    type: Acciones.LIDERES_OBTENIDOS,
    payload: lideres

});

export const errorLideres = (mensErr) => ({

    type: Acciones.ERROR_LIDERES,
    payload: mensErr

});

// Sesión
export const iniciandoSesion = () => ({

    type: Acciones.INICIANDO_SESION,

});

export const sesionIniciada = (usuario) => ({

    type: Acciones.SESION_INICIADA,
    payload: usuario
});

export const sesionNoIniciada = (mensErr) => ({

    type: Acciones.SESION_NO_INICIADA,
    payload: mensErr

});