import React, { Component } from 'react';

import Header from './components/Header';
import AllLists from './components/AllLists';
import { Provider } from './context';

import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <AllLists />
        </div>
      </Provider>
    );
  }
}

export default App;
