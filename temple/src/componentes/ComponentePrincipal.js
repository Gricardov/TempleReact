import React, { Component } from 'react';
import Barra from './BarraBienvenida';
import { Switch, Route, Redirect } from 'react-router-dom';

class Bienvenida extends Component {



    render() {

        function Bienvenida(){

            return(

                <div>Bienvenida principal</div>

            )

        }

        return (
            <div>

                <Barra />
                <Switch>
                    <Route path="/bienvenida" component={Bienvenida} />
                    
                    <Redirect to="/bienvenida" />
                    }

                </Switch>

            </div>


        )

    }

}
export default Bienvenida;