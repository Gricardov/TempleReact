import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Lideres} from './reductorLideres';

export const ReduxStore = () => {

    return createStore(
            combineReducers({
                lideres:Lideres
            }),
            applyMiddleware(thunk,logger)
        );

}