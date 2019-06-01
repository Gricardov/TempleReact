import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import { Fade } from 'react-animation-components';
import Encabezado from '../EncabezadoRegistro';
import Botonera from '../BotoneraRegistro';
import ModalMensaje from '../../Utilidades/ModalMensaje';
import { FadeTransform } from 'react-animation-components';
import { URLBase } from '../../../compartido/URLBase';

//
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Paso1 from './Paso1';
import Paso2 from './Paso2';
import Paso3 from './Paso3';
import Paso4 from './Paso4';

class FormRegistro extends Component {
    constructor(props) {

        super(props);
        this.state = {
            pasos: [
                {
                    nombres: 'elvis',
                    apPat: 'crespo',
                    apMat: 'luna',
                    edad: '23',
                    genero: '1',
                    correo: 'elviscrespo@gmail.com',
                    telefono: '7654321'
                },
                {
                    nivel: null,
                    preferencias: [{ id: null }],
                    maxPreferencias: 4
                },
                {
                    latitud: -12.08632442,
                    longitud: -77.22255707
                }
                ,
                {
                    usuario: 'elviscrespo',
                    contrasena: 'elviscrespo',
                    sobreMi: 'asdasdasdasd',
                    perfil: '',
                    portada: '',
                    acepta: false
                }],
            pasoActual: 1,
            error: null
        }

        // Para gestionar los pasos
        this.siguientePaso = this.siguientePaso.bind(this);
        this.anteriorPaso = this.anteriorPaso.bind(this);

        // Para gestionar los errores

        this.crearError = this.crearError.bind(this);
        this.eliminarError = this.eliminarError.bind(this);

    }

    // Para gestionar los pasos

    siguientePaso(valores, evento) {

        if (evento) {
            evento.preventDefault();
        }

        let pasoActual = this.state.pasoActual;
        let infoPasos = this.state.pasos;
        infoPasos[pasoActual - 1] = { ...infoPasos[pasoActual - 1], ...valores };

        // Solo si el paso actual es menor que el último, que aumente el paso actual. (Empezamos de 1). Además, que guarde los valores
        if (pasoActual < this.state.pasos.length) {

            this.setState({
                pasos: infoPasos,
                pasoActual: pasoActual + 1
            })

        }
        // Cuando alcance el paso final, que guarda los valores y cuando termine, haga el fetch
        else if (pasoActual == this.state.pasos.length) {
            this.setState({
                pasos: infoPasos
            }, () => {
                alert(JSON.stringify(this.state))
                fetch(URLBase + 'usuario/registro', {

                    method: 'POST',
                    body: JSON.stringify(this.state),
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
                    .then(response => alert('Respuesta del servidor: '+JSON.stringify(response)))
                    .catch(error => {
                        console.log('Error: ', error.message)
                        alert('Error: ' + error.message)
                    })
            })
        }

        // 




    }

    anteriorPaso() {
        let pasoActual = this.state.pasoActual;

        if (pasoActual > 1) {
            this.setState({
                pasoActual: pasoActual - 1,
            })
        }

    }

    // Para los errores

    crearError = (mensaje) => {
        this.setState({ error: mensaje })
    }

    eliminarError = () => {
        this.setState({ error: null })
    }

    render() {

        let paso = null;
        switch (this.state.pasoActual) {
            // Si se ha pasado al siguiente paso, quiere decir que los datos han sido aprobados,
            // por lo tanto, estos deben almacenarse en el state
            case 1:
                paso = (<Paso1 valores={this.state.pasos} anteriorPaso={this.anteriorPaso} siguientePaso={this.siguientePaso} />)
                break;
            case 2:
                paso = (<Paso2 valores={this.state.pasos} anteriorPaso={this.anteriorPaso} siguientePaso={this.siguientePaso}
                    crearError={this.crearError} />)
                break;
            case 3:
                paso = (<Paso3 valores={this.state.pasos} anteriorPaso={this.anteriorPaso} siguientePaso={this.siguientePaso}
                    crearError={this.crearError} />)
                break;
            case 4:
                paso = (<Paso4 valores={this.state.pasos} anteriorPaso={this.anteriorPaso} siguientePaso={this.siguientePaso} />)
                break;
        }

        return (
            <div className="container debajo-barra bloque-contenedor">
                <div className="container">
                    <ModalMensaje error={this.state.error} eliminarError={this.eliminarError} />
                    <Encabezado pasoActual={this.state.pasoActual} />
                    <TransitionGroup>
                        <CSSTransition key={this.state.pasoActual} classNames="registro" timeout={300}>
                            {paso}
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
        )

    }

}

export default FormRegistro;