import React, { Component } from 'react';
import TarjetaCurso from './TarjetaCurso';
import ContenedorCursos from './ContenedorCursos';
import { Fade, Transform } from 'react-animation-components';

import './GestionCursos.css';

class GestionCursos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cursoSeleccionado: null,
            revisandoCurso: false
        };
    }

    render() {
        return (
            <div className="perfil-debajo-barra contenedor-gestion-cursos-css-grid">
                <h1>Cursos que enseño</h1>
                <button className="btn-agregar-curso">Agregar curso</button>
                <div className="tarjeta-contenedora-contenido">
                    <ContenedorCursos cursos={[
                        { id: 0, nombre: 'Geometría', img: 'https://definicion.mx/wp-content/uploads/educacion/Geometria.jpg', categoria: 'Matemáticas', horExp: '1', solEje: '0' },
                        { id: 1, nombre: 'Álgebra', img: 'https://www.cienciamatematica.com/wp-content/uploads/algebra.jpg', categoria: 'Matemáticas', horExp: '2', solEje: '1' },
                        { id: 2, nombre: 'Programación en Javascript con trocitos de chocolate', img: 'https://www.muylinux.com/wp-content/uploads/2017/09/java.png', categoria: 'Programación', horExp: '3', solEje: '3' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 4, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 5, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },/*
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },
                        { id: 3, nombre: 'Bases de datos', img: 'http://experttv.az//az/home/getfile/843', categoria: 'Programación', horExp: '0', solEje: '0' },*/

                    ]} />
                </div>
            </div>
        )
    }

}

export default GestionCursos;