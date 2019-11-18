import React from 'react';
import './Publicador.css';
import { connect } from 'react-redux';
import { cambiarSeleccionPublicador } from '../../redux/CreadorAcciones';

const mapStateToProps = (state) => {

    return {
        enfasis: state.enfasis
    }

}

const mapDispatchToProps = (dispatch) => ({
    cambiarSeleccionPublicador: (estado) => dispatch(cambiarSeleccionPublicador(estado))
})

const Publicador = (props) => {
    return (
        <>
            <div className={props.enfasis.estado ? 'publicador seleccionado' : 'publicador'} onClick={() => props.cambiarSeleccionPublicador(true)}>
                <div className="encabezado">
                    <img alt="img-perfil" src={props.img} />
                    <input type="text" placeholder="Título de la publicación" />
                </div>
                <div className="contenido">
                    <hr />
                    <textarea className={props.enfasis.estado?'area-texto-seleccionada':null} placeholder="Comparte un texto, una foto o un archivo..." />
                    <div className="controles-publicador">

                        {
                            props.enfasis.estado
                                ?
                                <>
                                    <div className="control"><i className="fa fa-paperclip"></i></div>
                                    <div className="control"><i className="fa fa-file-image-o"></i></div>
                                    <div className="boton">Publicar</div>
                                </>
                                :
                                <>
                                    <div className="pseudo-control"></div>
                                    <div className="pseudo-control"></div>
                                    <div className="pseudo-boton"></div>
                                </>
                        }
                    </div>

                </div>

            </div>
            {
                props.enfasis.estado
                    ?
                    <div className="cubierta" onClick={() => { props.cambiarSeleccionPublicador(false) }}>
                        Holi
                </div>
                    :
                    null
            }
        </>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(Publicador)
