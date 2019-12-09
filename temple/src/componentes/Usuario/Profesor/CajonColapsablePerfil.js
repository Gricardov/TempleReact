import React, { Component } from 'react';
import './CajonColapsablePerfil.css';

class Cajon extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        let perfil = this.props.perfil;

        return (
            <>
                {this.props.revisandoEjercicio ? <p className="txt-preguntado-por">Preguntado por: </p> : null}
                <div className="foto-perfil" style={{ backgroundImage: `url(${perfil.imgPer})` }}>
                </div>
                <h1 style={{ display: "block" }} className="nombres-perfil">{perfil.nomUsu} {perfil.apaUsu} {perfil.amaUsu}</h1>
                <p className="nombre-seguimiento">@{perfil.logUsu}</p>
                {!this.props.revisandoEjercicio
                    ?
                    <p className="profesion-usuario">Diseñador UX/UI</p>
                    :
                    null
                }
                {!this.props.revisandoEjercicio ?
                    <>

                        <div className="contenedor-datos">
                            <div className="icono-circulo verde sombra-lateral">
                                <i className="fa fa-check" style={{ color: "white" }}></i>
                            </div>
                            <p>Datos verificados</p>
                            <div className="icono-circulo marron sombra-lateral">
                                <i className="fa fa-briefcase" style={{ color: "white" }}></i>
                            </div>
                            <p>Academia IngNova</p>
                            <div className="icono-circulo rojizo sombra-lateral">
                                <i className="fa fa-university" style={{ color: "white" }}></i>
                            </div>
                            <p>45 horas dictadas</p>
                            <div className="icono-circulo azulado sombra-lateral">
                                <i className="fa fa-question" style={{ color: "white" }}></i>
                            </div>
                            <p>0 preguntas resueltas</p>
                            <div className="icono-circulo gris sombra-lateral">
                                <i className="fa fa-mortar-board" style={{ color: "white" }}></i>
                            </div>
                            <p>Rango Experto</p>
                        </div>

                    </>
                    :
                    null
                }
            </>

        )
    }

}

export default Cajon;