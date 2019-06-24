import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import { Fade } from 'react-animation-components';
import Encabezado from './EncabezadoRegistro';
import Botonera from '../BotoneraRegistro';
import ModalMensaje from '../../Utilidades/ModalMensaje';
import { FadeTransform } from 'react-animation-components';
import ModalCargandoMensaje from '../../Utilidades/ModalCargandoMensaje';
import { registrarUsuario } from '../../../redux/CreadorAcciones';
import { connect } from 'react-redux';

//
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Paso1 from './Paso1';
import Paso2 from './Paso2';
import Paso3 from './Paso3';
import Paso4 from './Paso4';

const mapStateToProps = (state) => {

    return {
        registro: state.registro
    }

}

const mapDispatchToProps = (dispatch) => ({

    registrarUsuario: (usuario) => dispatch(registrarUsuario(usuario))
})

class FormRegistro extends Component {
    constructor(props) {

        super(props);
        this.state = {
            pasos: [
                {
                    nombres: 'profeelvis',
                    apPat: 'profecrespo',
                    apMat: 'profeluna',
                    edad: '28',
                    genero: '1',
                    correo: 'profeelviscrespo@gmail.com',
                    telefono: '7654321',
                    dni: '74811547',
                    rol: 1
                },
                {
                    preferencias: [{ niveles: [], idCurso: null, textoCurso: '', silabo: '', modalidades: [], etiquetas: [] }],
                    maxPreferencias: 4
                },
                {
                    latitud: -12.08632442,
                    longitud: -77.22255707
                },
                {
                    usuario: 'profeelviscrespo',
                    contrasena: 'profeelviscrespo',
                    especialidad: 'miEspecialidad',
                    sobreMi: 'profeasdasdasdasd',
                    expLab: 'expLab',
                    habCla: 'habCla',
                    cv: '',
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
                pasos: infoPasos,
                modalAbierto: true

            }, () => {
                this.props.registrarUsuario(this.state);
            })
        }

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
                    <ModalCargandoMensaje
                        modalAbierto={this.state.modalAbierto}
                        estaCargando={this.props.registro.estaCargando}
                        mensaje={this.props.registro.mensaje ? this.props.registro.mensaje.mensaje : ''}
                        cerrarModal={() => {
                            this.setState({
                                modalAbierto: false
                            })
                        }} />
                </div>
            </div>
        )

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegistro);