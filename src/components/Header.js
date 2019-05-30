import React from 'react';
import { Consumer } from '../context';

import Modal from './Modal';

class Header extends React.Component {
  state = {
    modalVisibility: false
  };

  render() {
    const renderDeleteAllModal = (
      <Modal
        visibility={this.state.modalVisibility}
        closeModal={() => this.setState({ modalVisibility: false })}
        title="Delete All Lists"
        content="Are you sure you want to delete all lists? This action is irreversible."
        buttonLabel="Delete All Lists"
        buttonClass="is-danger"
        buttonAction={{ type: 'DELETE_ALL_LISTS' }}
      />
    );

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
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
                        &nbsp;&nbsp;
                        <button
                          className="button is-danger"
                          onClick={() =>
                            this.setState({ modalVisibility: true })
                          }
                          disabled={value.allLists.length === 0 ? true : false}
                        >
                          <span className="icon">
                            <i className="fas fa-trash" />
                          </span>
                          <span>Delete All Lists</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {renderDeleteAllModal}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Header;
