import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSavedState } from './actions';

import Header from './components/Header';
import AllLists from './components/AllLists';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('storedState'));
    if (savedState) {
      dispatch(loadSavedState(savedState));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('storedState', JSON.stringify(lists));
  });

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
