import React, { Component } from 'react';
import { Card, CardBody, Label, Col, FormGroup } from 'reactstrap';
import { Control } from 'react-redux-form';
import { URLBase } from '../compartido/URLBase';

class Preferencias extends Component {

    constructor(props) {

        super(props);
        this.state = {
            consulta: '',
            resultados: []
        }
        this.consultar = this.consultar.bind(this);

    }

    consultar(e) {

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
                this.setState({ resultados: res })
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
                        <FormGroup row>
                            {i > 0 ?
                                <Label xs={12}>¿Qué otro curso deseas priorizar?</Label>
                                :
                                <Label xs={12}>¿Qué cursos priorizamos para ti? <small>
                                    Puedes elegir otros cursos luego</small></Label>
                            }

                            <Col xs={12}>
                                <Control.text
                                    className="form-control"
                                    model=".curso"
                                    id="txtCurso"
                                    name="curso"
                                    placeholder="Por ejemplo: Java, SQL Server, MySQL"
                                    autoComplete="off"
                                    onChange={(e) => this.consultar(e)}
                                />
                                <Col xs={12}>
                                <Sugerencias resultados={this.state.resultados}/>
                                </Col>
                            </Col>

                        </FormGroup>

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

const Sugerencias = (props) => {
    const options = props.resultados.map((e,i)=> (
        <div key={e.ID_CUR}>
           <strong>{e.NOM_CUR}</strong>
        </div>
    ))
    return <div className="autocomplete-items">{options}</div>
}

export default Preferencias;