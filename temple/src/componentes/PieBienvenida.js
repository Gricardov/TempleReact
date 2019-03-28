import React from 'react';
import {Link} from 'react-router-dom';
import * as RUTAS from '../compartido/rutas';

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
                                    y alumnos por medio de la tecnología.
                                </p>
                                <p className="small">Pronto disponible en: </p>
                            </div>

                            <div className="col-12">
                                <div className="row text-center">

                                    <div className="col-12 d-sm-none">
                                        <p>Pronto disponible en:</p> 
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
                            <li><Link className="enlace-pie" to={RUTAS.SOBRE_NOSOTROS_BIENVENIDA.ruta}>Sobre nosotros</Link></li>
                            <li><Link className="enlace-pie" to={RUTAS.MISION_VISION_BIENVENIDA.ruta}>Misión y visión</Link></li>
                            <li><Link className="enlace-pie" to={RUTAS.REGISTRO_PROFESOR_BIENVENIDA.ruta}>Para profesores</Link></li>
                            <li><Link className="enlace-pie" to={RUTAS.REGISTRO_ALUMNO_BIENVENIDA.ruta}>Para estudiantes</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-2">
                        <h4>Ayuda</h4>

                        <ul className="list-unstyled">
                            <li><Link className="enlace-pie" to={RUTAS.TERMINOS_USO_BIENVENIDA.ruta}>Términos de uso</Link></li>
                            <li><Link className="enlace-pie" to={RUTAS.PREGUNTAS_FRECUENTES_BIENVENIDA.ruta}>Preguntas frecuentess</Link></li>
                            <li><Link className="enlace-pie" to={RUTAS.CONTACTO_BIENVENIDA.ruta}>Contacto</Link></li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Pie;