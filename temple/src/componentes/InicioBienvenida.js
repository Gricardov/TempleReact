import React, { Component } from 'react';

class Inicio extends Component {

    constructor(props) {

        super(props);
        this.state = { a: 1 };

    }

    render() {
        return (
            <div className="container-fluid">
                <section className="row bloque-principal">
                    <div className="col-12">

                        <h1>Bienvenido a TEMPLE</h1>
                        <h2>Porque aprender nunca había sido tan fácil</h2>

                    </div>

                    <div className="col-12">

                        <div className="row justify-content-center">
                            <div>
                                <button className="boton-bloque-principal">Soy un profesor</button>
                            </div>
                            <div>
                                <button className="boton-bloque-principal">Soy un alumno</button>
                            </div>
                        </div>

                    </div>

                </section>

                <article className="row">
                    <div className="col-12 col-md-6 bloque-lateral">
                        <div className="content">
                            <div className="inner">
                                <header>
                                    <h2><a href="#">¿Qué es Temple?</a></h2>
                                    <p className="info">Publicado por <a href="#">Giovanni Ricardo</a></p>
                                </header>
                                <p>
                                    Temple es la primera plataforma que permite a estudiantes libres contactar con instructores libres sin necesidad de intermediarios.
                                    Basamos nuestro modelo en la enseñanza física porque esta tiene características que son irremplazables por modalidades virtuales.
                                    Con nuestra ayuda, puedes contactar a instructores expertos cercanos a tu localidad para que logres dominar tus cursos.
                                    Registrate hoy!
                                </p>
                                <ul className="actions">
                                    <li><a href="#" className="button alt">Más información</a></li>
                                </ul>
                            </div>
                            <div className="postnav">
                                <a href="#" className="prev disabled"><span className="icon fa-chevron-up"></span></a>
                                <a href="#two" className="scrolly next"><span className="icon fa-chevron-down"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 bloque-lateral">
                        <img src="recursos/imagenes/quees.jpg" width="100%" height="100%"  alt="que-es" />
                    </div>
                </article>

                <article className="row">
                    <div className="col-12 order-md-last col-md-6 bloque-lateral">
                        Siento la humedad en mí
    
                    </div>
                    <div className="col-12 order-md-first col-md-6 bloque-lateral">
                        <img src="recursos/imagenes/cuenta.jpeg" width="100%" height="100%" alt="iniciar-sesion" />

                    </div>
                </article>

                <article className="row">
                    <div className="col-12 col-md-6 bloque-lateral">
                        De verte llorar, ni hablar
                    </div>
                    <div className="col-12 col-md-6 bloque-lateral">
                        <img src="recursos/imagenes/crear.jpg" width="100%" height="100%"  alt="crear-cuenta" />
                    </div>
                </article>

            </div >
        );
    }

}

export default Inicio;