import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Sortable from 'react-sortablejs';

import {
  updateListItemOrder,
  updateListTitle,
  deleteList,
  showActive,
  showCompleted,
  showAll
} from '../../actions';

import ListItem from './ListItem';
import AddItem from './AddItem';
import Modal from '../Modal';
import './List.scss';

const List = props => {
  const dispatch = useDispatch();

  const [modalVisibility, setModalVisibility] = useState(false);

  const updateTitle = (listId, e) => {
    // Following line prevents running dispatch twice.
    // ISSUE:
    // [Enter] key blurs element which causes onBlur attribute to fire again.
    if (e.bubbles) return;

    dispatch(updateListTitle(listId, e.target.textContent));
  };

  const { id, title, items, visibility } = props.list;
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
    <div className="column is-one-third List" data-id={id}>
      <div className="panel">
        <p className="panel-heading">
          <span className="handle-list">
            <i className="fas fa-grip-vertical" />
          </span>
          <span
            className="list-title"
            contentEditable={true}
            onBlur={e => updateTitle(id, e)}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                updateTitle(id, e);
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
              onClick={() => setModalVisibility(true)}
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
            onClick={() => dispatch(showActive(id))}
            className={visibility === 'active' ? 'is-active' : null}
          >
            Active
          </button>
          <button
            onClick={() => dispatch(showCompleted(id))}
            className={visibility === 'completed' ? 'is-active' : null}
          >
            Completed
          </button>
          <button
            onClick={() => dispatch(showAll(id))}
            className={visibility === 'all' ? 'is-active' : null}
          >
            All
          </button>
        </p>
        <Sortable
          options={{
            handle: '.handle-list-item',
            dragClass: 'list-item-drag',
            ghostClass: 'list-item-ghost',
            chosenClass: 'list-item-chosen',
            animation: 150
          }}
          onChange={order => {
            dispatch(
              updateListItemOrder(
                id,
                [...items].sort(
                  (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
                )
              )
            );
          }}
        >
          {filteredList.map(item => (
            <ListItem item={item} listId={id} key={item.id} />
          ))}
        </Sortable>

        {message}

        <AddItem listId={id} />
      </div>

      <Modal
        visibility={modalVisibility}
        closeModal={() => setModalVisibility(false)}
        title="Delete List"
        content="Are you sure you want to delete this list? This action is irreversible."
        buttonLabel="Delete List"
        buttonClass="is-danger"
        buttonAction={() => dispatch(deleteList(id))}
      />
    </div>
  );
};

export default List;
