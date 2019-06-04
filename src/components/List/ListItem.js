import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Consumer } from '../../context';
import DueDateButton from './DueDateButton';
import './ListItem.scss';

class ListItem extends Component {
  onDueDateSelect = (dispatch, listId, itemId, dueDate) => {
    dispatch({ type: 'SET_DUE_DATE', payload: { listId, itemId, dueDate } });
  };

  toggleCompleted = (dispatch, listId, itemId) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: { listId, itemId } });
  };

  datepicker = React.createRef();

  closeCalendar = () => {
    this.datepicker.current.setOpen(false);
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
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    const datified = new Date(item.dueDate);
    const today = new Date();
    const dueDate = (() => {
      if (item.dueDate) {
        return `${
          months[datified.getMonth()]
        } ${datified.getDate()}, ${datified.getFullYear()}`;
      }
      return null;
    })();

    const renderDueDate = (() => {
      if (
        dueDate &&
        datified.getFullYear() === today.getFullYear() &&
        datified.getMonth() === today.getMonth() &&
        datified.getDate() === today.getDate()
      ) {
        return (
          <div className="duedate">
            <strong style={{ color: 'dodgerblue' }}>Due today! </strong>
          </div>
        );
      } else if (
        dueDate &&
        datified.getFullYear() === today.getFullYear() &&
        datified.getMonth() === today.getMonth() &&
        datified.getDate() === today.getDate() + 1
      ) {
        return (
          <div className="duedate">
            <strong style={{ color: 'dodgerblue' }}>Due tomorrow! </strong>
          </div>
        );
      } else if (dueDate && datified >= today) {
        return (
          <div className="duedate">
            <strong>Due on: </strong> {dueDate}
          </div>
        );
      } else {
        return (
          <div className="duedate" style={{ color: 'tomato' }}>
            <strong style={{ color: 'red' }}>Was due on: </strong> {dueDate}
          </div>
        );
      }
    })();

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
                <DatePicker
                  customInput={<DueDateButton />}
                  onChange={dueDate =>
                    this.onDueDateSelect(dispatch, listId, item.id, dueDate)
                  }
                  popperClassName="duedate-popup"
                  popperPlacement="top-end"
                  popperModifiers={{
                    offset: {
                      enabled: true,
                      offset: '20px, 0px'
                    }
                  }}
                  shouldCloseOnSelect={true}
                  ref={this.datepicker}
                  minDate={new Date()}
                >
                  <div style={{ clear: 'both', padding: 5 }}>
                    <button
                      className="button is-info clear-btn"
                      onClick={() => {
                        this.onDueDateSelect(dispatch, listId, item.id, null);
                        this.closeCalendar();
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </DatePicker>

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

              {item.dueDate ? renderDueDate : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ListItem;
