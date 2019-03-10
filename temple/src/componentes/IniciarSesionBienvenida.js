import React, { Component } from 'react';
import { Alert, Card, CardHeader, CardBody, Button, Label,Col, Row } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const requerido=(val)=> val && val.length;
const maximo=(len)=>(val)=>!(val) || (val.length<=len);
const minimo=(len)=>(val)=>(val) && (val.length>=len);


class Login extends Component {

  constructor(props) {

    super(props);
    
    this.iniciarSesion=this.iniciarSesion.bind(this);
  }

  iniciarSesion(valores, evento){

    evento.preventDefault();
    this.props.iniciarSesion(valores.usuario,valores.contrasena);
  }

  render() {

    let alerta=null;

    if (this.props.estaCargando){

      alerta=<Alert color="info">Cargando . . .</Alert>;

    }

    else if (this.props.mensError){

      alerta=<Alert color="danger">{this.props.mensError}</Alert>;

    }

    else if (this.props.usuario){

      alerta=<Alert color="primary">{JSON.stringify(this.props.usuario)}</Alert>;


    }
    
    return (
      <>
      <div className="container debajo-barra">

        <div className="row">

          <div className="col-12">
            <div className="row">

              <div className="col-12 col-md-7">
                <Card>

                  <CardHeader className="card-header info-color white-text text-center">
                    <strong>Iniciar sesión en Temple</strong>
                  </CardHeader>

                  <CardBody>

                    <LocalForm onSubmit={(values,event)=>this.iniciarSesion(values,event)}>
                    
                      <Row className="form-group">
                        <Label htmlFor="txtUsuario" xs={12}>Usuario o correo:</Label>
                        <Col xs={12}>
                        <Control.text model=".usuario" type="text" name="usuario"
                        className="form-control" id="txtUsuario"
                        validators={{

                          requerido, minimo:minimo(4), maximo:maximo(50)

                        }} />
                        <Errors
                          className="text-danger"
                          model=".usuario"
                          show="touched"
                          messages={{
                            requerido:"El usuario no puede estar vacío",
                            minimo:"Se espera como mínimo 4 caracteres",
                            maximo: "Se espera como máximo 50 caracteres"                         
                          }}                          
                        
                        />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Label htmlFor="txtContrasena" xs={12}>Contraseña:</Label>
                        <Col xs={12}>
                        <Control.text model=".contrasena" type="password" name="contrasena"
                        className="form-control" id="txtContrasena"
                        validators={{

                          requerido, maximo:maximo(50)

                        }} />
                        <Errors
                          className="text-danger"
                          model=".contrasena"
                          show="touched"
                          messages={{
                            requerido:"La contraseña no puede estar vacía",
                            maximo: "Se espera como máximo 50 caracteres"                         
                          }}                          
                        
                        />
                        </Col>

                      </Row>
                      <Row className="form-group">
                        <Label xs={12}>¿No tienes cuenta? <a href="/"> Inscríbete</a></Label>
                        
                      </Row>
                      <Row className="form-group form-check">
                        <Label className="form-check-label" xs={12}>
                          <Control.checkbox model=".recordarme" className="form-check-input" type="checkbox" /> Recordarme en este equipo
                      </Label>
                      </Row>
                      <Row className="form-group">
                      <Col xs={{size:10, offset:1}}>
                      <Button type="submit" color="primary" className="btn btn-block">Ingresar</Button>
                      </Col>
                      </Row>

                    </LocalForm>

                  </CardBody>
                </Card>
                {alerta}
              </div>

              <div className="d-none d-md-block col-md-5">
                <img width="100%" height="100%" src="recursos/imagenes/crear.jpg" alt="img-login" />
              </div>

            </div>
          </div>
        </div>

      </div>
  </>

    );

  }

}

export default Login;