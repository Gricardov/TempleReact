import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class Presentacion extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="quickFade tarjeta-seccion">
                <Row className="mb-4">
                    <Col xs={12} className="sectionTitle">
                        <h3 className="categories_tittle me_tittle">Sobre mí</h3>
                    </Col>

                    <Col xs={12} className="sectionContent">
                        <p>{this.props.sobreMi}</p>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col xs={12} className="sectionTitle">
                        <h3 className="categories_tittle">Experiencia laboral</h3>
                    </Col>

                    <Col xs={12} className="sectionContent">

                        <article>
                            <h2>Ha trabajado</h2>
                            <p className="subDetails">En periodo</p>
                            <p>{this.props.expLab}</p>
                        </article>
                    </Col>
                </Row>


                <Row className="mb-4">
                    <Col xs={12} className="sectionTitle">
                        <h3 className="categories_tittle">Habilidades clave</h3>
                    </Col>

                    <Col xs={12} className="sectionContent">
                        <p>{this.props.habCla}</p>
                    </Col>
                </Row>



            </div>
        )
    }

}

export default Presentacion;


