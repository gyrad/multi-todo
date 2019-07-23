import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions';

const AddItem = props => {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState('');

  const onAddItem = (listId, e) => {
    e.preventDefault();
    dispatch(addItem(newItem, listId));
    setNewItem('');
  };

  const { listId } = props;

  return (
    <div className="panel-block">
      <form
        className="control has-icons-left"
        onSubmit={e => onAddItem(listId, e)}
      >
        <input
          type="text"
          className="input is-small"
          placeholder="Add Item..."
          onChange={e => setNewItem(e.target.value)}
          value={newItem}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-plus" aria-hidden="true" />
        </span>
      </form>
    </div>
  );
};

export default AddItem;
