import React, { Component } from 'react';
import {FadeTransform,Transform} from 'react-animation-components';

class Inicio extends Component {

    render() {
        
        
        return (
            <div className="container-fluid bloque-contenedor">
            <FadeTransform in
            transformProps={{
                exitTransform: 'translateY(-10%)'
            }}>
                <section className="row bloque-principal debajo-barra justify-content-center">
                    <div className="col-10 col-md-12">

                        <h1>Bienvenido a TEMPLE</h1>
                        <h2>Encontrar a un experto en la materia nunca fue tan sencillo</h2>

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
                </FadeTransform>

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
                                    Temple es la primera plataforma que permite a cualquier estudiante ubicar a expertos en cualquier materia en el momento que sea. Ya sea por una 
                                    simple duda o para prepararte para un examen, encontrar a un experto es ahora fácil, ordenado e intuitivo como nunca antes.
                                    Con la sencillez de un mapa, ahora puedes elegir a los mejores profesores de tu localidad y solicitar sus clases.
                                    </p>
                                    <p className="text-justify">
                                    ¿Sabías que la enseñanza presencial tiene aún muchas ventajas que las clases virtuales no igualan? Por ejemplo, ¿Cuántas veces 
                                    quieres estudiar un tema pesado y no te concentras? ¿O te frustras porque intentas pero no lo entiendes del todo? Debes saber algo, 
                                    un guía presencial puede detectar esos detalles, fortalecer lo que necesitas saber y darte una respuesta inmediata ante cualquier duda.                            
                                    </p>
                                    <p className="text-justify">
                                    Temple también pretende resolver las limitaciones de los anuncios <b>'SE DICTAN CLASES DE X CURSO LLAMAR'</b> que encuentras en cualquier poste 
                                    solitario o en una web de anuncios. Con nuestro servicio, tienes disponible la información más relevante de cada profesor antes de solicitarlo.                                                                    
                                    </p>
                                    <p className="text-justify"><b>¿Te gusta? Ya puedes inscribirte como <a href="/">alumno</a> o como <a href="/">profesor</a></b></p>
                                    
                                    
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6 bloque-lateral">
                    <Transform enterTransform="translateX(0%)" exitTransform="translateX(30%)" in>

                        <img src="recursos/imagenes/que-es-inicio.png" width="100%" height="100%"  alt="que-es" />
                        </Transform>
                    </div>

                </article>

                <hr className="d-block d-md-none"/>

                <article className="row">
                    <div className="col-12 order-md-last col-md-6 bloque-lateral bloque-lateral-texto">
                    <div className="row">
                            <div className="col-12">
                                <header>
                                <blockquote className="blockquote text-center">
                                    <h2 className="text-primary">¿Problemas con algunos temas?</h2>
                                    <footer className="blockquote-footer">Publicado por <cite title="Source Title">Giovanni Ricardo</cite></footer>
                                </blockquote>
                                </header>
                                <br/>
                                <p className="text-justify">
                                    <b>¿Estás estudiando una carrera o te estás preparando para un examen de admisión?</b> Normalmente, encontrar a alguien que
                                    te explique los temas que no entiendes requiere que te aventures a buscar a varias personas:  
                                    A compañeros, que no siempre pueden (o saben) ayudarte; a profesores que no tienen toda la disponibilidad que quisieras; o 
                                    hasta quizás en dudosos anuncios.
                                    </p>
                                    <p className="text-justify">                                    
                                    Con Temple, en cambio, solo escribes lo que quieres aprender y la plataforma te mostrará los profesores de ese curso en un mapa.
                                    Luego, aplica nuestra filosofía de los tres pasos y solicita a tu profesor en un abrir y cerrar de ojos:
                                    </p>

                                    <p className="text-center">
                                    <span className="badge badge-pill badge-primary">1</span>&nbsp;<b>Elige el curso</b>&nbsp;&nbsp;&nbsp;<span className="badge badge-pill badge-primary">2</span>
                                    &nbsp;<b>Elige la modalidad</b>&nbsp;&nbsp;&nbsp;<span className="badge badge-pill badge-primary">3</span>&nbsp;<b>Elige el horario</b>
                                    </p>

                                    <p className="text-justify">
                                    <b>Y Listo! ¿Pero cómo elijo al mejor profesor?</b> Todos los profesores cuentan con un perfil donde puedes ver la calificación por estrellas
                                     que le han dado sus alumnos, sus horas de experiencia enseñando, y sobretodo, sus reseñas. 
                                    Además, puedes ver su hoja de vida, sus especialidades y su presentación personal. De esta manera, tienes toda la información a la mano 
                                    para hacer una buena elección.                                    
                                    </p>
                                    <p>
                                    Encontrar a un experto en idiomas, programación, música o matemáticas nunca había resultado tan fácil.
                                    </p>
                                    
                                    <p className="text-justify"><b>Me encanta la idea, quiero ser <a href="/">alumn@</a></b></p>
                              
                            </div>
                            
                            </div>
                     
                    </div>
                    <div className="col-12 order-md-first col-md-6 bloque-lateral">
                    <Transform enterTransform="translateX(0%)" exitTransform="translateX(-30%)" in>

                    <img src="recursos/imagenes/buscar-inicio.jpg" width="100%" height="100%"  alt="crear-cuenta" />

                    </Transform>
                    </div>

                </article>

                <hr className="d-block d-md-none"/>

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
                                    <b>¿Disfrutas enseñar en tu tiempo libre o te dedicas a ello?</b> Quizás alguna vez has promocionado tus habilidades de enseñanza 
                                    en webs de anuncios, postes de la calle o grupos de facebook. Tu éxito ha sido variable dependiendo de las circunstancias. Hay algo que debes 
                                    saber:
                                    </p>
                                    <p className="text-justify">
                                    Muchos profesores también anuncian así, pero esos medios no están conectados de ninguna forma entre ellos. Tus potenciales alumnos 
                                    tienen que indagar en varios lugares, confiando a ciegas, sin ningún tipo de información previa y con resultados variables. 
                                    ¿Quieren practicar o resolver unas dudas? Buscar a un experto en la matería es la última opción porque es engorroso encontrarlos.
                                    </p>
                                    <p className="text-justify">
                                    Tus alumnos necesitan encontrar expertos, siempre en un mismo lugar y fáciles de encontrar como en un mapa. ¿Qué tal si ahora ellos te buscan 
                                    a ti cuando necesiten? Temple te ofrece esta posibilidad.
                                    </p>
                                    <p className="text-justify">
                                    <b>¿Aún gestionas todo a mano? </b>
                                    Deja que Temple haga todo eso por ti. En tu perfil, puedes presentarte con videos e imágenes, subir tu hoja de vida, los cursos que 
                                    enseñas, además de tus modalidades de enseñanza, precios y horarios. En un mismo lugar, mira tus estadísticas de clases, alumnos, 
                                    pagos y más. Te damos lo mejor para que tú
                                    </p>
                                    <p className="text-justify">
                                    Temple cuenta con un sistema de calificación y comentarios para que los alumnos puedan recomendarte con más alumnos
                                    ¿Qué esperas? Únete a esta modalidad de conocimiento
                                    </p>

                                    <p className="text-justify"><b>Me encanta la idea, quiero inscribirme como <a href="/">profesor</a></b></p>

                            </div>
                            
                        </div>   
                    </div>
                    <div className="col-12 col-md-6 bloque-lateral">
                    <Transform enterTransform="translateX(0%)" exitTransform="translateX(30%)" in>

                    <img src="recursos/imagenes/profesor-inicio.jpg" width="100%" height="100%" alt="iniciar-sesion" />
            </Transform>
                    </div>

                </article>

            </div >
        );
    }

}

export default Inicio;