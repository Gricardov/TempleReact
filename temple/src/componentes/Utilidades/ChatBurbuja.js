import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Widget, addResponseMessage, toggleWidget, addUserMessage, renderCustomComponent } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import TarjetaPerfil from './TarjetaPerfil';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    return {
        //chatBot: state.chatBot
    }

}

const mapDispatchToProps = (dispatch) => ({
    //enviarMensajeChatBot: (mensaje, codUsu) => dispatch(enviarMensajeChatBot(mensaje, codUsu))
})

class ChatBurbuja extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.enviarMensaje = this.enviarMensaje.bind(this);
    }

    componentDidMount() {

        addResponseMessage("Déjame un mensaje y te responderé lo más pronto posible");


    }
       
    enviarMensaje(mensaje) {
        addResponseMessage(mensaje)

        //this.props.enviarMensajeChatBot(mensaje, null);
    }

    render() {

        return (
            <div className="panel panel-chat">
                <Widget handleNewUserMessage={this.enviarMensaje}
                    title="Chat con Dámaso"
                    profileAvatar="../../recursos/imagenes/melendi.jpg" badge={true}
                    senderPlaceHolder="Escribe aquí"
                />
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBurbuja);