import React, { Component } from 'react';
import { Row, Col, Input } from 'reactstrap';
let moment = require('moment');

class Citas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        let citas=[];

        if (this.props.citas){

        citas = this.props.citas.map((e, i) => {
            return (
                <Row className="valign-wrapper popular_item" key={e.idCon}>
                    <Col xs={3} className="p_img">
                            <img src={e.imgPer} alt="img-resena" className="circle responsive-img" />
                    </Col>
                    <Col xs={9} className="p_content">
                        <a href="#">{e.nomProf} {e.apaProf} {e.amaProf}</a>
                        <span>Curso: {e.nomCur}</span><br/>
                        <span>Modalidad: {e.nomMod}</span><br/>
                        <span>Estado: {e.nomEst}</span><br/>
                        <span className="black_text">Desde: {moment(e.fecIni).utc().format('HH:mm:ss DD-MM-YYYY')}{' '} 
                        hasta: {moment(e.fecFin).utc().format('HH:mm:ss DD-MM-YYYY')}</span>
                    </Col>
                </Row>
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