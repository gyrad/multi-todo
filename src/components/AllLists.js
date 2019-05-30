import React from 'react';
import { Consumer } from '../context';
import List from './List/List';

function AllLists() {
  const renderEmptyTodoMessage = (
    <div className="section">
      <div className="container has-text-centered">
        You currently have no lists. Today is a great day to start a new todo
        list!
      </div>
    </div>
  );

  return (
    <Consumer>
      {value => {
        const { allLists } = value;
        return (
          <React.Fragment>
            <section className="section" style={{ paddingTop: '.5rem' }}>
              <div className="container">
                <div className="columns is-multiline">
                  {allLists.map(list => (
                    <List
                      key={list.id}
                      list={list}
                      visibility={list.visibility}
                    />
                  ))}
                </div>
              </div>
            </section>
            {allLists.length === 0 ? renderEmptyTodoMessage : null}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

export default AllLists;
