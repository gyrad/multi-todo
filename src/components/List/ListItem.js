import React, { Component } from 'react';
import { Consumer } from '../../context';

import './ListItem.scss';

class ListItem extends Component {
  toggleCompleted = (dispatch, listId, itemId) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: { listId, itemId } });
  };

  render() {
    const { listId, item } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <label
              className={`ListItem panel-block ${
                item.completed ? 'is-active' : null
              }`}
              key={item.id}
            >
              <input
                type="checkbox"
                defaultChecked={item.completed}
                onChange={() => this.toggleCompleted(dispatch, listId, item.id)}
              />
              <span
                style={
                  item.completed ? { textDecoration: 'line-through' } : null
                }
              >
                {item.todoItem}
              </span>
              <button
                className="delete-btn"
                title="Delete Item"
                onClick={() =>
                  dispatch({
                    type: 'DELETE_ITEM',
                    payload: { listId, itemId: item.id }
                  })
                }
              >
                <i className="fas fa-minus-circle" />
              </button>
            </label>
          );
        }}
      </Consumer>
    );
  }
}

export default ListItem;
