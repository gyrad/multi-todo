import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List/List';
import { updateListOrder } from '../actions';

import Sortable from 'react-sortablejs';

const AllLists = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  const renderEmptyTodoMessage = (
    <div className="section">
      <div className="container has-text-centered">
        You currently have no lists. Today is a great day to start a new todo
        list!
      </div>
    </div>
  );

  return (
    <>
      <section className="section" style={{ paddingTop: '.5rem' }}>
        <div className="container">
          <Sortable
            options={{
              handle: '.handle-list',
              dragClass: 'list-drag',
              ghostClass: 'list-ghost',
              chosenClass: 'list-chosen',
              animation: 150
            }}
            className="columns is-multiline"
            onChange={order => {
              dispatch(
                updateListOrder(
                  [...lists].sort(
                    (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
                  )
                )
              );
            }}
          >
            {lists.map(list => {
              return (
                <List key={list.id} list={list} visibility={list.visibility} />
              );
            })}
          </Sortable>
        </div>
      </section>
      {lists.length === 0 ? renderEmptyTodoMessage : null}
    </>
  );
};

export default AllLists;
