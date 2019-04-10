import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import Botonera from '../BotoneraRegistro';
import { Fade } from 'react-animation-components';

const requerido = (val) => val && val.length;
const maximo = (tam) => (val) => !(val) || (val.length <= tam);
const minimo = (tam) => (val) => (val) && (val.length >= tam);
const correoValido = (val) => /^[A-Z0-9a-z._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,4}$/i.test(val);
const esNumero = (val) => !isNaN(Number(val));

class Paso4 extends Component {

    render() {
        return (
            <Col xs={12}>
                <LocalForm initialState={this.props.valores} onSubmit={(values) => this.props.siguientePaso(values)}>
                    <FormGroup row>
                        <Label htmlFor="txtNomUsu" xs={12}>Elige un nombre de usuario</Label>
                        <Col xs={12}>
                            <Control.text
                                className="form-control"
                                model=".usuario"
                                id="txtNomUsu"
                                name="usuario"
                                validators={{
                                    requerido, minimo: minimo(5), maximo: maximo(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".usuario"
                                show="touched"
                                wrapper="ul"
                                component={(props) => <MensajeError mensaje={props.children.toString()} />}
                                messages={
                                    {
                                        requerido: 'Tu nombre de usuario no puede estar vacíos',
                                        minimo: 'Tu nombre de usuario debe tener 5 caracteres como mínimo',
                                        maximo: '¿Cómo es que tu nombre de usuario va a pasar los 15 caracteres?'
                                    }
                                }
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="txtContrasena" xs={12}>Elige una contraseña</Label>
                        <Col xs={12}>
                            <Control.password
                                className="form-control"
                                model=".contrasena"
                                id="txtContrasena"
                                name="contrasena"
                                validators={{
                                    requerido, minimo: minimo(8), maximo: maximo(50)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".contrasena"
                                show="touched"
                                wrapper="ul"
                                component={(props) => <MensajeError mensaje={props.children.toString()} />}
                                messages={
                                    {
                                        requerido: 'Debes escribir una contraseña',
                                        minimo: 'Tu contraseña debe tener 8 caracteres como mínimo',
                                        maximo: 'Excelente contraseña! Pero solo soportamos 50 caracteres como máximo'
                                    }
                                }
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="txtSobreMi" xs={12}>¿Cómo te describes a ti mismo?</Label>
                        <Col xs={12}>
                            <Control.textarea
                                className="form-control"
                                model=".sobreMi"
                                id="txtSobreMi"
                                name="sobreMi"
                                rows="5"
                                cols="12"
                                validators={{
                                    maximo: maximo(500)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".sobreMi"
                                show="touched"
                                wrapper="ul"
                                component={(props) => <MensajeError mensaje={props.children.toString()} />}
                                messages={
                                    {
                                        maximo: 'Tu descripción no puede exceder los 500 caracteres :('
                                    }
                                }
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="txtBuscando" xs={12}>¿Cómo es tu profesor ideal?</Label>
                        <Col xs={12}>
                            <Control.textarea
                                className="form-control"
                                model=".buscando"
                                id="txtBuscando"
                                name="buscando"
                                rows="5"
                                cols="12"
                                validators={{
                                    maximo: maximo(500)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".buscando"
                                show="touched"
                                wrapper="ul"
                                component={(props) => <MensajeError mensaje={props.children.toString()} />}
                                messages={
                                    {
                                        maximo: 'Tu profesor ideal no puede exceder los 500 caracteres :('
                                    }
                                }
                            />
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
                    <Botonera anteriorPaso={this.props.anteriorPaso} />
                </LocalForm>
            </Col>
        )
    }
}

const MensajeError = (props) => {

    return (
        <Fade in><li className="text-danger">{props.mensaje}</li></Fade>
    );

}

export default Paso4;