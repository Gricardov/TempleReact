import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';

import {Lideres} from './reductorLideres';
import {EstadoSesion} from './reductorSesion';
import {InicioContacto} from './formularios';
import {Usuario} from './reductorUsuario';
export const ReduxStore = () => {

    return createStore(
            combineReducers({
                lideres:Lideres,
                usuario: Usuario,
                estadoSesion: EstadoSesion,
                ...createForms({
                    formContacto: InicioContacto
                })
                
            }),
            applyMiddleware(thunk,logger)
        );

}