import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Widget, addResponseMessage, toggleWidget, addUserMessage, renderCustomComponent } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { enviarMensajeChatBot } from '../../redux/CreadorAcciones';
import TarjetaPerfil from './TarjetaPerfil';
import TarjetaPresentacion from './TarjetaPresentacion';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    return {
        chatBot: state.chatBot
    }

}

const mapDispatchToProps = (dispatch) => ({
    enviarMensajeChatBot: (mensaje, contexto, codUsu) => dispatch(enviarMensajeChatBot(mensaje, contexto, codUsu))
})

class Asistente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codigoPatero: '-a7cb733c42ac5',
            separador: '%*',
            hizoSaludoLogin: false,
            contexto: null
        }

        this.enviarMensaje = this.enviarMensaje.bind(this);
        this.evaluarIntencion = this.evaluarIntencion.bind(this);
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
                    toggleWidget();
                    this.setState({ hizoSaludoLogin: true });
                }

                if (this.props.chatBot.respuesta.output) {

                    // A ver, para que haya secuencia en la conversación, debo almacenar el contexto
                    let contexto = this.props.chatBot.respuesta.context;

                    // Si el contexto cambia, que lo reasigne
                    if (contexto != this.state.contexto) {
                        this.setState({ contexto: contexto });
                    }




                    // Primero, evalúo los tipos de respuesta. Estas pueden ser texto, imagen u opción
                    let tiposRespuesta = this.props.chatBot.respuesta.output.generic;

                    // Por cada una de ellas, hago un bucle para responder
                    tiposRespuesta.map((e, i) => {

                        switch (e.response_type) {
                            case "text":
                                // Obtengo un mensaje de todas las posibilidades (Si no está configurado como random)
                                //var respuesta = this.props.chatBot.respuesta.output.text[Math.floor(Math.random() * this.props.chatBot.respuesta.output.text.length)];

                                // Sin embargo, si está configurado como random, puedo tomar el primer valor. Watson ya lo envía al azar
                                let respuesta = this.props.chatBot.respuesta.output.text[0];
                                let intencion = this.props.chatBot.respuesta.intents[0];

                                // Si la intención requiere un logueo u otra restricción, que el sistema decida si tiene algo que decir :P
                                if (!this.evaluarIntencion(respuesta, intencion)) {

                                    addResponseMessage(respuesta);
                                }
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
                }
            }
        } catch (e) {
            addResponseMessage("Has introducido una pregunta que no tiene soporte :( amiguis");
        }

        //console.log(JSON.stringify(this.props.chatBot.respuesta))
    }

    evaluarIntencion(respuesta, intencion) {

        // Si hay intención, que pregunte cuál es
        if (intencion) {
            switch (intencion.intent) {
                case "Contrato":
                    // Esta función requiere logueo, así que evalúo
                    if (this.props.usuario) {

                        // Solo pueden contratar los alumnos
                        if (this.props.usuario.ID_ROL!=2){
                            // Si es profesor, no puedes contratar
                            addResponseMessage("Tú eres un profesor, no puedes contratar a otro profesor");
                            return true;
                        } else {
                            // Si es alumno, no tengo nada más que agregar :v
                            return false;
                        }
                        return false;
                    } else {
                        // Logueate amiguis, caballero nomás :v
                        let posiblesRespuestas=["Esta función requiere logueo", "Logueate para usar esta función, amiguito u.u"];
                        var respuesta = posiblesRespuestas[Math.floor(Math.random() * posiblesRespuestas.length)];
                        addResponseMessage(respuesta);
                        return true;
                    }
            }
        }

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
        this.props.enviarMensajeChatBot(mensaje, this.state.contexto, null);
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