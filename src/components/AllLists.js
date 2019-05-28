import React from 'react';
import { Consumer } from '../context';
import List from './List/List';

function AllLists() {
  return (
    <Consumer>
      {value => {
        const { allLists } = value;
        return (
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
        );
      }}
    </Consumer>
  );
}

export default AllLists;
