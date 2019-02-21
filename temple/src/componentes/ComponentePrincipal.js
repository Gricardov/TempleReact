import React, { Component } from 'react';
import Barra from './BarraBienvenida';
import Pie from './PieBienvenida';

import Inicio from './InicioBienvenida';
import Contacto from './ContactoBienvenida';

import { Switch, Route, Redirect } from 'react-router-dom';

class Bienvenida extends Component {



    render() {
        
        return (
            <div>

                <Barra />
                <Switch>
                    <Route path="/bienvenida" component={Inicio} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Redirect to="/bienvenida" />
                    }

                </Switch>
                <Pie />
            </div>


        )

    }

}
export default Bienvenida;