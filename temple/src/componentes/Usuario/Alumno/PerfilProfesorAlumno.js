import React, { Component } from 'react';
import Pestanas from '../../Utilidades/PestanasComponente';

class PerfilProfesorAlumno extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="perfil-debajo-barra">
                <div className="contenedor-portada-perfil">
                        <img src="http://4.bp.blogspot.com/-pUDTYSbW7qc/UubgtKShOSI/AAAAAAAAALI/qggus3wtkxI/s1600/mu%25C3%25B1eco+de+caja+mirando+corazones.jpg" />
                    <figure className="foto-perfil" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/templereact.appspot.com/o/mila.jpg?alt=media&token=f8d41e8a-7cdc-4503-9abd-eb675671a84c")' }}>

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
                <div className="container contenedor-resumen">
                    <div className="titulo">
                        <h6>Sobre mí</h6>
                    </div>
                    <div className="contenido">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro officiis fugit hic vel voluptates perferendis aut quibusdam sit omnis unde aspernatur quae repellat blanditiis autem, a libero asperiores neque illum aliquid est tempore. Eveniet velit voluptate amet facere, repellendus aperiam, cumque est ipsam. Asperiores expedita iusto, inventore sit suscipit nihil repudiandae? Laboriosam cum maxime dolorem neque, in veniam expedita ad. Hic fugit necessitatibus blanditiis, optio dignissimos molestiae nam, numquam odio.</p>
                    </div>
                </div>
                <div className="container">
                    <Pestanas/>
                </div>                
            </div>
        )
    }

}

export default PerfilProfesorAlumno;