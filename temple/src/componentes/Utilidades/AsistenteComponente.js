import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Widget, addResponseMessage, toggleWidget, addUserMessage, renderCustomComponent } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import {
    enviarMensajeChatBot, consultaProfesoresChatBot,
    contratoRegistrado, obtenerPerfil
} from '../../redux/CreadorAcciones';
import TarjetaPerfil from './TarjetaPerfil';
import TarjetaPresentacion from './TarjetaPresentacion';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    return {
        chatBot: state.chatBot,
        profesoresBusquedaChatBot: state.profesoresBusquedaChatBot
    }

}

const mapDispatchToProps = (dispatch) => ({
    enviarMensajeChatBot: (mensaje, contexto, codUsu) => dispatch(enviarMensajeChatBot(mensaje, contexto, codUsu)),
    consultaProfesoresChatBot: (nomCur, distancia, modalidad, nivel) => dispatch(consultaProfesoresChatBot(nomCur, distancia, modalidad, nivel)),
    obtenerPerfil: (codUsu, tipoUsu) => dispatch(obtenerPerfil(codUsu, tipoUsu))
})

class Asistente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codigoPatero: '-a7cb733c42ac5',
            separador: '%*',
            hizoSaludoLogin: false,
            contexto: null,
            mostrarResultados: false
        }

        this.enviarMensaje = this.enviarMensaje.bind(this);
        this.procesarVariablesEntorno = this.procesarVariablesEntorno.bind(this);
    }

    componentDidMount() {

        addResponseMessage("Hola! Soy Melendi. ¿En qué te puedo ayudar?");


    }

    componentDidUpdate(prevProps, prevState) {
        try {
            if (prevProps != this.props) {

                // Saludo de usuario logueado
                if (this.props.usuario && !this.state.hizoSaludoLogin) {
                    addResponseMessage(`Bienvenid@ ${this.props.usuario.NOM_USU}! Soy tu asistente Melendi. Pregúntame lo que necesites`);
                    this.setState({ hizoSaludoLogin: true });
                }

                if (this.props.chatBot.respuesta.output) {

                    // A ver, para que haya secuencia en la conversación, debo almacenar el contexto
                    let contexto = this.props.chatBot.respuesta.context;

                    // Esto evita repetición de respuestas
                    if (contexto != this.state.contexto) {

                        // Si el contexto ha cambiado, que lo guarde
                        this.setState({ contexto: contexto }, () => {

                            // Primero, evalúo los tipos de respuesta. Estas pueden ser texto, imagen u opción
                            let respuestas = this.props.chatBot.respuesta.output.generic;

                            // Por cada una de ellas, hago un bucle para responder
                            respuestas.map((e, i) => {

                                switch (e.response_type) {
                                    case "text":
                                        // Obtengo un mensaje de todas las posibilidades (Si no está configurado como random)
                                        //var respuesta = this.props.chatBot.respuesta.output.text[Math.floor(Math.random() * this.props.chatBot.respuesta.output.text.length)];

                                        // Sin embargo, si está configurado como random, puedo tomar el primer valor. Watson ya lo envía al azar
                                        let respuesta = this.props.chatBot.respuesta.output.text[0];

                                        addResponseMessage(respuesta);

                                        break;

                                    case "image":
                                        const tarjeta = () => {

                                            return (
                                                <TarjetaPresentacion
                                                    datos={{ titulo: e.title, descripcion: e.description, urlImg: e.source }} />
                                            )
                                        }

                                        renderCustomComponent(tarjeta, {});
                                        break;

                                }

                            })
                            this.procesarVariablesEntorno();

                        });


                    }

                    // Esto se encarga de decidir si se muestran los resultados de la búsqueda. Estos solo deben mostrarse
                    // si han sido producto de una búsqueda explícita, no de una actualziación
                    if (this.state.mostrarResultados) {

                        this.props.profesoresBusquedaChatBot.profesores.map((e, i) => {
                            const tarjeta = () => {
                                return <TarjetaPerfil datos={e} obtenerPerfil={this.props.obtenerPerfil} />
                            }
                            renderCustomComponent(tarjeta, {});

                            // Cuando ya mostró el último, ya no debe mostrarlos otra vez, a menos que se haga otra
                            // búsqueda explíctia
                            if (i >= this.props.profesoresBusquedaChatBot.profesores.length - 1) {
                                this.setState({ mostrarResultados: false });
                            }

                        })

                        if (this.props.profesoresBusquedaChatBot.profesores.length == 0 &&
                            !this.props.profesoresBusquedaChatBot.estaCargando) {
                            addResponseMessage("No he encontrado un profesor con esas características u.u");
                            this.setState({ mostrarResultados: false });

                        }

                    }

                }
            }
        } catch (e) {
            addResponseMessage("Has introducido una pregunta que no tiene soporte :( amiguis");
        }

        //console.log(JSON.stringify(this.props.chatBot.respuesta))
    }

    procesarVariablesEntorno() {
        // Esto sirve para evaluar la respuesta que envía el chatbot
        let contexto = this.state.contexto;

        if (contexto) {
            // Si es que ya terminó el contrato, entonces que lea las variables que ha recopilado el chatbot
            if (contexto.datosContrato) {
                let nomCur = contexto.curso;
                let fecha = contexto.fecha;
                let modalidad = contexto.modalidad;
                let nivel = contexto.nivel;
                // Indico que ya se evaluó la consulta
                contexto.datosContrato = false;
                this.setState({ contexto: contexto, mostrarResultados: true }, () => {
                    //alert(nomCur+" "+fecha+" "+modalidad+" "+nivel)
                    // Hago la consulta
                    this.props.consultaProfesoresChatBot(nomCur, fecha, modalidad, nivel);
                });




            }

        }

        //alert(JSON.stringify(this.props.profesoresBusquedaChatBot.profesores))

        /*
     
        // Aplico un truquito para mostrar la tarjeta del profesor Aliaga :v
        let codigoAliaga = this.state.codigoPatero;
     
        let codigoUltraSecretoXd = respuesta.substring(respuesta.length - codigoAliaga.length, respuesta.length);
     
        if (codigoUltraSecretoXd == codigoAliaga) {
            respuesta = respuesta.substring(0, respuesta.length - codigoAliaga.length);
     
            if (this.props.usuario) {
     
                const tarjetaPatera = () => {
                    return <TarjetaPerfil datos={{
                        "codUsu": "1002",
                        "nomUsu": "José",
                        "apaUsu": "Aliaga",
                        "amaUsu": "Álvarez",
                        "latitud": -12.164031,
                        "longitud": -76.991758,
                        "imgPer": "../../recursos/imagenes/aliaga.jpg",
                        "imgPor": "https://pbs.twimg.com/media/BWV1bQ8CEAAuHoJ.jpg",
                        "logUsu": "Aliaga",
                        "especialidad": "Programación en java",
                        "experiencia": 1000,
                        "prestigio": 2000,
                        "seguidores": 3000,
                        "cursos": 5,
                        "genero": "MASCULINO",
                        "rol": "Instructor",
                        "idPerfil": 1002,
                        "sobreMi": "Profesor con una gran trayectoria en la enseñanza de java",
                        "expLab": "NO ESPECIFICADO",
                        "habCla": "NO ESPECIFICADO",
                        "cv": "https://www.udlap.mx/centrodeescritura/files/curriculumVitae-Ejemplos.pdf"
                    }}>
     
                    </TarjetaPerfil>
                };
                addResponseMessage(respuesta);
                renderCustomComponent(tarjetaPatera, {});
                return true;
            }
        }*/
    }

    enviarMensaje(mensaje) {

        let contexto = this.state.contexto;

        if (!contexto) {
            contexto = {};
        }

        // Aquí establezco una variable para saber si está logueado el usuario
        if (this.props.usuario) {
            contexto.logueado = true;
        } else {
            contexto.logueado = false;
        }

        // Y lo asigno/reasigno
        this.setState({ contexto: contexto }, () => {
            this.props.enviarMensajeChatBot(mensaje, this.state.contexto, null);
        })


    }

    render() {

        return (
            <div className="panel panel-chat">
                <Widget handleNewUserMessage={this.enviarMensaje}
                    title={this.props.usuario ? `Hola ${this.props.usuario.NOM_USU}` : "Bienvenido a TEMPLE"}
                    subtitle="Consulte a nuestro asistente Melendi"
                    profileAvatar="../../recursos/imagenes/melendi.jpg" badge={true}
                    senderPlaceHolder="Escribe aquí"
                />
            </div>
        )
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Asistente);