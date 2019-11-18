import React from 'react';
import './Publicacion.css';

const Publicacion = (props) => {
    return (
        <div className="tarjeta-publicacion">
            <img alt="img-usuario" src={props.datos.img} />
            <div className="encabezado">
                <h2>{props.datos.titulo}</h2>
                <p>Publicado {props.datos.fecPub} por {props.datos.autor}</p>
            </div>
            <div className="contenido">
                {
                    props.datos.imgdes
                        ?
                        <img alt="img-descripcion" src={props.datos.imgdes} />
                        :
                        null
                }
                <div>
                    <p>
                        {props.datos.descripcion}
                    </p>
                </div>
            </div>
            <div className="estado">
                <div>{props.datos.numCor} <i className="fa fa-heart"></i></div>
                <div>{props.datos.numCom} <i className="fa fa-comment"></i></div>
                <div>{props.datos.porcAmor} <i className="fa fa-eye"></i></div>

            </div>
        </div>
    )

}

export default Publicacion;