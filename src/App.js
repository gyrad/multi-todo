import React, { Component } from 'react';

import Header from './components/Header';
import AllLists from './components/AllLists';
import { Provider } from './context';

import 'bulma/css/bulma.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <AllLists />
          <div className="shameless-plug">
            Made with <i className="fas fa-heart" /> by&nbsp;
            <a
              href="http://tenzinggaychey.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gaychey
            </a>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
