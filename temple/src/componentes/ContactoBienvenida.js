import React, { Component } from 'react';
import {FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import {Control, Form, Errors, actions} from 'react-redux-form';
import {Fade} from 'react-animation-components';

const requerido=(val)=>val && val.length;
const maximo=(tam)=>(val)=>!(val) || (val.length<=tam);
const minimo=(tam)=>(val)=>(val) && (val.length>=tam);
const correoValido=(val)=>/^[A-Z0-9a-z._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,4}$/i.test(val);

class Contacto extends Component {

    constructor(props) {

        super(props);
        
        this.procesarEnvio = this.procesarEnvio.bind(this);
        
    }

    procesarEnvio(valores) {

        alert(JSON.stringify(valores));


    }

    render() {

        return (
            <div className="container debajo-barra">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h3>Contáctate con nosotros!</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form  model="formContacto" onSubmit={(values)=>this.procesarEnvio(values)}>
                            <FormGroup row>
                                <Label htmlFor="txtNombre" md={2}>Nombre: </Label>
                                <Col md={10}>
                                    <Control.text   model=".nombre"
                                                    name="nombre"
                                                    id="txtNombre"
                                                    className="form-control"
                                                    validators={{
                                                        requerido, minimo:minimo(2), maximo:maximo(50)
                                                    }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".nombre"
                                        show="touched"
                                        wrapper="ul"
                                        component={(props) => <MensajeError mensaje={props.children.toString()}/>}
                                        messages={
                                            {
                                                requerido: 'El nombre no puede estar vacío',
                                                minimo: 'Tu nombre debe tener 2 caracteres como mínimo. ¡Sí! 2, ¿No conoces el nombre Zu?',
                                                maximo: 'No te pases! :( Tu nombre no puede exceder los 50 caracteres'
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="txtCorreo" md={2}>Correo: </Label>
                                <Col md={10}>
                                    <Control.text   model=".correo"
                                                    name="correo"
                                                    id="txtCorreo"
                                                    className="form-control"
                                                    validators={{
                                                        requerido, minimo: minimo(12), maximo:maximo(50), correoValido
                                                    }}
                                                     />
                                    <Errors
                                        className="text-danger"
                                        model=".correo"
                                        show="touched"
                                        wrapper="ul"
                                        component={(props) => <MensajeError mensaje={props.children.toString()}/>}
                                        messages={{
                                                requerido: 'El correo no puede estar vacío',
                                                minimo: 'Tu correo debe tener 12 caracteres como mínimo',
                                                maximo: 'No te pases! :( Tu correo no puede exceder los 50 caracteres',
                                                correoValido: 'Tu correo no está en formato correcto. Debe ser de este tipo correo@algo.abc'
                                        }}

                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="cboTipoContacto" md={2}>Tipo de contacto: </Label>
                                <Col md={10}>
                                    <Control.select model="tipoContacto"
                                                    name="tipoContacto"
                                                    id="cboTipoContacto"
                                                    className="form-control"
                                                    >
                                        <option>Duda</option>
                                        <option>Reclamo</option>
                                    </Control.select>

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="txtComentario" md={2}>Comentario: </Label>
                                <Col md={10}>
                                    <Control.textarea   model=".comentario"
                                                    rows="12"
                                                    name="comentario"
                                                    id="txtComentario"
                                                    className="form-control"
                                                    validators={{
                                                        requerido, minimo: minimo (20), maximo:maximo(500)
                                                    }} />
                                    <Errors
                                        className="text-danger"
                                        model=".comentario"
                                        show="touched"
                                        wrapper="ul"
                                        component={(props) => <MensajeError mensaje={props.children.toString()}/>}
                                        messages={{
                                            requerido:'Tu mensaje no puede estar vacío. ¿Cómo voy a saber lo que necesitas? He practicado adivinación pero no es para tanto',
                                            minimo:'Tu mensaje debe tener como mínimo 20 caracteres',
                                            maximo: 'Tu mensaje ha excedido los 500 caracteres :( trata de ser más conciso, por favorr. Igual te queremos <3'
                                        }}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <div className="col-md-10 offset-md-2">
                                    <button type="submit" className="btn btn-primary">Enviar información <span className="fa fa-heart"></span></button>
                                </div>
                            </FormGroup>

                        </Form>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <img src="recursos/imagenes/alenita.jpg" alt="la-arenita" width="100%" height="50%" />
                    </div>
                </div>


            </div>

        );

    }

}

const MensajeError=({mensaje})=>{

    return (
        <Fade in><li className="text-danger">{mensaje}</li></Fade>
    );

}

export default Contacto;