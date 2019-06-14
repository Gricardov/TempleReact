import React, { Component } from 'react';
import { Card, CardBody, Label, Col, Row, FormGroup, Alert, Button, Container } from 'reactstrap';
import { Control } from 'react-redux-form';
import { URLBase } from '../../../compartido/URLBase';
import { Input } from 'reactstrap';
import Sugerencias from '../../Utilidades/SugerenciasBusqueda';

class Preferencias extends Component {

    constructor(props) {
        // Este componente maneja su porpio texto, sus consultas y los resultados que recibe. El padre le dice qué mostrar
        super(props);
        // consulta guarda la consulta actual del usuario; resultados almacena los resultados; indiceBusqueda indica cuál
        // de los campos ha cambiado (para que no aparezca las sugerencias en todas las cajas) y txtPreferencias guarda los
        // textos posicionados en las cajas
        this.state = {
            consulta: '',
            indiceBusqueda: 0
        }
        this.manejarCambio = this.manejarCambio.bind(this);

    }


    manejarCambio(e, indice) {

        // Actualizo la preferencia
        this.props.modificarPreferencia(indice, { id: null, texto: e.target.value.toString() });

        this.props.consultaCursosPorNombre(e.target.value);

        this.setState({ indiceBusqueda: indice });
    }

    render() {


        //const preferencias = [...Array(this.props.numPreferencias)].map((_, i) => {
        const preferencias = this.props.preferencias.map((e, i) => {

            return (
                <Card key={i} className="mb-3">
                    <CardBody>
                        <Row key={i}>

                            {i > 0 ?
                                <Col xs={12}>
                                    <Row>
                                        <Label xs={11}>¿Qué otro curso deseas priorizar?</Label>
                                        <Col xs={1}>
                                            <button type="button" className="close" aria-label="Close" onClick={() => this.props.eliminarPreferencia(i)}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </Col>
                                    </Row>
                                </Col>
                                :
                                <Label xs={12}>¿Qué cursos priorizamos para ti? (Selecciona máximo 4) <small>
                                    Puedes editar estos cursos luego</small></Label>

                            }

                            <Col xs={12}>
                                {e.id ?
                                    <Pastilla modificarPreferencia={this.props.modificarPreferencia} indice={i}
                                        texto={e.texto} />
                                    :
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Por ejemplo: Java, SQL Server, MySQL"
                                        autoComplete="off"
                                        value={e.texto ? e.texto : ''}
                                        onChange={(e) => this.manejarCambio(e, i)}
                                    />
                                }
                            </Col>

                            {e.id ?
                                null
                                :
                                i == this.state.indiceBusqueda ?
                                    <Sugerencias resultados={this.props.resultados}
                                        cargandoResultados={this.props.cargandoResultados}
                                        errorResultados={this.props.errorResultados}
                                        modificarPreferencia={
                                            (preferencia) => {
                                                this.props.modificarPreferencia(i, preferencia)
                                            }} />
                                    :
                                    null
                            }
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
    return (<Alert color="primary" >
        <Row>
            <Col xs={11}>
                {props.texto}
            </Col>
            <Col xs={1}>
                <span className="enlace-boton" onClick={() => { props.modificarPreferencia(props.indice, { id: null, texto: props.texto }) }}>
                    Editar
                </span>
            </Col>
        </Row>

    </Alert>)
}


export default Preferencias;