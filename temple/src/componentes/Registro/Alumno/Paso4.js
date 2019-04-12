import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors, Field, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import Botonera from '../BotoneraRegistro';
import { Fade } from 'react-animation-components';
import { URLBase } from '../../../compartido/URLBase';
//import { consultaUsuarioPorNomUsu } from '../../../redux/CreadorAcciones';
import SubidorImagen from '../../Utilidades/SubidorImagen';

require('../../../../node_modules/react-dropzone-component/styles/filepicker.css')
require('../../../../node_modules/dropzone/dist/min/dropzone.min.css')
/*
const mapStateToProps = (state) => {

    return {
        usuario: state.usuario
    }

}

const mapDispatchToProps = (dispatch) => ({
    consultaUsuarioPorNomUsu: (nomUsu) => {
        return true;
    }
})
*/
async function checkNickname(nomUsu, dispatch) {
    dispatch(actions.setPending('usuario', true));
    fetch(URLBase + 'usuario/consulta/porNomUsu/' + nomUsu)
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var mensErr = new Error(error.message);
            throw mensErr;
        })
        .then(response => response.json())
        .then(usuario => {
            if (usuario && usuario.length == 0) {
                console.log('disponible')
                dispatch(actions.setValidity('usuario', {
                    available: true
                }));
            } else {
                console.log('no disponible')
                dispatch(actions.setValidity('usuario', {
                    available: false
                }));
            }
        })
        .catch(error => {
            console.log("No se pudo obtener el usuario : " + error.message)
            dispatch(actions.setValidity('usuario', {
                available: true
            }));

        })

    /*res.then(function(r){
        return false;
    })*/
    //dispatch(actions.setPending('usuario', false));
}

const requerido = (val) => val && val.length;
const maximo = (tam) => (val) => !(val) || (val.length <= tam);
const minimo = (tam) => (val) => (val) && (val.length >= tam);
const marcado = (val) => val;

class Paso4 extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            ...this.props.valores[3]
        })
        this.actualizarPerfil = this.actualizarPerfil.bind(this);
        this.actualizarPortada = this.actualizarPortada.bind(this);
        // Para confirmar cambios
        this.confirmarCambios = this.confirmarCambios.bind(this);
        //this.nomUsuDisponible = this.nomUsuDisponible.bind(this);
    }

    /*nomUsuDisponible = (val) => {
        actions.setPending('usuario', true);
        let res=fetch(URLBase + 'usuario/consulta/porNomUsu/' + val)
            .then(response => {

                if (response.ok) {

                    return response;

                }

                else {

                    var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                    error.response = response;
                    throw error;

                }


            }, error => {

                var mensErr = new Error(error.message);
                throw mensErr;

            })
            .then(response => response.json())
            .then(usuario => {
                if (usuario.length == 0) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(error => {
                console.log("No se pudo obtener el usuario : " + error.message)
                return true;
            })

            res.then(function(results){
                actions.setValidity('usuario', {available: results});

                alert(results)
            })

    };*/

    actualizarPerfil(file) {
        this.setState({
            perfil: file
        })
    }

    actualizarPortada(file) {
        this.setState({
            portada: file
        })
    }

    confirmarCambios = (values, event) => {

        // Actualizo el estado
        this.setState(
            {
                ...values,
                portada:this.state.portada,
                perfil:this.state.perfil
            }, () => {
                // Envío el estado cuando este se ha actualizado       
                this.props.siguientePaso(this.state, event);
            }
        )


    }
    render() {

        return (
            <Col xs={12}>
                <LocalForm initialState={this.props.valores[3]}
                    onSubmit={(values, event) => { this.confirmarCambios(values, event) }}
                    encType="multipart/form-data">
                    <FormGroup row>
                        <Label htmlFor="txtNomUsu" xs={12}>Elige un nombre de usuario</Label>
                        <Col xs={12}>
                            <Control.text
                                className="form-control"
                                model=".usuario"
                                id="txtNomUsu"
                                name="usuario"
                                /*asyncValidators={{
                                    disponible: this.props.consultaUsuarioPorNomUsu
                                }}*/
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
                                        maximo: '¿Cómo es que tu nombre de usuario va a pasar los 15 caracteres?',
                                        disponible: 'Ese nombre de usuario no está disponible. Escribe otro'
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
                        <Label htmlFor="imgPerfil" xs={12}>Sube una foto de perfil</Label>
                        <Col xs={12}>
                            <SubidorImagen actualizarImagen={(file) => this.actualizarPerfil(file)} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="imgPerfil" xs={12}>Sube una foto de perfil</Label>
                        <Col xs={12}>
                            <SubidorImagen actualizarImagen={(file) => this.actualizarPortada(file)} />
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

//export default (connect(mapStateToProps, mapDispatchToProps)(Paso4));
export default Paso4;