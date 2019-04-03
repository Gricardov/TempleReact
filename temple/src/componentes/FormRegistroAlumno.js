import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import { Fade } from 'react-animation-components';
import Botonera from './BotoneraRegistro';
import Preferencias from './ComponentePreferencias';
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
                preferencias: [{ id: null }]
            },
            paso3: {

            },
            paso4: {

            }
        }
        this.agregarPreferencia = this.agregarPreferencia.bind(this);
        this.modificarPreferencia = this.modificarPreferencia.bind(this);
        this.eliminarPreferencia = this.eliminarPreferencia.bind(this);

    }

    agregarPreferencia = () => {
        let paso = { ...this.state.paso2 }
        paso.preferencias.push({ id: null })
        this.setState({ paso2: paso })
    }

    modificarPreferencia = (indice, preferencia) => {
        let paso = { ...this.state.paso2 }
        let preferencias = paso.preferencias;
        preferencias[indice] = preferencia;
        this.setState({ paso2: paso })
    }

    eliminarPreferencia = (indice) => {
        let paso = { ...this.state.paso2 }
        let preferencias = paso.preferencias;
        //alert(JSON.stringify(preferencias))
        preferencias.splice(indice, 1);
        this.setState({ paso2: paso })
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
                    ={this.agregarPreferencia} preferencias={this.state.paso2.preferencias} modificarPreferencia={this.modificarPreferencia}
                    eliminarPreferencia={this.eliminarPreferencia} />)



        }
    }

}

const Paso2 = (props) => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="registro" timeout={300}>
                <LocalForm onSubmit={(values) => props.siguientePaso(values)}>

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
                    <Preferencias preferencias={props.preferencias} modificarPreferencia={props.modificarPreferencia}
                        eliminarPreferencia={props.eliminarPreferencia} />

                    <FormGroup row>
                        <Col xs={12}>
                            <Button id="btnPreferencia"
                                color="primary"
                                block
                                onClick={() => { props.agregarPreferencia() }}>
                                <span className="fa fa-plus"></span> Agregar otro curso
                        </Button>
                        </Col>
                    </FormGroup>
                    <Botonera anteriorPaso={props.anteriorPaso} />

                </LocalForm>
            </CSSTransition>
        </TransitionGroup>
    )

}

const Paso1 = (props) => {

    return (
        <TransitionGroup>

            <CSSTransition classNames="registro" timeout={300}>

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
            </CSSTransition>
        </TransitionGroup>

    )

}

const MensajeError = ({ mensaje }) => {

    return (
        <Fade in><li className="text-danger">{mensaje}</li></Fade>
    );

}

export default FormRegistro;