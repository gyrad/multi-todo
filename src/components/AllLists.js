import React from 'react';
import { useSelector } from 'react-redux';
import List from './List/List';

const AllLists = () => {
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
          <div className="columns is-multiline">
            {lists.map(list => (
              <List key={list.id} list={list} visibility={list.visibility} />
            ))}
          </div>
        </div>
      </section>
      {lists.length === 0 ? renderEmptyTodoMessage : null}
    </>
  );
};

export default AllLists;
