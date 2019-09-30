import React from 'react';
import './IconoNotificacion.css';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const IconoNotificacion = (props)=>{
    return(
        <div onClick={()=>props.ruta?props.history.push(props.ruta):null}>
            <i className={props.icono+' '+props.tamano}/>
            { props.numero && props.numero>0
            ?
            <div className="num-notificacion">{props.numero}</div>
            :
            null
            }
        </div>
    )

}

export default withRouter(IconoNotificacion);