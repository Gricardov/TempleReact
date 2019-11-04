import React, { Component } from 'react';
import './Inicio.css';
import LateralDerecho from './LateralDerecho';
import LateralIzquierdo from './LateralIzquierdo';
import Publicaciones from './Publicaciones';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {    
    establecerOpcionesBarra, seleccionarOpcionBarra
} from '../../../redux/CreadorAcciones';

const mapStateToProps = (state) => {

    return {
        barra: state.barra
    }

}

const mapDispatchToProps = (dispatch) => ({
    
    establecerOpcionesBarra: (opciones) => dispatch(establecerOpcionesBarra(opciones)),
    seleccionarOpcionBarra: (opcion) => dispatch(seleccionarOpcionBarra(opcion))
})

class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectores: [
                { id: 0, nombre: "Publicaciones", icono: 'fa fa-sticky-note-o' },
                { id: 1, nombre: "Solicitudes", icono: 'fa fa-pencil' },
                { id: 2, nombre: "Ejercicios", icono: 'fa fa-coffee' }
            ]
        }
        this.props.establecerOpcionesBarra(this.state.selectores)
        this.props.seleccionarOpcionBarra(0)
    }

    render() {
        return (
            <div className="perfil-debajo-barra panel-fondo">
                <div className="contenedor-inicio-profesor-css-grid">
                    <LateralIzquierdo 
                    
                        destacados={[
                        {id:0,autor:'Los Prisioneros',titulo:'Puedes estar inseguro de algo y aún así ganar',fecha:'Hace 5 minutos',cuerpo:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'},
                        {id:1,autor:'Ronald Reagan',titulo:'Fórmulas de matemática en tu vida diaria',fecha:'Hace 10 minutos',cuerpo:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'},
                        {id:2,autor:'Michel Huayta',titulo:'¿Por qué somos infelices?',fecha:'Hace 15 minutos',cuerpo:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'},
                        {id:3,autor:'Kevin Chacón',titulo:'La belleza de las matemáticas',fecha:'Hace 6 minutos',cuerpo:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'},
                        {id:4,autor:'Axel Donayre',titulo:'Cómo enseñar a tus alumnos',fecha:'Hace 7 minutos',cuerpo:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'},
                        {id:5,autor:'Vane Sita',titulo:'Psicología y educación (pdf)',fecha:'Hace 56 minutos',cuerpo:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'},
                        {id:6,autor:'Aurelio Cruz',titulo:'Cómo enamorar pt.1',fecha:'Hace 15 minutos',cuerpo:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus'},
                    ]} />
                    <Publicaciones usuario={this.props.sesion.usuario}
                    publicaciones={[
                        {id:0, titulo:'¿Cómo ser felíz?', autor:'Romeo Julieta', img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',titulo:'¿Por qué somos infelices?',descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',numCor:2,numCom:4,porcAmor:57,fecPub:'Hace 3 minutos'},
                        {id:1, titulo:'Las mujeres que más aman',autor:'Tanessi Maker', img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',titulo:'La belleza de las matemáticas',imgdes:'https://ecocosas.com/wp-content/uploads/2018/06/arbol-corazon-1024x578.webp',descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',numCor:5,numCom:4,porcAmor:25,fecPub:'Hace 2 minutos'},
                        {id:2, titulo:'La belleza de la física',autor:'Servando Florentino', img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',titulo:'Cómo enseñar a tus alumnos',descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',numCor:6,numCom:4,porcAmor:31,fecPub:'Hace 1 minutos'},
                        {id:3, titulo:'Secretos de la alquimia',autor:'Ysa Bella', img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',titulo:'Psicología y educación (pdf)',descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',numCor:2,numCom:4,porcAmor:56,fecPub:'Hace 5 segundos'},


                    ]}/>
                    <LateralDerecho preguntas={[
                        {curso:'Geometría',nivel:1,img:'',descripcion:'En el cuadrilátero ABCD está inscrito un círculo, siendo K, L, M, N los puntos de tangencia con los lados AB, BC, CD y DA, respectivamente. Las rectas DA y CB se cortan en S, mientras que BA y CD se cortan en P. Si S, K y M están alineados, probar que P, N y L también lo están.', precio:0, autor:'Carito Cuya',id:0},
                        {curso:'Física',nivel:2,img:'https://solviapp.com/media/publications/image_DjRrk2k.jpg',descripcion:'', precio:0, autor:'Te quiero',id:1},
                        {curso:'Música',img:'https://t2.up.ltmcdn.com/es/images/4/2/5/tipos_de_escala_musical_3524_orig.jpg',nivel:2,descripcion:'a) Calcular qué nota es una séptima menor por encima de Re.\nb) ¿Y una tercera mayor por debajo?', precio:3.00, autor:'Marisol Naveros',id:2},
                        {curso:'Estadística',img:'',nivel:3,descripcion:'Estas son las alturas de los jugadores de un equipo de baloncesto en tiene las siguientes alturas:\n 1,78; 1,98; 1,86; 2,05; 2,01; 2,13; 1,96; 1,89; 2,09; 1,98\na) Clasifica el carácter\nb) Haz una tabla de frecuencias absolutas, relativas, absoluta acumulada, relativa acumulada, agrupando los datos en intervalos 1,75-1,85 ; 1,85-1,95 ; 1,95-2,05 ; 2,05-2,15', precio:0, autor:'Luciano Perez',id:3},
                        {curso:'Álgebra',img:'https://solviapp.com/media/publications/15705578164831320994432.jpg',nivel:2,descripcion:'', precio:1.20, autor:'Elvis Crespo',id:4}
                    ]}/>
                </div>
            </div>
        )
    }


}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inicio));