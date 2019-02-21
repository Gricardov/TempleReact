import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';


class Contacto extends Component {

    constructor(props) {

        super(props);
        this.state = {
            nombre: "",
            correo: "",
            tipoContacto: "",
            comentario: "",
            acepta: false,
            alterados: {

                nombre: false,
                correo: false,
                comentario: false,
                acepta: false

            }
        };

        this.procesarEnvio = this.procesarEnvio.bind(this);
        this.reflejarCambio = this.reflejarCambio.bind(this);
        this.validarDatos = this.validarDatos.bind(this);
        this.haSidoAlterado = this.haSidoAlterado.bind(this);
    }

    procesarEnvio() {

        alert(JSON.stringify(this.state));


    }

    reflejarCambio(evento) {

        const objetivo = evento.target;

        const clave = objetivo.name;
        const valor = (objetivo.type === 'checkbox' ? objetivo.checked : objetivo.value);

        this.setState({
            [clave]: valor

        });

    }

    validarDatos() {

        const errores = {
            nombre: '',
            correo: '',
            comentario: '',
            acepta: ''

        }

        const nombre = this.state.nombre;
        const correo = this.state.correo;
        const comentario = this.state.comentario;
        const acepta = this.state.acepta;

        if (this.state.alterados.nombre) {

            if (nombre.length <= 3) {

                errores.nombre = "El nombre debe tener más de 3 caracteres"

            }

            else if (nombre.length > 50) {

                errores.nombre = "El nombre no puede tener más de 50 caracteres"


            }
        }

        if (this.state.alterados.correo) {

            const expReg = /^([a-zA-Z0-9]+@[a-z]{2,10}.[a-z]{3})$/

            if (!expReg.test(correo)) {

                errores.correo = "El correo no tiene el formato solicitado"

            }
        }

        if (this.state.alterados.comentario) {

            if (comentario.length <= 10) {

                errores.comentario = "El comentario no puede ser menor a 10 caracteres"

            }

            else if (comentario.length > 500) {

                errores.comentario = "El comentario no puede contener más de 500 caracteres"

            }
        }

        if (this.state.alterados.acepta) {

            if (acepta === false) {

                errores.acepta = "Debes aceptar las bases legaless papito"

            }
        }
        return errores;

    }

    haSidoAlterado(evento) {

        const objetivo = evento.target;

        this.setState({

            alterados: {

                [objetivo.name]: true

            }

        })

    }

    render() {
        const errores = this.validarDatos();

        return (
            <div className="container debajo-barra">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h3>Contáctate con nosotros!</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.procesarEnvio}>
                            <FormGroup row>
                                <Label htmlFor="txtNombre" md={2}>Nombre: </Label>
                                <Col md={10}>
                                    <Input type="text" name="nombre" id="txtNombre"
                                        value={this.state.nombre} onChange={this.reflejarCambio}
                                        onBlur={this.haSidoAlterado}
                                        valid={errores.nombre === ''}
                                        invalid={errores.nombre !== ''}
                                    />
                                    <FormFeedback>{errores.nombre}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="txtCorreo" md={2}>Correo: </Label>
                                <Col md={10}>
                                    <Input type="email" name="correo" id="txtCorreo"
                                        value={this.state.correo} onChange={this.reflejarCambio}
                                        onBlur={this.haSidoAlterado}
                                        valid={errores.correo === ''}
                                        invalid={errores.correo !== ''} />
                                    <FormFeedback>{errores.correo}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="txtTipoContacto" md={2}>Tipo de contacto: </Label>
                                <Col md={10}>
                                    <Input type="select" name="tipoContacto" id="txtTipoContacto" value={this.state.tipoContacto} onChange={this.reflejarCambio}>
                                        <option>Duda</option>
                                        <option>Queja</option>
                                        <option>Propuesta indecente</option>
                                    </Input>

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="txtComentario" md={2}>Comentario: </Label>
                                <Col md={10}>
                                    <Input type="textarea" rows="12" name="comentario"
                                        id="txtComentario" value={this.state.comentario}
                                        onChange={this.reflejarCambio}
                                        onBlur={this.haSidoAlterado}
                                        valid={errores.comentario === ''}
                                        invalid={errores.comentario !== ''} />
                                    <FormFeedback>{errores.comentario}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <div className="col-md-10 offset-md-2">
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="acepta"
                                                checked={this.state.acepta} onChange={this.reflejarCambio}
                                                onBlur={this.haSidoAlterado}
                                                valid={errores.acepta === ''}
                                                invalid={errores.acepta !== ''}

                                            /> {' '}
                                            <strong>He leído las bases legaless</strong>
                                            <FormFeedback>{errores.acepta}</FormFeedback>
                                        </Label>
                                    </FormGroup>
                                </div>
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

export default Contacto;