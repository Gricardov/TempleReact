import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import { Fade } from 'react-animation-components';
import Botonera from './BotoneraRegistro';
import Preferencias from './ComponentePreferencias';
import GoogleApiWrapper from './ComponenteMapa';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const requerido = (val) => val && val.length;
const maximo = (tam) => (val) => !(val) || (val.length <= tam);
const minimo = (tam) => (val) => (val) && (val.length >= tam);
const correoValido = (val) => /^[A-Z0-9a-z._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,4}$/i.test(val);
const esNumero = (val) => !isNaN(Number(val));

class FormRegistro extends Component {
    constructor(props) {

        super(props);
        this.state = {
            paso1: {
                nombres: 'mila',
                apPat: 'luna',
                apMat: 'luna',
                edad: '23',
                genero: '1',
                correo: 'mila@gmail.com',
                telefono: '7654321'
            },
            paso2: {
                nivel: '',
                preferencias: [{ id: null }],
                maxPreferencias: 4
            },
            paso3: {
                ubicacion: {
                    latitud: 0.0001,
                    longitud: 0.0001
                }
            },
            paso4: {
                usuario: '',
                clave: '',
                sobreMi: '',
                buscando: '',
                imgPerfil: '',
                imgPortada: '',
                acepta: false
            },
            error: null
        }
        this.agregarPreferencia = this.agregarPreferencia.bind(this);
        this.modificarPreferencia = this.modificarPreferencia.bind(this);
        this.eliminarPreferencia = this.eliminarPreferencia.bind(this);

        this.crearError = this.crearError.bind(this);
        // Esto sirve para cerrar la ventana de error
        this.eliminarError = this.eliminarError.bind(this);
    }

    // Para las preferencias

    agregarPreferencia = () => {
        let paso = { ...this.state.paso2 }
        paso.preferencias.push({ id: null, texto:'' })
        this.setState({ paso2: paso })
    }

    modificarPreferencia = (indice, preferencia) => {
        let paso = { ...this.state.paso2 }
        let preferencias = paso.preferencias;

        // Primero, verifico que no haya repetidos
        const condicion = preferencias.filter((pref) => pref.id && pref.id == preferencia.id)[0]

        let err = null;

        if (condicion) {
            err = 'Ya has registrado el curso ' + condicion.texto;
        } else {
            preferencias[indice] = preferencia;
        }
        this.setState({ paso2: paso, error: err })
    }

    eliminarPreferencia = (indice) => {
        let paso = { ...this.state.paso2 }
        let preferencias = paso.preferencias;
        preferencias.splice(indice, 1);
        this.setState({ paso2: paso })
    }

    // Para los errores

    crearError = (mensaje) => {
        this.setState({ error: mensaje })
    }

    eliminarError = () => {
        this.setState({ error: null })
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.datosAprobados !== this.props.datosAprobados) {
            // Evalúo -1 porque establece los valores del formulario del paso anterior
            this.setState({ ["paso" + (this.props.pasoActual - 1)]: this.props.datosAprobados })

        }
    }

    render() {

        switch (this.props.pasoActual) {
            // Si se ha pasado al siguiente paso, quiere decir que los datos han sido aprobados,
            // por lo tanto, estos deben almacenarse en el state
            case 1:
                return (<Paso1 valores={this.state.paso1} anteriorPaso={this.props.anteriorPaso} siguientePaso={this.props.siguientePaso} />)

            case 2:
                return (<Paso2 anteriorPaso={this.props.anteriorPaso} siguientePaso={this.props.siguientePaso} agregarPreferencia
                    ={this.agregarPreferencia} infoPaso={this.state.paso2} modificarPreferencia={this.modificarPreferencia}
                    eliminarPreferencia={this.eliminarPreferencia} crearError={this.crearError}
                    eliminarError={this.eliminarError} error={this.state.error} />)
            case 3:
                return (<Paso3 anteriorPaso={this.props.anteriorPaso} siguientePaso={this.props.siguientePaso}></Paso3>)

        }
    }

}

