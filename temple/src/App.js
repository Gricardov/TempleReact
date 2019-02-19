import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Bienvenida from './componentes/ComponentePrincipal';
import './App.css';

class App extends Component {

  constructor(props){

    super(props);

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Bienvenida />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
