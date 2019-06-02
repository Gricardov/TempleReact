import React, { Component } from 'react';
import { Card, CardBody, Label, Col, Row, FormGroup, Alert, Button, Container } from 'reactstrap';
import { Control } from 'react-redux-form';
import { URLBase } from '../../../compartido/URLBase';
import { Input } from 'reactstrap';

import SelectorMultiple from '../../Utilidades/SelectorMultiple';
import ModalidadPrecio from './ModalidadPrecio';

class Preferencias extends Component {

    constructor(props) {
        // Este componente maneja su porpio texto, sus consultas y los resultados que recibe. El padre le dice qué mostrar
        super(props);
        // consulta guarda la consulta actual del usuario; resultados almacena los resultados; indiceBusqueda indica cuál
        // de los campos ha cambiado (para que no aparezca las sugerencias en todas las cajas) y txtPreferencias guarda los
        // textos posicionados en las cajas
        this.state = {
            consulta: '',
            resultados: [],
            indiceBusqueda: 0
        }
        this.manejarCambio = this.manejarCambio.bind(this);

    }


    manejarCambio(e, indice) {

        // Actualizo la preferencia
        this.props.modificarPreferencia(indice, { idCurso: null, textoCurso: e.target.value.toString() });

        // Luego, hago la consulta
        return fetch(URLBase + 'curso/consulta/porNombre/' + e.target.value)
            .then(response => {

                if (response.ok) {

                    return response;

                }

                else {

                    var error = new Error("Ha ocurrido un error con el siguiente mensaje:\n" + response.status + " : " + response.statusText);
                    error.response = response;
                    throw error;

                }


            }, error => {

                var mensErr = new Error(error.message);
                throw mensErr;

            })
            .then(response => response.json())
            .then(res => {
                this.setState({ resultados: res, indiceBusqueda: indice })

            })
            .catch(error => {
                console.log("Error : " + error.message)
            })
    }

    render() {


        //const preferencias = [...Array(this.props.numPreferencias)].map((_, i) => {
        const preferencias = this.props.preferencias.map((e, i) => {

            return (
                <Card key={i} className="mb-3">
                    <CardBody>
                        <Row key={i}>

                            <Col xs={12}>
                                <Row>
                                    <Col xs={11}>
                                        <p>¿A qué niveles académicos enseñas?<small> (Selecciona varios con CTRL)</small></p>
                                    </Col>
                                    {i > 0 ?
                                        <Col xs={1}>
                                            <button type="button" className="close" aria-label="Close" onClick={() => this.props.eliminarPreferencia(i)}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </Col>
                                        :
                                        null
                                    }
                                </Row>
                            </Col>

                            <Col xs={12}>

                                <SelectorMultiple opciones={this.props.niveles} seleccionado={this.state.nivel}
                                    agregarSeleccion={(seleccion) => {
                                        this.props.modificarPreferencia(i, { niveles: seleccion });

                                    }} />

                            </Col>


                            <Col xs={12} className="mt-4">
                                <Row>
                                    <Label xs={11}>¿Qué curso enseñas para es(os) nivel(es) académic(os)?</Label>
                                </Row>
                            </Col>


                            <Col xs={12}>
                                {e.idCurso ?
                                    <Pastilla modificarPreferencia={this.props.modificarPreferencia} indice={i}
                                        texto={e.textoCurso} />
                                    :
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Por ejemplo: Java, SQL Server, MySQL"
                                        autoComplete="off"
                                        value={e.textoCurso ? e.textoCurso : ''}
                                        onChange={(e) => this.manejarCambio(e, i)}
                                    />
                                }
                            </Col>

                            {e.idCurso ?
                                null
                                :
                                i == this.state.indiceBusqueda ?
                                    <Sugerencias resultados={this.state.resultados}
                                        modificarPreferencia={this.props.modificarPreferencia} indice={i} />
                                    :
                                    null
                            }

                            <Col xs={12} className="mt-4">
                                <Row>
                                    <Label xs={11}>¿Qué temas enseñas para ese curso?</Label>
                                </Row>
                            </Col>

                            <Col xs={12} sm={6}>
                                <Input
                                    type="textarea"
                                    className="form-control"

                                />
                            </Col>
                            
                            <Col xs={12} sm={6}>
                                <ModalidadPrecio modificarPreferencia={this.props.modificarPreferencia} indice={i} modalidades={this.props.modalidades}/>
                            </Col>

                        </Row>
                    </CardBody>

                </Card>

            );
        })
        return (
            <>
                <h3>Agregar preferencias</h3>
                {preferencias}
            </>
        )
    }

}

const Pastilla = (props) => {
    return (<Alert color="primary" >
        <Row>
            <Col xs={11}>
                {props.texto}
            </Col>
            <Col xs={1}>
                <span className="enlace-boton" onClick={() => { props.modificarPreferencia(props.indice, { idCurso: null, textoCurso: props.texto }) }}>
                    Editar
                </span>
            </Col>
        </Row>

    </Alert>)
}

const Sugerencias = (props) => {

    const options = props.resultados.map((e, i) => (
        <div key={e.ID_CUR} onClick={() => {

            props.modificarPreferencia(props.indice, { idCurso: e.ID_CUR, textoCurso: e.NOM_CUR })
        }}>
            <strong>{e.NOM_CUR}</strong> - Perteneciente a la categoría Ciencias de la computación
            <br />
            Relacionados:{' '}
            <span className="badge badge-pill badge-primary">ruby</span>{' '}
            <span className="badge badge-pill badge-success">sql</span>{' '}
            <span className="badge badge-pill badge-info">sarita</span>
        </div>
    ))
    return <div className="autocomplete-items">{options}</div>
}

export default Preferencias;