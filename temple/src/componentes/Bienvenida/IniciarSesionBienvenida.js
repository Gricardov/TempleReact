import React, { Component } from 'react';
import { Alert, Card, CardTitle, CardBody, Button, Label, Col, Row, Input } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Fade } from 'react-animation-components';
import { Formik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { iniciarSesion } from '../../redux/CreadorAcciones';

import Cargando from '../Utilidades/CargandoComponente';

import * as RUTAS from '../../compartido/rutas';

const mapStateToProps = (state) => {

  return {

    sesion: state.sesion
  }

}

const mapDispatchToProps = (dispatch) => ({

  iniciarSesion: (usuario, contrasena) => dispatch(iniciarSesion(usuario, contrasena))
})

// Validador
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

  componentDidUpdate(prevProps, prevState) {
    //alert(JSON.stringify(this.props))
    if (prevProps.sesion.usuario != this.props.sesion.usuario) {

      // Si la sesión se ha iniciado correctamente, que pregunte qué tipo de usuario es
      if (this.props.sesion.usuario) {

        if (this.props.sesion.usuario.ID_ROL == 1) {
          this.props.history.push(RUTAS.INICIO_PROFESOR.ruta);

        } else {
          this.props.history.push(RUTAS.INICIO_ALUMNO.ruta);

        }

      }
    }
  }

  iniciarSesion(usuario, contrasena) {

    // Indico que inicie sesión
    this.props.iniciarSesion(usuario, contrasena);

  }

  render() {

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

                            this.iniciarSesion(values.usuario, values.contrasena)

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
                            <Row>
                              <Col xs={12}>
                                {
                                  this.props.sesion.estaCargando
                                    ?
                                    <Cargando mensaje="Iniciando sesión..." />
                                    :
                                    this.props.sesion.mensError
                                      ?
                                      <ResultadoLogin mensaje={this.props.sesion.mensError} />
                                      :
                                      null
                                }
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col xs={{ size: 10, offset: 1 }}>
                                <Button type="submit" color="primary" className="btn btn-block">Ingresar</Button>
                              </Col>
                            </Row>

                          </Form>
                        )}

                      </Formik>
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

const ResultadoLogin = ({ mensaje }) => {
  return (<Fade in><Alert color="danger">{mensaje}</Alert></Fade>)
}

const MensajeError = ({ mensaje }) => {

  return (
    <Fade in><p className="text-danger">{mensaje}</p></Fade>
  );

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));