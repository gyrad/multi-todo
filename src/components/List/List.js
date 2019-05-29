import React, { Component } from 'react';
import ListItem from './ListItem';
import AddItem from './AddItem';
import { Consumer } from '../../context';
import './List.scss';

class List extends Component {
  updateTitle = (listId, dispatch, e) => {
    // Following line prevents running dispatch twice.
    // ISSUE:
    // [Enter] key blurs element which causes onBlur attribute to fire again.
    if (e.bubbles) return;

    dispatch({
      type: 'UPDATE_LIST_TITLE',
      payload: { listId, newTitle: e.target.textContent }
    });
  };

  render() {
    const { id, title, items, visibility } = this.props.list;
    let message, filteredList, totalCompleted, progressPerc;

    if (items.length === 0) {
      message = <p className="list-msg">There are no items in your list.</p>;
    }

    filteredList = items.filter(item => {
      if (visibility === 'active') {
        return !item.completed;
      } else if (visibility === 'completed') {
        return item.completed;
      }
      return item;
    });

    if (filteredList.length === 0 && items.length !== 0) {
      message = (
        <p className="list-msg">
          There are no {visibility} items in your list.
          <br />
          {visibility === 'active'
            ? `Woohoo, you’ve completed all your tasks! 🥳`
            : null}
        </p>
      );
    }

    totalCompleted = items.filter(item => item.completed).length;
    progressPerc = (totalCompleted / items.length) * 100;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="column is-one-third List">
              <div className="panel">
                <p className="panel-heading">
                  <span
                    className="list-title"
                    contentEditable={true}
                    onBlur={e => this.updateTitle(id, dispatch, e)}
                    onKeyPress={e => {
                      if (e.key === 'Enter') {
                        this.updateTitle(id, dispatch, e);
                        e.target.blur();
                      }
                    }}
                    suppressContentEditableWarning={true}
                    spellCheck={false}
                  >
                    {title}
                  </span>
                  <span className="action-btns">
                    <button
                      className="delete-list-btn"
                      onClick={() =>
                        dispatch({ type: 'DELETE_LIST', payload: id })
                      }
                      title="Delete List"
                    >
                      <span className="icon">
                        <i className="fas fa-times" />
                      </span>
                      {/* <span>Delete</span> */}
                    </button>
                  </span>
                </p>
                <div className="progressbar-wrapper">
                  <div
                    className="progressbar"
                    style={{
                      width: `${progressPerc}%`,
                      backgroundColor: `${
                        progressPerc === 100 ? 'dodgerblue' : 'lightblue'
                      }`
                    }}
                  />
                </div>
                <p className="panel-tabs">
                  <button
                    onClick={() =>
                      dispatch({ type: 'SHOW_ACTIVE', payload: id })
                    }
                    className={visibility === 'active' ? 'is-active' : null}
                  >
                    Active
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: 'SHOW_COMPLETED', payload: id })
                    }
                    className={visibility === 'completed' ? 'is-active' : null}
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'SHOW_ALL', payload: id })}
                    className={visibility === 'all' ? 'is-active' : null}
                  >
                    All
                  </button>
                </p>
                {filteredList.map(item => (
                  <ListItem item={item} listId={id} key={item.id} />
                ))}

                {message}

                <AddItem addToListId={id} />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default List;
