import React, { Component } from 'react'
import { render } from 'react-dom'
import { Input, Col, Row, FormGroup, Label } from 'reactstrap';

class ModalidadPrecio extends Component {

    constructor(props) {
        super(props);

        // El estado gestiona y devuelve solo las modalidades seleccionadas
        this.state = {
            modalidades: []
        }
        this.modificarModalidadPrecio = this.modificarModalidadPrecio.bind(this);


    }

    modificarModalidadPrecio(idMod, event) {

        // Primero, verifico si ya se ha seleccionado uno con el mismo id
        let modalidades = this.state.modalidades;

        // Si está seleccionado algo, que lo tome en cuenta
        if (event.target.checked) {
            let modalidad = this.state.modalidades.filter(modalidad => modalidad.idMod == idMod)[0];

            // Solo lo va a agregar si no existe
            if (!modalidad) {

                modalidades.push({ idMod: idMod, preMod: 12 });

            }

        }
        // Si no, que lo elimine (Solo si existe)
        else {
            let indiceModalidad = this.state.modalidades.findIndex(modalidad => modalidad.idMod === idMod);
            if (indiceModalidad != -1) {
                modalidades.splice(indiceModalidad, 1);

            }
        }

        // Establezco el nuevo estado y llamo al callback
        this.setState({
            modalidades: modalidades
        }, () => { this.props.modificarPreferencia(this.state.modalidades); });

    }

    render() {

        // Para que solo se pinten los seleccionados
        let seleccionados = this.props.seleccionados;

        //alert('seleccionados: '+JSON.stringify(seleccionados)+' modalidades: '+JSON.stringify(this.props.modalidades));


        const menu = this.props.modalidades.map((modalidad, indice) => {

            // Esto permite verificar si el id coincide con el arreglo recibido. Así, se puede mostrar activado/desactivado
            let seleccionado = seleccionados.filter(sel => sel.idMod == modalidad.ID_MOD)[0];

            return (

                <Col xs={12} key={modalidad.ID_MOD}>
                    <Row>
                        <Col xs={5} className="pt-1">
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" onChange={(event) => { this.modificarModalidadPrecio(modalidad.ID_MOD, event) }} />{' '}
                                    {modalidad.NOM_MON}
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col xs={7} className="p-1">
                            <Input type="text" placeholder="Precio hora (S/.)" disabled={
                                !seleccionado
                            } />
                        </Col>
                    </Row>
                </Col>
            );

        });

        return (

            <Row>

                <Label xs={12}>Ingreses sus modalidades y precios</Label>
                {menu}
            </Row>

        );
    }
}
export default ModalidadPrecio