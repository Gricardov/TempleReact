import React, { Component } from 'react';
import { Row, Col, Input } from 'reactstrap';

class Resenas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {



        return (
            <div className="quickFade tarjeta-seccion">
                <div className="popular_posts popular_fast">
                    <h3 className="categories_tittle me_tittle">Resenas</h3>
                    <div className="container like_img">
                    <Row className="valign-wrapper popular_item">
                        <Col xs={3} className="p_img">
                            <a href="#">
                                <img src="data:image/jpeg;base64,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" alt="img-resena" className="circle responsive-img" />
                            </a>
                        </Col>
                        <Col xs={9} className="p_content">
                            <a href="#">Excelente servicio <span>5 estrellas</span></a>
                            <span className="black_text">Hace 1 día</span>
                        </Col>
                    </Row>

                    <Row className="valign-wrapper popular_item">
                        <Col xs={3} className="p_img">
                            <a href="#">
                                <img src="https://s2.r29static.com//bin/entry/2c8/720x864,85/2166446/adele-husband-simon-konecki-2166446.webp" alt="img-resena" className="circle responsive-img" />
                            </a>
                        </Col>
                        <Col xs={9} className="p_content">
                            <a href="#">Me quedé enamorado de su voz y su sonrisa <span>5 estrellas</span></a>
                            <span className="black_text">Hace 2 días</span>
                        </Col>
                    </Row>

                    <Row className="valign-wrapper popular_item">
                        <Col xs={3} className="p_img">
                            <a href="#">
                                <img src="http://cdn.repretel.com/files/2018/09/04/B49.jpg" alt="img-resena" className="circle responsive-img" />
                            </a>
                        </Col>
                        <Col xs={9} className="p_content">
                            <a href="#">Me gusta mucho <span>5 estrellas</span></a>
                            <span className="black_text">Hace 3 días</span>
                        </Col>
                    </Row>

                    <Row className="valign-wrapper popular_item">
                        <Col xs={3} className="p_img">
                            <a href="#">
                                <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg" alt="img-resena" className="circle responsive-img" />
                            </a>
                        </Col>
                        <Col xs={9} className="p_content">
                            <a href="#">Qué guapa es. Un pedacito de cielo <span>5 estrellas</span></a>
                            <span className="black_text">Hace 3 días</span>
                        </Col>
                    </Row>
                    </div>
                </div>


            </div>
        )
    }

}

export default Resenas;