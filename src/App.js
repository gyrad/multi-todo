import React from 'react';

import Header from './components/Header';
import AllLists from './components/AllLists';
// import { Provider } from './context';

import 'bulma/css/bulma.css';
import './App.scss';

const App = () => {
  return (
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
  );
};

export default App;
