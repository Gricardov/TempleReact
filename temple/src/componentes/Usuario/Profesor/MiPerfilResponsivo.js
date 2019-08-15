import React, { Component } from 'react';
import ModalEntradaMensaje from '../../Utilidades/ModalEntradaMensaje';
import Presentacion from '../../Utilidades/PresentacionComponente';
import Pestanas from './PestanasPerfilProfesor';
import Resenas from '../../Utilidades/ResenasComponente';
import Publicaciones from '../../Utilidades/PublicacionesComponente';
import { Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import TarjetaCita from '../../Utilidades/TarjetaCita';
import Cajon from './CajonColapsablePerfil';
import SelectorPrincipal from './SelectorPrincipalPerfil';
import ContenedorPerfil from './ContenedorPerfil';

import '../../../Perfil.css';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
let moment = require('moment');

class MiPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMensajeAbierto: false,
            seleccionPrincipal: 0,
            seleccionSecundaria: 0,
            selectores: {
                0: [{ nombre: 'Futuras' }, { nombre: 'En este momento' }, { nombre: 'Pasadas' }],
                1: [{ nombre: 'Todos' }],
                2: [{ nombre: 'Sin leer' },{nombre:'Leídos'}],
                3: [{ nombre: 'Mi presentación' }, { nombre: 'Mis horarios' },
                { nombre: 'Mis cursos' }, { nombre: 'Mis reseñas' }, { nombre: 'Mis alumnos' }]
            },
            perfilSeleccionado: this.props.perfil
        };
    }

    render() {

        // Primero, actualizo el state con los cursos de los ejercicios       
        if (this.props.ejercicios){
            // Obtengo el arreglo que está en mi estado y le borro el primero porque es general
            let ejerciciosActuales=JSON.parse(JSON.stringify(this.state.selectores["1"]));
            ejerciciosActuales.shift();

            // Extraigo solo los nombres de los cursos de los props
            let selectoresCursosNuevos=this.props.ejercicios.map((e,i)=>{return {nombre:e.curso}});
            // Ahora, pregunto si la información de los props aún es la misma que tengo. Si no la es, la actualizo
        
            if (JSON.stringify(ejerciciosActuales)!==JSON.stringify(selectoresCursosNuevos)){
                let selectoresAux=this.state.selectores;
                selectoresAux["1"]=[{ nombre: 'Todos' }].concat(selectoresCursosNuevos);
                
                this.setState({selectores:selectoresAux});                
            }
        }

        const perfil = this.state.perfilSeleccionado;
        return (
            <div className="perfil-debajo-barra contenedor-css-grid">
                <div className="avisos">
                    Tienes una nueva notificación
                </div>
                <div className="cajon-colapsable">
                    <Cajon perfil={perfil}/>
                </div>

                <div className="selector-principal-perfil">
                    <SelectorPrincipal
                        seleccionado={this.state.seleccionPrincipal}
                        seleccionar={(seleccion) => { this.setState({ seleccionPrincipal: seleccion, seleccionSecundaria: 0 }) }} />
                </div>

                <div className="contenedor-selector-secundario">
                    <ContenedorPerfil 
                        citas={this.props.citas}
                        ejercicios={this.props.ejercicios}
                        revisarEjercicio={()=>{this.setState({perfilSeleccionado:{
                            imgPer:'https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp',
                            nomUsu:'Vane',
                            apaUsu:'Sita',
                            amaUsu:'Sita',
                            logUsu:'milanesita'
                        }})}}
                        pestanas={this.state.selectores[this.state.seleccionPrincipal]}
                        seleccionPrincipal={this.state.seleccionPrincipal}
                        seleccionSecundaria={this.state.seleccionSecundaria}
                        seleccionar={(seleccion) => { this.setState({ seleccionSecundaria: seleccion }) }}
                    />
                </div>
            </div>
        )

    }

}

export default MiPerfil;

/*

// Lenguaje Corcovado

bucle de 2 a 7 ->

    si indice < 5 ->
        mostrar 'El índice es menor a 5'
    <
    ademas < 10 ->
        mostrar 'El índice es mayor a 10'
    <

    si no -> salir

<

// Parámetros explícitos
recorrer miArreglo ->

    arregloReves.agregar e;

<

// Desde i hasta z; luego ij...ijk...ijkl
recorrer miArreglo ->

    recorrer arregloReves ->

        si e diferente f ->

            devolver falso; // o <=-1 o f

        <
    <
    devolver verdadero; // o v o >=1
<

sonIguales 'corazon' y 'corazón' ? ->

    mostrar 'son iguales'

<

si no -> mostrar 'no son iguales'

// modulos y métodos

// moldes y elementos

molde Persona ->
    ancestro->Animal
    estructura->SerVivo
    encapsulamiento->publico
    constructor->
        nombre=par.nombre;
        edad=par.edad;
    <

    constructor nombre->
        nombre=par.nombre;
    <

    constructor (edad)->
        edad=par.edad;
    <

    //iniciarTodo();

    num edad=-1;
    txt nombre='Mila :(((';

<

// Instancia

    Persona p = instancia Persona

    si (p.nombre igual a 'Mila') ->
        mostrar('ok')
    <

    // Las mayúsculas son órdenes directas que son interpretadas por un analizador léxico
    MANDALA, NECESITO SUMAR DOS NÚMEROS
    >¿Cuáles n.n?
    el 5 y el 8
    >La suma es 13
    GRACIAS
    >De nada <3
    >NECESITO INSTALAR OTRO ASISTENTE
    >Claro, primero elige uno de /aquí/
    >Muy bien, estoy instalando tu nuevo asistente. Él se llama Melendi
    >Listo. Quieres que Melendi sea el predeterminado? <3
    <Listo <3

    >Hola, soy Melendi. También me puede hablar mediante la voz. Yo entiendo n.n
    MELENDI, QUIERO APRENDER CSS
    >Yo igual. En qué nivel vas?
    NO SÉ NADA
    >Entonces iniciar por lo básico básico; te recomiendo la página Coursera

    // También se puede responder si se antepone el símbolo >
    >Hola Melendi
    >Hola n.n


// variables

var, num (entero, decimal o dec, dec8, dec32, byte), txt, vf





*/