import React, { Component } from 'react';
import uuid from 'uuid';

const Context = React.createContext();

const defaultVisibility = 'all';

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETED':
      const { listId, itemId } = action.payload;
      const toggledState = {
        allLists: [
          ...state.allLists.map(list => {
            if (list.id === listId) {
              list.items.map(listItem => {
                if (listItem.id === itemId) {
                  listItem.completed = !listItem.completed;
                }
                return listItem;
              });
            }
            return list;
          })
        ]
      };
      return toggledState;
    case 'ADD_ITEM':
      const { addItem, addToListId } = action.payload;
      const addedState = {
        allLists: [
          ...state.allLists.map(list => {
            if (list.id === addToListId) {
              list.items.push({
                id: uuid(),
                todoItem: addItem,
                completed: false
              });
            }
            return list;
          })
        ]
      };
      return addedState;
    case 'SHOW_ACTIVE':
      const showActive = {
        allLists: [
          ...state.allLists.map(list => {
            if (action.payload === list.id) {
              list.visibility = 'active';
            }
            return list;
          })
        ]
      };
      return showActive;
    case 'SHOW_COMPLETED':
      const showCompleted = {
        allLists: [
          ...state.allLists.map(list => {
            if (action.payload === list.id) {
              list.visibility = 'completed';
            }
            return list;
          })
        ]
      };
      return showCompleted;
    case 'SHOW_ALL':
      const showAll = {
        allLists: [
          ...state.allLists.map(list => {
            if (action.payload === list.id) {
              list.visibility = 'all';
            }
            return list;
          })
        ]
      };
      return showAll;
    case 'UPDATE_LIST_TITLE':
      const updatedListTitle = {
        allLists: [
          ...state.allLists.map(list => {
            if (action.payload.listId === list.id) {
              list.title = action.payload.newTitle;
            }
            return list;
          })
        ]
      };
      return updatedListTitle;
    case 'DELETE_LIST':
      const deletedListState = {
        allLists: [...state.allLists.filter(list => list.id !== action.payload)]
      };
      return deletedListState;
    case 'ADD_LIST':
      const addedListState = {
        allLists: [
          {
            id: uuid(),
            title: 'Click me to edit title',
            visibility: defaultVisibility,
            items: []
          },
          ...state.allLists
        ]
      };
      return addedListState;
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    allLists: [
      {
        id: uuid(),
        title: 'My Personal List',
        visibility: defaultVisibility,
        items: [
          {
            id: uuid(),
            todoItem: 'Make breakfast at 7am',
            completed: false
          },
          {
            id: uuid(),
            todoItem: 'Learn Reactjs and Redux',
            completed: false
          },
          {
            id: uuid(),
            todoItem: 'Run a mile this evening',
            completed: true
          }
        ]
      },
      {
        id: uuid(),
        title: 'My Work List',
        visibility: defaultVisibility,
        items: [
          {
            id: uuid(),
            todoItem: 'Fill up list 2',
            completed: true
          },
          {
            id: uuid(),
            todoItem: 'This is a list 2 item',
            completed: false
          }
        ]
      },
      {
        id: uuid(),
        title: 'My Work List',
        visibility: defaultVisibility,
        items: [
          {
            id: uuid(),
            todoItem: 'Fill up list 2',
            completed: true
          },
          {
            id: uuid(),
            todoItem: 'This is a list 2 item',
            completed: false
          }
        ]
      },
      {
        id: uuid(),
        title: 'My Work List',
        visibility: defaultVisibility,
        items: []
      },
      {
        id: uuid(),
        title: 'My Work List',
        visibility: defaultVisibility,
        items: [
          {
            id: uuid(),
            todoItem: 'Fill up list 2',
            completed: true
          },
          {
            id: uuid(),
            todoItem: 'This is a list 2 item',
            completed: false
          }
        ]
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
