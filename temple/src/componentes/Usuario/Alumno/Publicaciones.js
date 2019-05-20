import React, { Component } from 'react';
import { Row, Col, Dropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';

class Publicaciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opcionesAbiertas:false
        };
        this.permutarOpciones=this.permutarOpciones.bind(this);
    }

    permutarOpciones(){
        this.setState({
            opcionesAbiertas:!this.state.opcionesAbiertas
        })
    }

    render() {
        return (
            <div className="post profile_post quickFade">
                <div className="post_content">
                    <a href="#" className="post_img">
                        <img src="data:image/jpeg;base64,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"
                        />
                        <span><i className="ion-android-radio-button-off"></i>Photography</span>
                    </a>
                    <Row className="author_area">
                        <Col xs={4} className="author">
                            <Row>
                                <Col xs={3} className="media_left">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c" />
                                </Col>
                                <Col xs={9} className="media_body">
                                    <a href="#">Mila Luna</a>
                                    <span>Hace 5 minutos</span>
                                </Col>

                            </Row>
                        </Col>
                        <Col xs={4} className="btn_floating">
                            <Row>
                                <a href="#" className="btn-publicacion btn-me-encorazona">
                                    <i className="fa fa-heart fa-1x"></i>
                                </a>
                                <a href="#" className="btn-publicacion btn-responder-privado">
                                    <i className="fa fa-envelope fa-1x"></i>
                                </a>
                            </Row>
                        </Col>
                        <Col xs={4} className="like_user">
                        <Row>
                            <Col xs={9}>
                            <ul className="like_img">
                                <li><a href="#" className="single_l_1"><img src="data:image/jpeg;base64,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" /></a></li>
                                <li><a href="#" className="single_l"><img src="https://dina.concytec.gob.pe/appDirectorioCTI/UploadFotoPath.do?tipo=visualizar_archivo&id_investigador=37822&ruta=/documents/docInvestigadores/37822/imagenes/img044.jpg&content_type=image/jpeg" /></a></li>
                                <li><a href="#" className="single_l"><img src="http://cdn.repretel.com/files/2018/09/04/B49.jpg" /></a></li>
                                <li><a href="#" className="single_l"><img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg" /></a></li>
                                <li><a href="#" className="mor_like">+8 más</a></li>
                                </ul>
                                </Col>
                                <Col xs={3}>
                                <Dropdown isOpen={this.state.opcionesAbiertas} toggle={this.permutarOpciones}>
                                    <DropdownToggle>
                                        ...
        </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem>Some Action</DropdownItem>
                                        <DropdownItem disabled>Action (disabled)</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Foo Action</DropdownItem>
                                        <DropdownItem>Bar Action</DropdownItem>
                                        <DropdownItem>Quo Action</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <a href="#" className="post_heding">¿Por qué es importante reforzar lo que no se aprende bien?</a>
                    <p>In the last 10 years Americans have seen a boom in local food markets and for good reason. While Americans continue to buy more fast food, they still expect perfect ingredients and they are finding them.</p>
                </div>

                <div className="like_comment_area row">
                    <div className="col s4 btn_floating">
                        <a className="btn-floating waves-effect"><i className="ion-android-share-alt"></i></a>
                        <h6>128 corazones</h6>
                    </div>
                    <div className="col s4 updown_btn">
                        <a href="#"><i className="ion-android-arrow-dropdown-circle"></i></a>
                        <a href="#"><i className="ion-android-arrow-dropup-circle"></i></a>
                        <a href="#" className="count_n">4 compartidos</a>
                    </div>
                    <div className="col s4 updown_btn comment_c">
                        <a href="#"><i className="ion-ios-chatboxes-outline"></i></a>
                        <a href="#" className="count_n">14 mensajes</a>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Publicaciones;

