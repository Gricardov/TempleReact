import React, { Component } from 'react';
import { Card, CardBody, Label, Col, FormGroup } from 'reactstrap';
import { Control } from 'react-redux-form';

class Preferencias extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        //const preferencias = [...Array(this.props.numPreferencias)].map((_, i) => {
            const preferencias=this.props.preferencias.map((e,i)=>{
            return (
                <Card key={i} className="mb-3">
                    <CardBody>
                        <FormGroup row>
                            { i>0 ? 
                            <Label xs={12}>¿Qué otro curso deseas priorizar?</Label>
                            :
                            <Label xs={12}>¿Qué cursos priorizamos para ti?<small>
                                Puedes elegir otros cursos luego</small></Label>
                            }
                            
                            <Col xs={12} md={6}>
                                <Label htmlFor="cboCategoria">Categoria: </Label>
                                <Control.select
                                    className="form-control"
                                    model=".categoria"
                                    id="cboCategoria"
                                    name="categoria"
                                >
                                    <option>Ingenieria</option>
                                    <option>Ciencias sociales</option>
                                    <option>Ciencias de la salud</option>
                                    <option>Psicología</option>
                                </Control.select>
                            </Col>
                            <Col xs={12} md={6}>
                                <Label htmlFor="cboSubcategoria">Subcategoria: </Label>
                                <Control.select
                                    className="form-control"
                                    model=".subcategoria"
                                    id="cboSubcategoria"
                                    name="subcategoria"
                                >
                                    <option>Cálculo</option>
                                    <option>Física</option>
                                    <option>Química</option>
                                    <option>Estadística</option>
                                    <option>Asesoría de tesis</option>
                                    <option>Programación</option>
                                </Control.select>
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


export default Preferencias;