import React, { Component } from 'react';
import { Row, Col, Input } from 'reactstrap';

class Resenas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        let resenas = [];

        if (this.props.resenas) {

            resenas = this.props.resenas.map((e, i) => {
                return (
                    <div>
                        <Row className="valign-wrapper popular_item" key={e.idRes}>
                            <Col xs={3} className="p_img">
                                <img src={e.imgPer} alt="img-resena" className="circle responsive-img" />
                            </Col>
                            <Col xs={9} className="p_content">
                                <p>{e.nomUsu} {e.apaUsu} {e.amaUsu} comentó: </p>
                                <span>{e.descripcion}</span><br />
                                <span>{e.calificacion} estrellas</span><br />
                                <span className="black_text">{e.fecha}</span>
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
                    <h3 className="categories_tittle me_tittle">Resenas</h3>
                    <div className="container like_img">
                        {resenas}
                    </div>
                </div>


            </div>
        )
    }

}

export default Resenas;