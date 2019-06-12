import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';

import {Lideres} from './reductorLideres';
import {Sesion} from './reductorSesion';
import {InicioContacto} from './formularios';
import {Usuario} from './reductorUsuario';
import {Niveles} from './reductorNiveles';
import {Modalidades} from './reductorModalidades';
import {Registro} from './reductorRegistro';

export const ReduxStore = () => {

    return createStore(
            combineReducers({
                lideres:Lideres,
                usuario: Usuario,
                sesion: Sesion,
                niveles: Niveles,
                modalidades: Modalidades,
                registro: Registro,
                ...createForms({
                    formContacto: InicioContacto
                })
                
            }),
            applyMiddleware(thunk,logger)
        );

}