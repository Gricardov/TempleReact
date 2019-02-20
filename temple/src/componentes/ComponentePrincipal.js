import React, { Component } from 'react';
import Barra from './BarraBienvenida';
import Inicio from './InicioBienvenida';
import { Switch, Route, Redirect } from 'react-router-dom';

class Bienvenida extends Component {



    render() {
        
        return (
            <div>

                <Barra />
                <Switch>
                    <Route path="/bienvenida" component={Inicio} />
                    
                    <Redirect to="/bienvenida" />
                    }

                </Switch>

            </div>


        )

    }

}
export default Bienvenida;