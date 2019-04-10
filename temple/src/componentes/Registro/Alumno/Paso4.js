import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import Botonera from '../BotoneraRegistro';
import { Fade } from 'react-animation-components';

const requerido = (val) => val && val.length;
const maximo = (tam) => (val) => !(val) || (val.length <= tam);
const minimo = (tam) => (val) => (val) && (val.length >= tam);
const marcado = (val) => val;

class Paso4 extends Component {

    render() {
        return (
            <Col xs={12}>
                <LocalForm initialState={this.props.valores[3]}
                    onSubmit={(values, event) => this.props.siguientePaso(values, event)}
                    encType="multipart/form-data">
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
                        <Label htmlFor="txtSobreMi" xs={12}>¿Cómo te describes a ti mismo(a)?</Label>
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
                        <Label htmlFor="imgPerfil" xs={12}>Foto de perfil</Label>
                        <Col xs={12}>
                            <Control.file
                                className="form-control"
                                model=".perfil"
                                id="imgPerfil"
                                name="perfil"
                                type="jpg"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="imgPortada" xs={12}>Foto de portada</Label>
                        <Col xs={12}>
                            <Control.file
                                className="form-control"
                                model=".portada"
                                id="imgPortada"
                                name="portada"
                                type="jpg"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col xs={{ size: 10, offset: 2 }}>
                            <div className="form-check">
                                <Label check>
                                    <Control.checkbox
                                        model=".acepta"
                                        name="acepta"
                                        className="form-check-input"
                                        validators={{
                                            marcado
                                        }} />
                                    {' '}
                                    <strong>Estoy de acuerdo con los términos del servicio</strong>
                                </Label>
                            </div>
                        </Col>
                        <Errors
                            className="text-danger"
                            model=".acepta"
                            wrapper="ul"
                            show="touched"
                            component={(props) => <MensajeError mensaje={props.children.toString()} />}
                            messages={{
                                marcado: 'Debes aceptar los términos del servicio'
                            }}

                        />
                    </FormGroup>
                    <Botonera pasoActual={4} valores={this.props.valores} anteriorPaso={this.props.anteriorPaso} />
                </LocalForm>
            </Col >
        )
    }
}

const MensajeError = (props) => {

    return (
        <Fade in><li className="text-danger">{props.mensaje}</li></Fade>
    );

}

export default Paso4;