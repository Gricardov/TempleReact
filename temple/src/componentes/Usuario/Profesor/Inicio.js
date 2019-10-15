import React, { Component } from 'react';
import './Inicio.css';
import PreguntasGlobales from './PreguntasGlobales';
import SolicitudesGlobales from './SolicitudesGlobales';
import Publicaciones from './Publicaciones';

class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="perfil-debajo-barra panel-fondo">
                <div className="contenedor-inicio-profesor-css-grid">
                    <SolicitudesGlobales solicitudes={[
                        {id:0,img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',nombres:'Karol Chama',cuerpo:'Solicito profesor que enseñe matemáticas, física y química para mi niño de nivel primaria'},
                        {id:1,img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',nombres:'Marisol Naveros',cuerpo:'No te contaron mal, estuve con alguien más. Si nos besamos, pero hasta ahí nomás'},
                        {id:2,img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',nombres:'Sara Fuertes',cuerpo:'Hubo coqueteo, pero uno no es ninguno'},
                        {id:3,img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',nombres:'Edison Robles',cuerpo:'Busco profesor de Matemáticas y Dirección financiera Dónde Lima Ciudad Estoy estudiando un curso de especialización de Planeamiento Financiero en ESAN'},
                        {id:4,img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',nombres:'Axel Chacón',cuerpo:'Lorem ipsum et dolor sdfjdskfg fgtgf fsdjoso gog dfgdfog dfod0g ofdgjdfiog dfuohodfodgdghbuiouobdf'},
                        {id:5,img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',nombres:'Michel Lucana',cuerpo:'afiodbnfo dfusdu sdigi duig dfghjg u uig guuiñ uio dfuiz gudfig uoguogduorg '},
                        {id:6,img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',nombres:'Judith Vila',cuerpo:'Yo quiero ser tu profe, mejor dicho profesor, el que te enseñe del amor, lo que sabes y disimulas :v'},
                    ]} />
                    <Publicaciones usuario={this.props.sesion.usuario}
                    publicaciones={[
                        {id:0, titulo:'¿Cómo ser felíz?', autor:'Romeo Julieta', img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',titulo:'¿Por qué somos infelices?',descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',numCor:2,numCom:4,porcAmor:57,fecPub:'Hace 3 minutos'},
                        {id:1, titulo:'Las mujeres que más aman',autor:'Tanessi Maker', img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',titulo:'La belleza de las matemáticas',imgdes:'https://ecocosas.com/wp-content/uploads/2018/06/arbol-corazon-1024x578.webp',descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',numCor:5,numCom:4,porcAmor:25,fecPub:'Hace 2 minutos'},
                        {id:2, titulo:'La belleza de la física',autor:'Servando Florentino', img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',titulo:'Cómo enseñar a tus alumnos',descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',numCor:6,numCom:4,porcAmor:31,fecPub:'Hace 1 minutos'},
                        {id:3, titulo:'Secretos de la alquimia',autor:'Ysa Bella', img:'http://www.newdesignfile.com/postpic/2009/09/generic-user-icon-windows_354185.png',titulo:'Psicología y educación (pdf)',descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with',numCor:2,numCom:4,porcAmor:56,fecPub:'Hace 5 segundos'},


                    ]}/>
                    <PreguntasGlobales preguntas={[
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

export default Inicio;
