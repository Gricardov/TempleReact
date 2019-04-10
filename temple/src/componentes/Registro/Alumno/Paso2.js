import React, { Component } from 'react';
import { FormGroup, Label, Col, Row, Card, CardBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import Botonera from '../BotoneraRegistro';
import Preferencias from '../ComponentePreferencias';

class Paso2 extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            ...this.props.valores
        })

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
            preferencias[indice] = preferencia;
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
            this.props.siguientePaso(this.state);

        } else {
            this.props.crearError('Debes seleccionar un curso como mínimo')
        }

    }

    render() {

        return (

            <Col xs={12}>
                <LocalForm onSubmit={(values) => {
                    this.confirmarCambios(values)
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
                    <Preferencias preferencias={this.state.preferencias} modificarPreferencia={this.modificarPreferencia}
                        eliminarPreferencia={this.eliminarPreferencia} />

                    <FormGroup row>
                        <Col xs={12}>
                            <Button id="btnPreferencia"
                                color="primary"
                                block
                                disabled={this.state.preferencias.length >= this.props.valores.maxPreferencias ? true : false}
                                onClick={() => { this.agregarPreferencia() }}>
                                <span className="fa fa-plus"></span> Agregar otro curso
                        </Button>
                        </Col>
                    </FormGroup>
                    <Botonera anteriorPaso={this.props.anteriorPaso} siguientePaso={this.confirmarCambios} />

                </LocalForm>
            </Col>
        )
    }
}


export default Paso2;