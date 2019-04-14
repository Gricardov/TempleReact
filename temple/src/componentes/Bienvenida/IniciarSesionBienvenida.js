import React, { Component } from 'react';
import { Alert, Card, CardTitle, CardBody, Button, Label, Col, Row, Input } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Fade } from 'react-animation-components';
import { Formik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import * as RUTAS from '../../compartido/rutas';

const vacio = (val) => !val || !val.length;

class Login extends Component {

  constructor(props) {

    super(props);
    this.state = {
      usuario: '',
      contrasena: '',
      recordarme: false
    }

    this.iniciarSesion = this.iniciarSesion.bind(this);
  }

  iniciarSesion() {
    this.props.history.push(RUTAS.INICIO_ALUMNO.ruta);
  }

  render() {

    let alerta = null;

    if (this.props.estaCargando) {

      alerta = <Alert color="info">Cargando . . .</Alert>;

    }

    else if (this.props.mensError) {

      alerta = <Alert color="danger">{this.props.mensError}</Alert>;

    }

    else if (this.props.usuario) {

      alerta = <Alert color="primary">{JSON.stringify(this.props.usuario)}</Alert>;


    }

    return (
      <>
        <div className="container debajo-barra bloque-contenedor">

          <Row>

            <Col xs={12}>

              <Card>
                <Row>

                  <Col xs={12} md={7}>


                    <CardBody>
                      <CardTitle className="text-center text-muted">
                        <strong>Iniciar sesión en Temple</strong>
                      </CardTitle>
                      <Formik
                        initialValues={{ ...this.state }}

                        onSubmit={(values, { setSubmitting }) => {

                          this.setState({
                            ...values
                          }, () => {

                            this.iniciarSesion()

                          })
                        }}
                        validate={values => {
                          let errors = {};

                          // Para el usuario
                          let usuario = values.usuario;
                          if (vacio(usuario)) {
                            errors.usuario = 'Usuario requerido'
                          }

                          // Para la contraseña
                          let contrasena = values.contrasena;
                          if (vacio(contrasena)) {
                            errors.contrasena = 'Contraseña requerida'
                          }

                          return errors;
                        }}
                      >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

                          <Form>

                            <Row className="form-group">
                              <Label htmlFor="txtUsuario" xs={12}>Usuario: </Label>
                              <Col xs={12}>
                                <Input
                                  type="text"
                                  tag={Field}
                                  id="txtUsuario"
                                  name="usuario"

                                />
                                {errors.usuario && touched.usuario ? <MensajeError mensaje={errors.usuario} /> : null}
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Label htmlFor="txtContrasena" xs={12}>Contraseña: </Label>
                              <Col xs={12}>
                                <Input
                                  type="password"
                                  tag={Field}
                                  id="txtContrasena"
                                  name="contrasena"

                                />
                                {errors.contrasena && touched.contrasena ? <MensajeError mensaje={errors.contrasena} /> : null}

                              </Col>

                            </Row>
                            <Row className="form-group">
                              <Label xs={12}>¿No tienes cuenta? <a href="/"> Inscríbete</a></Label>

                            </Row>
                            <Row className="form-group form-check">
                              <Label className="form-check-label" xs={12}>
                                <Input className="form-check-input" type="checkbox" name="recordarme" /> Recordarme en este equipo
                      </Label>
                            </Row>
                            <Row className="form-group">
                              <Col xs={{ size: 10, offset: 1 }}>
                                <Button type="submit" color="primary" className="btn btn-block">Ingresar</Button>
                              </Col>
                            </Row>

                          </Form>
                        )}
                      </Formik>
                      {alerta}

                    </CardBody>

                  </Col>

                  <Col xs={12} md={5} className="d-none d-md-block">
                    <img width="100%" height="100%" src="recursos/imagenes/iniciar-sesion-inicio.jpg" alt="img-login" />
                  </Col>

                </Row>

              </Card>



            </Col>
          </Row>

        </div>
      </>

    );

  }

}

const MensajeError = ({ mensaje }) => {

  return (
    <Fade in><p className="text-danger">{mensaje}</p></Fade>
  );

}

export default withRouter(Login);