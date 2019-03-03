import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Principal from './componentes/ComponentePrincipal';
import './App.css';
import {Provider} from 'react-redux';
import {ReduxStore} from './redux/reduxStore';

const store=ReduxStore();

class App extends Component {

  constructor(props){

    super(props);

  }

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

export default App;
