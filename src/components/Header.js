import React from 'react';

function Header() {
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
              <button className="button is-success">
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
}

export default Header;
