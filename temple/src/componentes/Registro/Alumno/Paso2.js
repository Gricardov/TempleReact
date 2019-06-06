import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button, Input } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import { Formik, Form, Field } from 'formik';
import { consultaNiveles } from '../../../redux/CreadorAcciones';
import { connect } from 'react-redux';

import Opciones from '../../Utilidades/OpcionesCombo';
import Botonera from '../BotoneraRegistro';
import Preferencias from './ComponentePreferencias';

const mapStateToProps = (state) => {

    return {
        niveles: state.niveles
    }

}

const mapDispatchToProps = (dispatch) => ({

    consultaNiveles: () => dispatch(consultaNiveles())
})



class Paso2 extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            ...this.props.valores[1]
        })

        // Para llenar el combo de opciones al iniciar
        this.props.consultaNiveles();

        // Para las preferencias
        this.agregarPreferencia = this.agregarPreferencia.bind(this);
        this.modificarPreferencia = this.modificarPreferencia.bind(this);
        this.eliminarPreferencia = this.eliminarPreferencia.bind(this);

        // Para confirmar cambios
        this.confirmarCambios = this.confirmarCambios.bind(this);

    }

    // Para las preferencias

    agregarPreferencia = () => {

        let preferencias = this.state.preferencias;
        preferencias.push({ id: null, texto: '' })
        this.setState({ preferencias: preferencias })
    }

    modificarPreferencia = (indice, preferencia) => {
        let preferencias = this.state.preferencias;

        // Primero, verifico que no haya repetidos
        const condicion = preferencias.filter((pref) => pref.id && pref.id == preferencia.id)[0]

        if (condicion) {
            this.props.crearError('Ya has registrado el curso ' + condicion.texto);
        } else {
            preferencias[indice] = {...preferencias[indice],...preferencia};
        }
        this.setState({ preferencias: preferencias })
    }

    eliminarPreferencia = (indice) => {
        let preferencias = this.state.preferencias;
        preferencias.splice(indice, 1);
        this.setState({ preferencias: preferencias })
    }

    // Para confirmar cambios
    confirmarCambios = (values) => {
        // Verifico que por lo menos haya una preferencia
        const condicion = this.state.preferencias.filter((pref) => pref.id)[0]

        if (condicion) {
            this.setState({
                ...values
            }, () => {

                this.props.siguientePaso(this.state);

            })

        } else {
            this.props.crearError('Debes seleccionar un curso como mínimo')
        }

    }

    render() {

        return (
            <Row>
                <Col xs={12}>
                    <Formik
                        
                        onSubmit={(values, { setSubmitting }) => {

                            this.confirmarCambios(values);
                        }}>
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

                            <Form>
                                <FormGroup row>
                                    <Col xs={12}>
                                        <Row>
                                            <Col>
                                                <p>¿A qué nivel buscas que te enseñen?<small> Puedes cambiar esto después</small></p>
                                            </Col>
                                            <Col>
                                                <p className='float-right text-warning'>Máximo 4</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12}>
                                        <Field
                                            type="select"
                                            className="form-control"
                                            component="select"
                                            id="cboNivel"
                                            name="nivel">
                                            <Opciones opciones={this.props.niveles.niveles} seleccionados={[this.state.nivel]} />
                                        </Field>

                                    </Col>
                                </FormGroup>
                                <Preferencias preferencias={this.state.preferencias} modificarPreferencia={this.modificarPreferencia}
                                    eliminarPreferencia={this.eliminarPreferencia} />

                                <FormGroup row>
                                    <Col xs={12}>
                                        <Button id="btnPreferencia"
                                            color="primary"
                                            block
                                            disabled={this.state.preferencias.length >= this.props.valores[1].maxPreferencias ? true : false}
                                            onClick={() => { this.agregarPreferencia() }}>
                                            <span className="fa fa-plus"></span> Agregar otro curso
                        </Button>
                                    </Col>
                                </FormGroup>
                                <Botonera pasoActual={2} valores={this.props.valores} anteriorPaso={this.props.anteriorPaso} />
                            </Form>)}
                    </Formik>

                </Col>
            </Row>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Paso2);