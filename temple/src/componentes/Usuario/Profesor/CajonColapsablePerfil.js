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

                    {!this.props.revisandoEjercicio ?
                        <>
                            <div className="contenedor-datos-resumidos-perfil">
                                <i className="fa fa-lightbulb-o fa-2x" style={{ color: "gray" }}></i> Diseñador UI/UX<br />
                                <i className="fa fa-suitcase fa-2x" style={{ color: "gray" }}></i> Academias Trilce
                    </div>
                            <hr />
                            <div className="contenedor-atributos-perfil">
                                <i className="fa fa-check-circle fa-2x" style={{ color: "green" }}></i> Perfil verificado<br />
                                <i className="fa fa-check-circle fa-2x" style={{ color: "green" }}></i> 10 horas de experiencia<br />
                                <i className="fa fa-check-circle fa-2x" style={{ color: "green" }}></i> Rango experto<br />
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