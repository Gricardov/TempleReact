import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Principal from './componentes/Principal/ComponentePrincipal';
import './App.css';
import {Provider} from 'react-redux';
import {ReduxStore} from './redux/reduxStore';

const store=ReduxStore();

class App extends Component {

 
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Principal />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}
// Probando el push
export default App;
