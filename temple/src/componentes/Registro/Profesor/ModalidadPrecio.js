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
        this.modificarModalidad = this.modificarModalidad.bind(this);
        this.modificarPrecio = this.modificarPrecio.bind(this);

    }

    // Esto sirve para activar y desactivar las casillas; a la vez modificar el arreglo del registro
    modificarModalidad(idMod, event) {

        // Primero, verifico si ya se ha seleccionado uno con el mismo id
        let modalidades = this.state.modalidades;

        // Si está seleccionado algo, que lo tome en cuenta
        if (event.target.checked) {
            let modalidad = this.state.modalidades.filter(modalidad => modalidad.idMod == idMod)[0];

            // Solo lo va a agregar si no existe
            if (!modalidad) {

                modalidades.push({ idMod: idMod, preMod: 0 });

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

    // Esto modifica los precios según idMod
    modificarPrecio(idMod, precio) {

        let modalidades = this.state.modalidades;

        let indiceModalidad = this.state.modalidades.findIndex(modalidad => modalidad.idMod === idMod);
        modalidades[indiceModalidad] = { idMod: idMod, preMod: precio };

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
                                    <Input type="checkbox"
                                    checked={seleccionado?true:false}
                                        onChange={(event) => { this.modificarModalidad(modalidad.ID_MOD, event); }}
                                    />{' '}
                                    {modalidad.NOM_MOD}
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col xs={7} className="p-1">
                            <Input type="text" value={seleccionado?seleccionado.preMod:""} placeholder="Precio hora (S/.)" disabled={
                                !seleccionado
                            }
                                onChange={(event) => { this.modificarPrecio(modalidad.ID_MOD, event.target.value) }}
                            />
                        </Col>
                    </Row>
                </Col>
            );

        });

        return (

            <Row>

                <Label xs={12}>Ingresa tus modalidades y precios</Label>
                {menu}
            </Row>

        );
    }
}
export default ModalidadPrecio