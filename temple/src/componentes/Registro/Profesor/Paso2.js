import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button, Input } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import { Formik, Form, Field } from 'formik';
import { consultaNiveles, consultaModalidades } from '../../../redux/CreadorAcciones';
import { connect } from 'react-redux';

import Botonera from '../BotoneraRegistro';
import Preferencias from './ComponentePreferencias';

const mapStateToProps = (state) => {

    return {
        niveles: state.niveles,
        modalidades: state.modalidades
    }

}

const mapDispatchToProps = (dispatch) => ({

    consultaNiveles: () => dispatch(consultaNiveles()),
    consultaModalidades: () => dispatch(consultaModalidades())
})



class Paso2 extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            ...this.props.valores[1]
        })

        // Para llenar el combo de opciones al iniciar
        this.props.consultaNiveles();
        this.props.consultaModalidades();

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
        preferencias.push({ niveles: [], idCurso: null, textoCurso: '', silabo: '', modalidades: [], etiquetas: [] })
        this.setState({ preferencias: preferencias })
    }

    modificarPreferencia = (indice, preferencia) => {
        let preferencias = this.state.preferencias;

        // Primero, verifico que no haya repetidos
        const condicion = preferencias.filter((pref) => pref.idCurso && pref.idCurso == preferencia.idCurso)[0]

        if (condicion) {
            this.props.crearError('Ya has registrado el curso ' + condicion.textoCurso);
        } else {
            preferencias[indice] = { ...preferencias[indice], ...preferencia };
        }
        this.setState({ preferencias: preferencias }, () => { /*alert(JSON.stringify(this.state.preferencias))*/ })
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

                                <Preferencias preferencias={this.state.preferencias} modificarPreferencia={this.modificarPreferencia}
                                    eliminarPreferencia={this.eliminarPreferencia} niveles={this.props.niveles.niveles} modalidades={this.props.modalidades.modalidades}/>

                                <FormGroup row>
                                    <Col xs={12}>
                                        <Button id="btnPreferencia"
                                            color="primary"
                                            block
                                            disabled={this.state.preferencias.length >= this.props.valores[1].maxPreferencias ? true : false}
                                            onClick={() => { this.agregarPreferencia() }}>
                                            <span className="fa fa-plus"></span> Agregar otra preferencia
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