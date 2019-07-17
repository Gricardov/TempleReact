import React, { Component } from 'react';
import { Row, Col, Input, Card } from 'reactstrap';
let moment = require('moment');

class Citas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        let citas = [];

        if (this.props.citas) {

            citas = this.props.citas.map((e, i) => {
                return (
                    <div key={i}>
                        <Row className="valign-wrapper popular_item" key={e.idCon}>
                            <Col xs={3} md={12} className="p_img text-center mb-3">
                                <img src={e.imgPer} alt="img-resena" className="circle responsive-img" />
                            </Col>
                            <Col xs={9} md={12} className="p_content">
                                <span><b>Alumno:</b> {e.nomAlu} {e.apaAlu} {e.amaAlu}</span><br />
                                <span><b>Curso:</b> {e.nomCur}</span><br />
                                <span><b>Modalidad:</b> {e.nomMod}</span><br />
                                <span><b>Estado:</b> {e.nomEst}</span><br />
                                <span><b>Desde:</b> {moment(e.fecIni).utc().format('HH:mm:ss DD-MM-YYYY')}</span><br />
                                <span><b>Hasta:</b> {moment(e.fecFin).utc().format('HH:mm:ss DD-MM-YYYY')}</span>
                            </Col>

                        </Row>
                        <hr />
                    </div>
                )
            })
        }

        return (
            <div className="quickFade tarjeta-seccion">
                <div className="popular_posts popular_fast">
                    <h3 className="categories_tittle me_tittle">Mis citas</h3>
                    <div className="container like_img">
                        {citas}
                    </div>
                </div>


            </div>
        )
    }

}

export default Citas;