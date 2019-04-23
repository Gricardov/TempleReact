import React, { Component } from 'react';

class PerfilProfesorAlumno extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="contenedor-portada-perfil">
                <figure className="portada-perfil">
                    <img src="https://unsplash.it/975/300" alt="Portada-perfil" />
                </figure>
                <figure className="foto-perfil" style={{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c")'}}>
                
                </figure>
                <div className="estadisticas-perfil">
                    <ul>
                        <li>13    <span>Projects</span></li>
                        <li>1,354 <span>Commits</span></li>
                        <li>32    <span>Following</span></li>
                        <li>324   <span>Followers</span></li>
                    </ul>
                    <a href="#" className="follow">
                        Mensaje
    </a>
                </div>
                <h1 className="nombres-perfil">Mila Luna <small>@Cora</small></h1>
            </div>
        )
    }

}

export default PerfilProfesorAlumno;