const Paso3 = (props) => {
    return (
            <GoogleApiWrapper />
    )
}

const Paso2 = (props) => {

    // Verifico que por lo menos haya una preferencia
    const condicion = props.infoPaso.preferencias.filter((pref) => pref.id)[0]

    return (
        <>
            <VentanaError error={props.error} eliminarError={props.eliminarError} />
            <LocalForm onSubmit={(values) => {
                condicion ? props.siguientePaso(values) : props.crearError('Debes seleccionar un curso como mínimo')
            }}>
                <FormGroup row>
                    <Label htmlFor="cboNivel" xs={12}>¿A qué nivel buscas que te enseñen?<small> Puedes cambiar esto después</small></Label>
                    <Col xs={12}>
                        <Control.select
                            className="form-control"
                            model=".nivel"
                            id="cboNivel"
                            name="nivel"
                        >
                            <option>Superior (Técnico/Universitario)</option>
                            <option>Secundaria</option>
                        </Control.select>

                    </Col>
                </FormGroup>
                <Preferencias preferencias={props.infoPaso.preferencias} modificarPreferencia={props.modificarPreferencia}
                    eliminarPreferencia={props.eliminarPreferencia} />

                <FormGroup row>
                    <Col xs={12}>
                        <Button id="btnPreferencia"
                            color="primary"
                            block
                            disabled={props.infoPaso.preferencias.length >= props.infoPaso.maxPreferencias ? true : false}
                            onClick={() => { props.agregarPreferencia() }}>
                            <span className="fa fa-plus"></span> Agregar otro curso
                        </Button>
                    </Col>
                </FormGroup>
                <Botonera anteriorPaso={props.anteriorPaso} />

            </LocalForm>
        </>
    )

}

