import React, { Component } from 'react';
import { Consumer } from '../../context';

class AddItem extends Component {
  state = {
    addItem: ''
  };

  onAddItem = (addToListId, dispatch, e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        addItem: this.state.addItem,
        addToListId
      }
    });
    this.setState({ addItem: '' });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { addToListId } = this.props;
          return (
            <div className="panel-block">
              <form
                className="control has-icons-left"
                onSubmit={e => this.onAddItem(addToListId, dispatch, e)}
              >
                <input
                  type="text"
                  className="input is-small"
                  placeholder="Add Item..."
                  onChange={e => this.setState({ addItem: e.target.value })}
                  value={this.state.addItem}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-plus" aria-hidden="true" />
                </span>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddItem;
