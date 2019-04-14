import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Input, FormGroupProps, Card, CardBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import Botonera from '../BotoneraRegistro';
import { Fade } from 'react-animation-components';
import { Formik, Form, Field } from 'formik';

const vacio = (val) => !val || !val.length;
const maximo = (val, tam) => !(val) || (val.length <= tam);
const minimo = (val, tam) => (val) && (val.length >= tam);
const correoValido = (val) => /^[A-Z0-9a-z._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,4}$/i.test(val);
const esNumero = (val) => !isNaN(Number(val));

class Paso1 extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            ...this.props.valores[0]
        })
        this.confirmarCambios = this.confirmarCambios.bind(this);
    }

    confirmarCambios(values) {

        this.setState({
            ...values
        }, () => {

            this.props.siguientePaso(this.state)

        })
    }

    render() {
        return (
            <Col xs={12}>

                <Formik
                    initialValues={{ ...this.props.valores[0] }}
                    onSubmit={(values, { setSubmitting }) => {

                        this.setState({
                            ...values
                        }, () => {

                            this.props.siguientePaso(this.state)

                        })
                    }}
                    validate={values => {
                        let errors = {};

                        // Para nombres
                        let nombres = values.nombres;
                        if (vacio(nombres)) {
                            errors.nombres = 'Nombre requerido'
                        } else if (!minimo(nombres, 2)) {
                            errors.nombres = 'Los nombres deben tener 2 caracteres como mínimo'
                        } else if (!maximo(nombres, 50)) {
                            errors.nombres = 'Los nombres no pueden pasar los 50 caracteres'
                        }

                        // Para el apellido paterno
                        let apPat = values.apPat;
                        if (vacio(apPat)) {
                            errors.apPat = 'Apellido paterno requerido'
                        } else if (!minimo(apPat, 2)) {
                            errors.apPat = 'El apellido paterno debe tener 2 caracteres como mínimo'
                        } else if (!maximo(apPat, 50)) {
                            errors.apPat = 'El apellido paterno no puede pasar los 50 caracteres'
                        }

                        // Para el apellido materno
                        let apMat = values.apMat;
                        if (vacio(apMat)) {
                            errors.apMat = 'Apellido materno requerido'
                        } else if (!minimo(apMat, 2)) {
                            errors.apMat = 'El apellido materno debe tener 2 caracteres como mínimo'
                        } else if (!maximo(apMat, 50)) {
                            errors.apMat = 'El apellido materno no puede pasar los 50 caracteres'
                        }

                        // Para la edad
                        let edad = values.edad;
                        if (vacio(edad)) {
                            errors.edad = 'Edad requerida'
                        } else if (!esNumero(edad)) {
                            errors.edad = 'Tu edad debe ser un número'
                        }

                        // Para el correo
                        let correo = values.correo;
                        if (vacio(correo)) {
                            errors.correo = 'Se requiere por lo menos un correo'
                        } else if (!correoValido(correo)) {
                            errors.correo = 'El correo debe tener un formato válido como abc@cde.com'
                        }
                        // Para el teléfono (Es opcional)
                        let telefono = values.telefono;
                        if (!vacio(telefono)) {
                            if (!esNumero(telefono)) {
                                errors.telefono = 'El teléfono debe ser un número'
                            }

                        }

                        return errors;
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="txtNombres" xs={12}>Nombres</Label>
                                <Col xs={12}>
                                    <Input
                                        type="text"
                                        tag={Field}
                                        id="txtNombres"
                                        name="nombres"

                                    />
                                    {errors.nombres && touched.nombres ? <MensajeError mensaje={errors.nombres} /> : null}
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="txtApPat" xs={12}>Apellido paterno</Label>
                                <Col xs={12}>
                                    <Input
                                        type="text"
                                        tag={Field}
                                        id="txtApPat"
                                        name="apPat"

                                    />
                                    {errors.apPat && touched.apPat ? <MensajeError mensaje={errors.apPat} /> : null}

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="txtApMat" xs={12}>Apellido materno</Label>
                                <Col xs={12}>
                                    <Input
                                        type="text"
                                        tag={Field}
                                        id="txtApMat"
                                        name="apMat"

                                    />
                                    {errors.apMat && touched.apMat ? <MensajeError mensaje={errors.apMat} /> : null}

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="txtEdad" xs={12}>Edad: </Label>
                                <Col xs={12}>
                                    <Input
                                        type="text"
                                        tag={Field}
                                        id="txtEdad"
                                        name="edad"

                                    />
                                    {errors.edad && touched.edad ? <MensajeError mensaje={errors.edad} /> : null}

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label xs={12}>Género:</Label>

                                <Col>
                                    <Row className="justify-content-around">

                                        <FormGroup check>
                                            <Label check>
                                                <Field
                                                    type="radio"
                                                    name="genero"
                                                    id="rdMujer"
                                                    value="1"
                                                    checked={values.genero == 1}
                                                />{' '}
                                                Femenino
                                                           </Label>
                                        </FormGroup>

                                        <FormGroup check>
                                            <Label check>
                                                <Field
                                                    type="radio"
                                                    name="genero"
                                                    id="rdVaron"
                                                    value="2"
                                                    checked={values.genero == 2}

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
                                    <Input
                                        type="email"
                                        tag={Field}
                                        id="txtCorreo"
                                        name="correo"

                                    />
                                    {errors.correo && touched.correo ? <MensajeError mensaje={errors.correo} /> : null}

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="txtTelefono" xs={12}>Teléfono: (Opcional)</Label>
                                <Col xs={12}>
                                    <Input
                                        type="text"
                                        tag={Field}
                                        name="telefono"
                                        id="txtTelefono"

                                    />
                                    {errors.telefono && touched.telefono ? <MensajeError mensaje={errors.telefono} /> : null}

                                </Col>
                            </FormGroup>
                            <Botonera pasoActual={1} valores={this.props.valores} anteriorPaso={this.props.anteriorPaso} />
                        </Form>
                    )}
                </Formik>

            </Col>

        )
    }
}


const MensajeError = (props) => {

    return (
        <Fade in><p className="text-danger">{props.mensaje}</p></Fade>
    );

}

export default Paso1;