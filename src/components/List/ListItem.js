import React, { Component } from 'react';
import { Consumer } from '../../context';

import './ListItem.scss';

class ListItem extends Component {
  toggleCompleted = (dispatch, listId, itemId) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: { listId, itemId } });
  };

  updateListItem = (dispatch, listId, itemId, e) => {
    // Following line prevents running dispatch twice.
    // ISSUE:
    // [Enter] key blurs element which causes onBlur attribute to fire again.
    if (e.bubbles) return;

    dispatch({
      type: 'UPDATE_LIST_ITEM',
      payload: { listId, itemId, newItem: e.target.textContent }
    });
  };

  render() {
    const { listId, item } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div
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
                contentEditable={true}
                className="editable-list-item"
                suppressContentEditableWarning={true}
                spellCheck={false}
                onBlur={e => this.updateListItem(dispatch, listId, item.id, e)}
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    this.updateListItem(dispatch, listId, item.id, e);
                    e.target.blur();
                  }
                }}
              >
                {item.todoItem}
              </span>
              <div className="action-btns">
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
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ListItem;
