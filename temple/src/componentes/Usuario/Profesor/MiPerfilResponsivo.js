import React, { Component } from 'react';
import ModalEntradaMensaje from '../../Utilidades/ModalEntradaMensaje';
import Presentacion from '../../Utilidades/PresentacionComponente';
import Pestanas from './PestanasPerfilProfesor';
import Resenas from '../../Utilidades/ResenasComponente';
import Publicaciones from '../../Utilidades/PublicacionesComponente';
import { Row, Col } from 'reactstrap';
import '../../../Perfil.css';
class MiPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMensajeAbierto: false
        };
    }

    render() {
        const perfil = this.props.perfil;
        return (
            <div className="perfil-debajo-barra contenedor-css-grid">
                <div className="avisos">
                    Tienes una nueva notificación
                </div>
                <div className="cajon-colapsable">
                    <div className="foto-perfil" style={{ backgroundImage: `url(${perfil.imgPer})` }}>
                    </div>
                    <h1 style={{ display: "block" }} className="nombres-perfil">{perfil.nomUsu} {perfil.apaUsu} {perfil.amaUsu}</h1>
                    <p className="nombre-seguimiento">@{perfil.logUsu}</p>

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

                    <p>Ver más</p>

                </div>
                <div className="selector-principal-perfil">
                    <ul className="control-principal-perfil">
                    <li><a href="#">Mis citas</a></li>
                    <li><a href="#">Solución de dudas</a></li>
                    <li><a href="#">Mis mensajes</a></li>
                    <li><a href="#">Mi cuenta</a></li>

                        </ul>                  
                </div>
                <div className="selector-secundario-perfil">
                    xd2
                </div>
            </div>
        )

    }

}

export default MiPerfil;