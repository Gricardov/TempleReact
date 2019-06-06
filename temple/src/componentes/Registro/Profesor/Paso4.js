import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Input, Card, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import Botonera from '../BotoneraRegistro';
import { Fade } from 'react-animation-components';
import { URLBase } from '../../../compartido/URLBase';
import { Formik, Form, Field } from 'formik';
//import { consultaUsuarioPorNomUsu } from '../../../redux/CreadorAcciones';
import SubidorImagen from '../../Utilidades/SubidorImagen';
import SubidorDocumento from '../../Utilidades/SubidorDocumento';

require('../../../../node_modules/react-dropzone-component/styles/filepicker.css')
require('../../../../node_modules/dropzone/dist/min/dropzone.min.css')

const vacio = (val) => !val || !val.length;
const maximo = (val, tam) => !(val) || (val.length <= tam);
const minimo = (val, tam) => (val) && (val.length >= tam);
const correoValido = (val) => /^[A-Z0-9a-z._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,4}$/i.test(val);
const esNumero = (val) => !isNaN(Number(val));

class Paso4 extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            ...this.props.valores[3]
        })
        this.actualizarPerfil = this.actualizarPerfil.bind(this);
        this.actualizarPortada = this.actualizarPortada.bind(this);
        this.actualizarArchivo = this.actualizarArchivo.bind(this);

        // Para confirmar cambios
        this.confirmarCambios = this.confirmarCambios.bind(this);
    }

    // <3 <3

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

    actualizarArchivo(file){
        this.setState({
            cv: file
        })
    }

    confirmarCambios = (values, event) => {
        // Actualizo el estado
        this.setState(
            {
                ...values,
                portada: this.state.portada,
                perfil: this.state.perfil,
                cv: this.state.cv
            }, () => {
                // Envío el estado cuando este se ha actualizado       
                this.props.siguientePaso(this.state, event);
            }
        )


    }

    render() {

        return (
            <Row>
                <Col xs={12}>
                    <Formik initialValues={{ ...this.props.valores[3] }}
                        onSubmit={(values, { setSubmitting }) => {

                            this.confirmarCambios(values);

                        }}

                        validate={values => {
                            let errors = {};

                            // Para usuario
                            let usuario = values.usuario;
                            if (vacio(usuario)) {
                                errors.usuario = 'Nombre de usuario requerido'
                            } else if (!minimo(usuario, 8)) {
                                errors.usuario = 'El nombre de usuario debe tener 8 caracteres como mínimo'
                            } else if (!maximo(usuario, 50)) {
                                errors.usuario = 'El nombre de usuario no puede pasar los 50 caracteres'
                            }

                            // Para la contrasena
                            let contrasena = values.contrasena;
                            if (vacio(contrasena)) {
                                errors.contrasena = 'Contraseña requerida'
                            } else if (!minimo(contrasena, 8)) {
                                errors.contrasena = 'La contraseña debe tener 8 caracteres como mínimo'
                            } else if (!maximo(contrasena, 50)) {
                                errors.contrasena = 'La contraseña no puede pasar los 50 caracteres'
                            }

                            // Para sobre mi
                            let sobreMi = values.sobreMi;
                            if (!vacio(sobreMi)) {
                                if (!minimo(sobreMi, 10)) {
                                    errors.sobreMi = 'Tu descripción debe tener 10 caracteres como mínimo'
                                } else if (!maximo(sobreMi, 500)) {
                                    errors.sobreMi = 'Tu descripción no puede pasar los 500 caracteres'
                                }
                            }
                            // Para el checkbox
                            let acepta = values.acepta;
                            if (!acepta) {
                                errors.acepta = "Debes aceptar las condiciones"
                            }
                            return errors;
                        }}

                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <Form>
                                <FormGroup row>
                                    <Label htmlFor="txtUsuario" xs={12}>Elige un nombre de usuario</Label>
                                    <Col xs={12}>
                                        <Input
                                            type="text"
                                            tag={Field}
                                            id="txtUsuario"
                                            name="usuario"
                                        />
                                        {errors.usuario && touched.usuario ? <MensajeError mensaje={errors.usuario} /> : null}
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="txtContrasena" xs={12}>Elige una contraseña</Label>
                                    <Col xs={12}>
                                        <Input
                                            type="password"
                                            tag={Field}
                                            id="txtContrasena"
                                            name="contrasena"
                                        />
                                        {errors.contrasena && touched.contrasena ? <MensajeError mensaje={errors.contrasena} /> : null}
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="txtEspecialidad" xs={12}>Escribe brevemente en qué te especializas</Label>
                                    <Col xs={12}>
                                        <Input
                                            type="text"
                                            tag={Field}
                                            id="txtEspecialidad"
                                            name="especialidad"
                                        />
                                        {errors.especialidad && touched.especialidad ? <MensajeError mensaje={errors.especialidad} /> : null}
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="txtExpLab" xs={12}>¿Cuál es tu experiencia laboral?</Label>
                                    <Col xs={12}>
                                        <Field
                                            component="textarea"
                                            className="form-control"
                                            id="txtExpLab"
                                            name="expLab"
                                        />
                                        {errors.expLab && touched.expLab ? <MensajeError mensaje={errors.expLab} /> : null}

                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="txtHabCla" xs={12}>¿Cuáles son sus habilidades clave?</Label>
                                    <Col xs={12}>
                                        <Field
                                            component="textarea"
                                            className="form-control"
                                            id="txtHabCla"
                                            name="habCla"
                                        />
                                        {errors.habCla && touched.habCla ? <MensajeError mensaje={errors.habCla} /> : null}

                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="txtSobreMi" xs={12}>Escribe una breve descripción de ti</Label>
                                    <Col xs={12}>
                                        <Field
                                            component="textarea"
                                            className="form-control"
                                            id="txtSobreMi"
                                            name="sobreMi"
                                        />
                                        {errors.sobreMi && touched.sobreMi ? <MensajeError mensaje={errors.sobreMi} /> : null}

                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="docCv" xs={12}>Sube tu currículum vitae</Label>
                                    <Col xs={12}>
                                        <SubidorDocumento actualizarArchivo={(file) => this.actualizarArchivo(file)} />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label htmlFor="imgPerfil" xs={12}>Sube una foto de perfil</Label>
                                    <Col xs={12}>
                                        <SubidorImagen actualizarImagen={(file) => this.actualizarPerfil(file)} />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="imgPortada" xs={12}>Sube una foto de portada</Label>
                                    <Col xs={12}>
                                        <SubidorImagen actualizarImagen={(file) => this.actualizarPortada(file)} />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs={{ size: 10, offset: 2 }}>
                                        <div className="form-check">
                                            <Label check>

                                                <Input
                                                    type="checkbox"
                                                    tag={Field}
                                                    id="chkAcepta"
                                                    name="acepta"
                                                />
                                                {' '}
                                                <strong>Estoy de acuerdo con los términos del servicio</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    {errors.acepta && touched.acepta ? <MensajeError mensaje={errors.acepta} /> : null}

                                </FormGroup>
                                <Botonera pasoActual={4} valores={this.props.valores} anteriorPaso={this.props.anteriorPaso} />
                            </Form>
                        )}
                    </Formik>
                </Col >
            </Row>
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