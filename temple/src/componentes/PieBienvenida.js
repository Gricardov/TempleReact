import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Pie = (props) => {

    return (

        <div className="footer">
            <div className="container pie-bienvenida">
                <div className="row">
                    <div className="col-12 col-md-7 mb-4">
                        <div className="row">

                            <div className="col-12 d-none d-sm-block mb-3">

                                <img src="recursos/imagenes/logo.png" height="20" width="70" alt="logo temple" />


                            </div>
                            <div className="col-12 d-none d-sm-block mb-2">
                                <p>Temple es una plataforma que facilita el contacto entre profesores independientes
                                    y alumnos por medio de tecnologías modernas.
                                </p>
                                <p className="small">Casi todos los derechos reservados - 2019</p>
                            </div>

                            <div className="col-12">
                                <div className="row text-center">

                                    <div className="col-12 d-sm-none">
                                        <p>Descarga la aplicación:</p> 
                                    </div>                                    

                                    <div className="col-sm-5">
                                        <img alt="descargar-google-play" src="recursos/imagenes/descarga_google_play.png" className="logo-descargar" height="100%" width="60%" />
                                    </div>
                                    <div className="col-sm-5">
                                        <img alt="descargar-play-store" src="recursos/imagenes/descarga_play_store.svg" className="logo-descargar" height="100%" width="60%" />
                                    </div>
                                    <div className="col-sm-2"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-2 offset-md-1">
                        <h4>TEMPLE</h4>
                        <ul className="list-unstyled">
                            <li><Link className="enlace-pie" to="/sobreNosotros">Sobre nosotros</Link></li>
                            <li><Link className="enlace-pie" to="/bienvenida">Misión y visión</Link></li>
                            <li><Link className="enlace-pie" to="/bienvenida">Para profesores</Link></li>
                            <li><Link className="enlace-pie" to="/bienvenida">Para estudiantes</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-2">
                        <h4>Ayuda</h4>

                        <ul className="list-unstyled">
                            <li><Link className="enlace-pie" to="/bienvenida">Legal</Link></li>
                            <li><Link className="enlace-pie" to="/bienvenida">Preguntas frecuentess</Link></li>
                            <li><Link className="enlace-pie" to="/contacto">Contacto</Link></li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )

}
/*<span className="fa fa-facebook mx-auto"></span>
<span className="fa fa-twitter mx-auto"></span>
<span className="fa fa-instagram mx-auto"></span>
<span className="fa fa-linkedin mx-auto"></span>
<span className="fa fa-google mx-auto"></span>*/
export default Pie;