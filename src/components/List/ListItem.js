import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setDueDate,
  toggleCompleted,
  updateListItem,
  deleteItem
} from '../../actions';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import DueDateButton from './DueDateButton';
import './ListItem.scss';

const ListItem = props => {
  const dispatch = useDispatch();

  const onDueDateSelect = (listId, itemId, dueDate) => {
    dispatch(setDueDate(listId, itemId, dueDate));
  };

  const onToggleCompleted = (listId, itemId) => {
    dispatch(toggleCompleted(listId, itemId));
  };

  const datepicker = useRef();

  const onUpdateListItem = (listId, itemId, e) => {
    // Following line prevents running dispatch twice.
    // ISSUE:
    // [Enter] key blurs element which causes onBlur attribute to fire again.
    if (e.bubbles) return;

    dispatch(updateListItem(listId, itemId, e.target.textContent));
  };

  const { listId, item } = props;
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
    <div
      className={`ListItem panel-block ${item.completed ? 'is-active' : null}`}
      key={item.id}
    >
      <input
        type="checkbox"
        defaultChecked={item.completed}
        onChange={() => onToggleCompleted(listId, item.id)}
      />
      <span
        style={item.completed ? { textDecoration: 'line-through' } : null}
        contentEditable={true}
        className="editable-list-item"
        suppressContentEditableWarning={true}
        spellCheck={false}
        onBlur={e => onUpdateListItem(listId, item.id, e)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            onUpdateListItem(listId, item.id, e);
            e.target.blur();
          }
        }}
      >
        {item.todoItem}
      </span>
      <div className="action-btns">
        <DatePicker
          customInput={<DueDateButton />}
          onChange={dueDate => onDueDateSelect(listId, item.id, dueDate)}
          popperClassName="duedate-popup"
          popperPlacement="top-end"
          popperModifiers={{
            offset: {
              enabled: true,
              offset: '20px, 0px'
            }
          }}
          shouldCloseOnSelect={true}
          ref={datepicker}
          minDate={new Date()}
        >
          <div style={{ clear: 'both', padding: 5 }}>
            <button
              className="button is-info clear-btn"
              onClick={() => {
                onDueDateSelect(listId, item.id, null);
                datepicker.current.setOpen(false);
              }}
            >
              Clear
            </button>
          </div>
        </DatePicker>

        <button
          className="delete-btn"
          title="Delete Item"
          onClick={() => dispatch(deleteItem(listId, item.id))}
        >
          <i className="fas fa-minus-circle" />
        </button>
      </div>

      {item.dueDate ? renderDueDate : null}
    </div>
  );
};

export default ListItem;
