import React, { Component } from 'react';
import { Card, CardBody, Label, Col, Row, FormGroup, Alert, Button } from 'reactstrap';
import { Control } from 'react-redux-form';
import { URLBase } from '../compartido/URLBase';
import { Input } from 'reactstrap';

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
            indiceBusqueda: 0,
            txtPreferencias: [{ texto: '' }]
        }
        this.manejarCambio = this.manejarCambio.bind(this);
        this.modificarPreferencia = this.modificarPreferencia.bind(this);
        this.actualizarTexto = this.actualizarTexto.bind(this);
    }
    actualizarTexto(indice, txt) {
        let txtPref = { ...this.state.txtPreferencias }
        txtPref[indice] = { texto: txt }
        this.setState({ txtPreferencias: txtPref })
    }

    manejarCambio(e, indice) {

        // Primero, actualizo el estado del texto
        this.actualizarTexto(indice, e.target.value.toString());

        // Luego, hago la consulta
        return fetch(URLBase + 'registro/consultarCurso/' + e.target.value)
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

    modificarPreferencia(indice, preferencia) {
        // Primero, modifico el id de la preferencia (lo maneja el padre)
        this.props.modificarPreferencia(indice, { id: preferencia.id });

        // Y modifico el texto correspondiente de este componente
        this.actualizarTexto(indice, preferencia.texto);

    }

    render() {
        //const preferencias = [...Array(this.props.numPreferencias)].map((_, i) => {
        const preferencias = this.props.preferencias.map((e, i) => {
            //console.log(JSON.stringify(this.state))

            return (
                <Card key={i} className="mb-3">
                    <CardBody>
                        <Row>
                            {i > 0 ?
                                <Col xs={12}>
                                    <Row>
                                    <Label xs={11}>¿Qué otro curso deseas priorizar?</Label>
                                    <Col xs={1}>
                                        <button type="button" className="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </Col>
                                    </Row>
                                </Col>
                                :
                                <Label xs={12}>¿Qué cursos priorizamos para ti? <small>
                                    Puedes elegir otros cursos luego</small></Label>

                            }
                            <Col xs={12}>
                                <Row>
                                    <Col xs={12}>
                                        {e.id ?
                                            <Pastilla eliminarPreferencia={this.props.eliminarPreferencia} indice={i} texto={this.state.txtPreferencias[i].texto} />
                                            :
                                            <Input
                                                type="text"
                                                className="form-control"
                                                placeholder="Por ejemplo: Java, SQL Server, MySQL"
                                                autoComplete="off"
                                                value={this.state.txtPreferencias[i] ? this.state.txtPreferencias[i].texto : ''}
                                                onChange={(e) => this.manejarCambio(e, i)}
                                            />
                                        }
                                    </Col>
                                    {e.id ?
                                        null
                                        :
                                        <Sugerencias indice={i} resultados={this.state.resultados}
                                            modificarPreferencia={this.modificarPreferencia}
                                            indiceBusqueda={this.state.indiceBusqueda} />
                                    }
                                </Row>
                            </Col>



                        </Row>

                    </CardBody>

                </Card>
            );
        })
        return (
            <>
                {preferencias}
            </>
        )
    }

}

const Pastilla = (props) => {
    return (<Alert color="primary" toggle={() => { props.eliminarPreferencia(props.indice) }}>
        {props.texto}
    </Alert>)
}

const Sugerencias = (props) => {

    // Para que solo aparezcan las sugerencias en la caja actual
    if (props.indice == props.indiceBusqueda) {

        const options = props.resultados.map((e, i) => (
            <div key={e.ID_CUR} onClick={() => {
                props.modificarPreferencia(props.indice, { id: e.ID_CUR, texto: e.NOM_CUR })
            }}>
                <strong>{e.NOM_CUR}</strong>
            </div>
        ))
        return <div className="autocomplete-items">{options}</div>
    }

    else {
        return null;
    }
}

export default Preferencias;