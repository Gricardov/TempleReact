import React, { Component } from 'react';

class Inicio extends Component {

    constructor(props) {

        super(props);
        this.state = { a: 1 };

    }

    render() {
        return (
            <div className="container-fluid">
                <section className="row bloque-principal debajo-barra justify-content-center">
                    <div className="col-10 col-md-12">

                        <h1>Bienvenido a TEMPLE</h1>
                        <h2>Encontrar a un experto en la materia nunca había sido tan sencillo</h2>

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
                    <div className="col-12 col-md-6 bloque-lateral bloque-lateral-texto">
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
                                    TEMPLE es la primera plataforma que permite a cualquier estudiante ubicar rápidamente a expertos en cualquier materia. Ya sea por una 
                                    simple duda, para practicar un curso o para presentarte a un examen, el contacto se hace fácil, ordenado e intuitivo como nunca antes.
                                    Con la sencillez de un mapa, encuentra a los mejores profesores de tu localidad y solicita sus clases.
                                    </p>
                                    <p className="text-justify">
                                    La enseñanza presencial tiene características que aún son irremplazables por modalidades virtuales. ¿Cuántas veces has sentido que te distraes 
                                    fácilmente al querer estudiar un tema pesado? ¿O quizás te frustras porque no entiendes la teoría? Un guía presencial puede detectar esos detalles, 
                                    enseñarte lo que necesitas saber y brindarte una respuesta inmediata ante cualquier duda.                              
                                    </p>
                                    <p className="text-justify">
                                    Olvídate de hacer papeleos, acudir a instituciones intermediarias o buscar en varios sitios a alguien que te pueda enseñar.
                                    Inscríbete en TEMPLE y vive la mejor experiencia educativa!
                                    </p>
                                    <p className="text-justify"><b>Quisiera inscribirme como <a href="/">alumno</a> o como <a href="/">profesor</a></b></p>
                                    
                                    

                                    

                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6 bloque-lateral">
                        <img src="recursos/imagenes/que-es-inicio.png" width="100%" height="100%"  alt="que-es" />
                    </div>
                </article>

                <article className="row">
                    <div className="col-12 order-md-last col-md-6 bloque-lateral bloque-lateral-texto">
                    <div className="row">
                            <div className="col-12">
                                <header>
                                <blockquote className="blockquote text-center">
                                    <h2 className="text-primary">¿Quieres entender bien tus cursos?</h2>
                                    <footer className="blockquote-footer">Publicado por <cite title="Source Title">Giovanni Ricardo</cite></footer>
                                </blockquote>
                                </header>
                                <br/>
                                <p className="text-justify">
                                    <b>¿Estás estudiando una carrera o te estás preparando para un examen de admisión?</b> Normalmente, encontrar a un experto que 
                                    te refuerce esos temas de tu clase requería que te aventures a buscar en varios lugares. ¿Y a dónde recurrías? 
                                    A compañeros, que no siempre podían (o sabían) ayudarte; profesores que no tenían toda la disponibilidad que quisieras; o 
                                    dudosos anuncios de facebook, de la calle y páginas web.
                                    </p>
                                    <p className="text-justify">
                                    
                                    Con TEMPLE, solo escribe lo que necesitas aprender y la plataforma te mostrará los profesores que dictan dicho curso en un mapa.
                                    Con nuestra filosofía de tres pasos, solicita a tu profesor en un abrir y cerrar de ojos:
                                    </p>

                                    <p className="text-justify">
                                    <span className="badge badge-pill badge-primary">1</span>&nbsp;<b>Elige el curso</b>&nbsp;&nbsp;&nbsp;<span className="badge badge-pill badge-primary">2</span>
                                    &nbsp;<b>Elige la modalidad</b>&nbsp;&nbsp;&nbsp;<span className="badge badge-pill badge-primary">3</span>&nbsp;<b>Elige el horario</b>
                                    </p>

                                    <p className="text-justify">
                                    <b>¿Cómo me aseguro que un profesor es ideal para mí?</b> TEMPLE cuenta con un sistema de calificación y reseñas que podrás ver en el
                                    perfil del profesor antes de contratarlo. Además, tendrás acceso a sus horas de experiencia y su hoja de vida para que sientas más seguridad 
                                    al contratarlo. Esta medida prioriza la calidad y brinda confianza al alumno, el cual antes no contaba con esta información previa. Aprender 
                                    desde baile moderno, idiomas, música y hasta matemáticas puras de la mano de un experto ahora es una realidad.
                                    </p>

                                    <p className="text-justify">
                                    Por cierto, olvídate de los anuncios tipo "SE DICTAN CLASES DE INGLÉS LLAMAR: 999999999", "Se dictan curso de c#,python,bd,sql,.net,java,typescript,
                                    es6,javascript..." o el típico anuncio pegado en la pared. Con TEMPLE, cada profesor se muestra ordenado y con los datos más relevantes para ti. 
                                    Nunca seremos un tablón de anuncios.
                                    </p>
                                    <p className="text-justify"><b>Me encanta la idea, quiero ser <a href="/">alumno</a></b></p>

                                    
                                    
                                
                            </div>
                            
                            </div>   

                     
                    </div>
                    <div className="col-12 order-md-first col-md-6 bloque-lateral">
                    <img src="recursos/imagenes/buscar-inicio.jpg" width="100%" height="100%"  alt="crear-cuenta" />


                    </div>
                </article>

                <article className="row">
                    <div className="col-12 col-md-6 bloque-lateral bloque-lateral-texto">
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

                                
                            </div>
                            
                        </div>   
                    </div>
                    <div className="col-12 col-md-6 bloque-lateral">
                    <img src="recursos/imagenes/profesor-inicio.jpg" width="100%" height="100%" alt="iniciar-sesion" />

                    </div>
                </article>

            </div >
        );
    }

}

export default Inicio;