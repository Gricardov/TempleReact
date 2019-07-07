import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

class Publicaciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opcionesAbiertas: false
        };
        this.permutarOpciones = this.permutarOpciones.bind(this);
    }

    permutarOpciones() {
        this.setState({
            opcionesAbiertas: !this.state.opcionesAbiertas
        })
    }

    render() {

        let publicaciones = [];
        
        if (this.props.publicaciones) {

            publicaciones = this.props.publicaciones.map((e, i) => {
                return (

                    <Card key={i} className="mb-4">
                        <CardHeader>
                            <Row>
                                <Col xs={12}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="mr-2">
                                                <img className="rounded-circle" width="45" src={e.imgPer || this.props.perfil.imgPer} alt="" />
                                            </div>
                                            <div className="ml-2">
                                                <div className="h5 m-0">@{e.nomUsu || this.props.perfil.nomUsu}</div>
                                                <div className="h7 text-muted">{e.nomUsu || this.props.perfil.nomUsu} {e.apaUsu || this.props.perfil.apaUsu} {e.amaUsu || this.props.perfil.amaUsu}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="dropdown">
                                                <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                                    <div className="h6 dropdown-header">Configuración</div>
                                                    <a className="dropdown-item" href="#">Guardar</a>
                                                    <a className="dropdown-item" href="#">Ocultar</a>
                                                    <a className="dropdown-item" href="#">Denunciar >:(</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <div className="text-muted h7 mb-2">
                                <i className="fa fa-clock-o"></i>{e.fecha}</div>
                            <a className="card-link" href="#">
                                <h5 className="card-title">{e.titulo}</h5>
                            </a>

                            <p className="card-text">
                                {e.descripcion}
                            </p>

                        </CardBody>
                        <CardFooter>
                            <a href="#" className="card-link"><i className="fa fa-gittip"></i>({e.corazones}) Me gusta</a>
                            <a href="#" className="card-link"><i className="fa fa-comment"></i>({e.comentarios}) Comentar</a>
                            <a href="#" className="card-link"><i className="fa fa-mail-forward"></i>({e.compartidos}) Responder en privado</a>
                        </CardFooter>
                    </Card>
                )
            })
        }

        return (
            <>
                {publicaciones}
            </>
        )
    }

}

export default Publicaciones;