const Paso1 = (props) => {

    return (
        <LocalForm initialState={props.valores} model="paso1" onSubmit={(values) => props.siguientePaso(values)}>
            <FormGroup row>
                <Label htmlFor="txtNombres" xs={12}>Nombres</Label>
                <Col xs={12}>
                    <Control.text
                        className="form-control"
                        model=".nombres"
                        id="txtNombres"
                        name="nombres"
                        validators={{
                            requerido, minimo: minimo(2), maximo: maximo(50)
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".nombres"
                        show="touched"
                        wrapper="ul"
                        component={(props) => <MensajeError mensaje={props.children.toString()} />}
                        messages={
                            {
                                requerido: 'Los nombres no pueden estar vacíos',
                                minimo: 'Tu nombre completo debe tener 2 caracteres como mínimo. ¿No crees? Existe hasta el nombre Zu',
                                maximo: 'No te pases! :( Tu nombre completo no puede exceder los 50 caracteres'
                            }
                        }
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label htmlFor="txtApPat" xs={12}>Apellido paterno</Label>
                <Col xs={12}>
                    <Control.text
                        className="form-control"
                        model=".apPat"
                        id="txtApPat"
                        name="apPat"
                        validators={{
                            requerido, minimo: minimo(2), maximo: maximo(50)
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".apPat"
                        show="touched"
                        wrapper="ul"
                        component={(props) => <MensajeError mensaje={props.children.toString()} />}
                        messages={
                            {
                                requerido: 'Tu apellido paterno no puede estar vacío',
                                minimo: 'Tu apellido paterno debe tener 2 caracteres como mínimo. ¿No crees? Pensemos en los chinos también',
                                maximo: 'No te pases! :( ¿Tu apellido paterno cómo va a exceder los 50 caracteres?'
                            }
                        }
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label htmlFor="txtApMat" xs={12}>Apellido materno</Label>
                <Col xs={12}>
                    <Control.text
                        className="form-control"
                        model=".apMat"
                        id="txtApMat"
                        name="apMat"
                        validators={{
                            requerido, minimo: minimo(2), maximo: maximo(50)
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".apMat"
                        show="touched"
                        wrapper="ul"
                        component={(props) => <MensajeError mensaje={props.children.toString()} />}
                        messages={
                            {
                                requerido: 'Tu apellido materno no puede estar vacío',
                                minimo: 'Tu apellido materno debe tener 2 caracteres como mínimo. ¿No crees? Pensemos en los chinos también',
                                maximo: 'No te pases! :( ¿Tu apellido materno cómo va a exceder los 50 caracteres?'
                            }
                        }
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label htmlFor="txtEdad" xs={12}>Edad: </Label>
                <Col xs={12}>
                    <Control.text
                        className="form-control"
                        model=".edad"
                        id="txtEdad"
                        name="edad"
                        validators={{
                            requerido, esNumero
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".edad"
                        show="touched"
                        wrapper="ul"
                        component={(props) => <MensajeError mensaje={props.children.toString()} />}
                        messages={
                            {
                                requerido: 'Tu edad no puede estar vacía',
                                esNumero: 'Tu edad debe estar en números. Ejemplo: 22, no "veintidós"'
                            }
                        }
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label xs={12}>Género:</Label>

                <Col>
                    <Row className="justify-content-around">

                        <FormGroup check>
                            <Label check>
                                <Control.radio

                                    name="genero"
                                    model=".genero"
                                    id="rdMujer"
                                    className="form-check-input"
                                    value="1"

                                />{' '}
                                Femenino

                </Label>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Control.radio
                                    name="genero"
                                    model=".genero"
                                    id="rdVaron"
                                    className="form-check-input"
                                    value="2"
                                />{' '}
                                Masculino
                </Label>
                        </FormGroup>

                    </Row>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label htmlFor="txtCorreo" xs={12}>Correo: </Label>
                <Col xs={12}>
                    <Control.text model=".correo"
                        name="correo"
                        id="txtCorreo"
                        className="form-control"
                        validators={{
                            requerido, minimo: minimo(12), maximo: maximo(50), correoValido
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".correo"
                        show="touched"
                        wrapper="ul"
                        component={(props) => <MensajeError mensaje={props.children.toString()} />}
                        messages={{
                            requerido: 'El correo no puede estar vacío',
                            minimo: 'Tu correo debe tener 12 caracteres como mínimo',
                            maximo: 'No te pases! :( Tu correo no puede exceder los 50 caracteres',
                            correoValido: 'Tu correo no está en formato correcto. Debe tener este formato: correo@algo.abc'
                        }}

                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label htmlFor="txtTelefono" xs={12}>Teléfono: (Opcional)</Label>
                <Col xs={12}>
                    <Control.text
                        model=".telefono"
                        name="telefono"
                        id="txtTelefono"
                        className="form-control"
                        validators={{
                            minimo: minimo(7), maximo: maximo(9), esNumero
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".telefono"
                        show="touched"
                        wrapper="ul"
                        component={(props) => <MensajeError mensaje={props.children.toString()} />}
                        messages={{
                            minimo: 'Tu teléfono debe tener 7 caracteres como mínimo',
                            maximo: 'Tu teléfono debe tener 9 caracteres, como en un celular',
                            esNumero: 'El teléfono solo consiste en números'
                        }}

                    />
                </Col>
            </FormGroup>
            <Botonera anteriorPaso={props.anteriorPaso} />
        </LocalForm>
    )

}

const VentanaError = (props) => {
    if (props.error) {

        return (
            <Modal isOpen={true} toggle={() => props.eliminarError()}>
                <ModalHeader>Ten en cuenta!</ModalHeader>
                <ModalBody>
                    {props.error}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => props.eliminarError()}>Listo</Button>{' '}
                </ModalFooter>
            </Modal>
        );
    } else {
        return (null)
    }
}

const MensajeError = (props) => {

    return (
        <Fade in><li className="text-danger">{props.mensaje}</li></Fade>
    );

}

export default FormRegistro;