import React, { Component } from 'react';

class Inicio extends Component {

    constructor(props) {

        super(props);
        this.state = { a: 1 };

    }

    render() {
        return (
            <div className="container-fluid">
                <section className="row bloque-principal debajo-barra">
                    <div className="col-12">

                        <h1>Bienvenido a TEMPLE</h1>
                        <h2>Encontrar al profesor particular ideal nunca había sido tan sencillo</h2>

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
                    <div className="col-12 col-md-6 bloque-lateral p-5">
                        <div className="row">
                            <div className="col-12">
                                <header>
                                <blockquote className="blockquote text-center">
                                    <h2 className="text-primary">¿Qué es Temple?</h2>
                                    <footer className="blockquote-footer">Publicado por <cite title="Source Title">Giovanni Ricardo</cite></footer>
                                </blockquote>
                                </header>
                                <br/>
                                <p className="text-justify">
                                    Temple es la primera plataforma que permite a cualquier estudiante encontrar fácilmente a profesores particulares en cualquier momento y cualquier lugar.
                                    Con mapas, sin papeleos y sin instituciones intermediarias!</p>
                                    <p className="text-justify">

                                    Sabemos que la enseñanza física tiene características que son irremplazables por modalidades virtuales, sobretodo cuando necesitas
                                    a un guía que te oriente en cada pregunta y obtengas un feedback inmediato. 
                                    Con nuestra ayuda, puedes contactar a instructores expertos cercanos a tu localidad para que logres dominar tus cursos.
                                    </p>
                                    <p className="text-justify">

                                    Inscríbete, es gratis!
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
                    <div className="col-12 order-md-last col-md-6 bloque-lateral p-5">
                    <div className="row">
                            <div className="col-12">
                                <header>
                                <blockquote className="blockquote text-center">
                                    <h2 className="text-primary">¿Dominas un tema? Haz rentable tu conocimiento</h2>
                                    <footer className="blockquote-footer">Publicado por <cite title="Source Title">Giovanni Ricardo</cite></footer>
                                </blockquote>
                                </header>
                                <br/>
                                <p className="text-justify">
                                    Temple te permite inscribirte como profesor particular y ser contactado en cualquier momento por alumnos de tu localidad.
                                    Además, con Temple puedes subir ordenadamentelos los cursos que enseñas, los temas, tus modalidades de enseñanza, tu disponibilidad de horarios y tus precios</p>
                                    <p className="text-justify">

                                    ¿Problemas con tus horarios? Despreocupate!
                                    Deja que TEMPLE gestione todo por ti. Visualiza en un mismo lugar tus horarios, tus clases dictadas y tus ingresos
                                    </p>
                                    <p className="text-justify">
                                    Temple cuenta con un sistema de calificación y comentarios para que los alumnos puedan recomendarte con más alumnos
                                    ¿Qué esperas? Únete a esta modalidad de conocimiento
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
                    <div className="col-12 order-md-first col-md-6 bloque-lateral">
                        <img src="recursos/imagenes/cuenta.jpeg" width="100%" height="100%" alt="iniciar-sesion" />

                    </div>
                </article>

                <article className="row">
                    <div className="col-12 col-md-6 bloque-lateral p-5">
                    <div className="row">
                            <div className="col-12">
                                <header>
                                <blockquote className="blockquote text-center">
                                    <h2 className="text-primary">¿Problemas con un curso? Busca y compara a tus profesores en un mismo mapa</h2>
                                    <footer className="blockquote-footer">Publicado por <cite title="Source Title">Giovanni Ricardo</cite></footer>
                                </blockquote>
                                </header>
                                <br/>
                                <p className="text-justify">
                                    Con TEMPLE, introduce el término de búsqueda y deja que la plataforma te muestre, en un mapa, los profesores que dictan dicho curso</p>
                                    <p className="text-justify">
                                    Seguridad, comentarios, búsqueda por postes
                                    ¿Problemas con tus horarios? Despreocupate!
                                    TEMPLE cuenta con un sistema de calificación, reseñas 
                                    Aprende desde baile moderno hasta matemáticas puras; desde preparación a exámenes hasta asesorías de tesis 
                                    </p>
                                    <p className="text-justify">
                                    ¿Sigues buscando afiches en los postes y tablones de anuncios?
                                    Encuentra a los mejores profesores en un solo lugar
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
                        <img src="recursos/imagenes/crear.jpg" width="100%" height="100%"  alt="crear-cuenta" />
                    </div>
                </article>

            </div >
        );
    }

}

export default Inicio;