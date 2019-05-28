import React from 'react';
import { Consumer } from '../context';

function Header() {
  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <div className="section">
            <div className="container">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <h1 className="title">Multi Todo</h1>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <button
                      className="button is-success"
                      onClick={() => dispatch({ type: 'ADD_LIST' })}
                    >
                      <span className="icon">
                        <i className="fas fa-plus" />
                      </span>
                      <span>Add New List</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Header;
