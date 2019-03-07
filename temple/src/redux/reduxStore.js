import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Lideres} from './reductorLideres';
import {EstadoSesion} from './reductorSesion';

export const ReduxStore = () => {

    return createStore(
            combineReducers({
                lideres:Lideres,
                estadoSesion: EstadoSesion
            }),
            applyMiddleware(thunk,logger)
        );

}