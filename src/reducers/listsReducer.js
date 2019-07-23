import {
  TOGGLE_COMPLETED,
  ADD_ITEM,
  DELETE_ITEM,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
  SHOW_ALL,
  UPDATE_LIST_TITLE,
  DELETE_LIST,
  ADD_LIST,
  UPDATE_LIST_ITEM,
  DELETE_ALL_LISTS,
  SET_DUE_DATE
} from '../actions/types';

const listsReducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_COMPLETED: {
      const { listId, itemId } = action.payload;
      return [...state].map(list => {
        if (list.id === listId) {
          list.items.map(listItem => {
            if (listItem.id === itemId) {
              listItem.completed = !listItem.completed;
            }
            return listItem;
          });
        }
        return list;
      });
    }

    case ADD_ITEM: {
      const { newItemId, newItem, listId } = action.payload;
      return [...state].map(list => {
        if (list.id === listId) {
          list.items.push({
            id: newItemId,
            todoItem: newItem,
            completed: false
          });
        }
        return list;
      });
    }

    case DELETE_ITEM:
      return [...state].map(list => {
        if (list.id === action.payload.listId) {
          list.items = list.items.filter(
            item => item.id !== action.payload.itemId
          );
        }
        return list;
      });

    case SHOW_ACTIVE:
      return [...state].map(list => {
        if (action.payload === list.id) {
          list.visibility = 'active';
        }
        return list;
      });

    case SHOW_COMPLETED:
      return [...state].map(list => {
        if (action.payload === list.id) {
          list.visibility = 'completed';
        }
        return list;
      });

    case SHOW_ALL:
      return [...state].map(list => {
        if (action.payload === list.id) {
          list.visibility = 'all';
        }
        return list;
      });

    case UPDATE_LIST_TITLE:
      return [...state].map(list => {
        if (action.payload.listId === list.id) {
          list.title = action.payload.newTitle;
        }
        return list;
      });

    case DELETE_LIST:
      return [...state].filter(list => list.id !== action.payload);

    case ADD_LIST:
      return [
        {
          id: action.payload,
          title: 'Click me to edit title',
          visibility: 'all',
          items: []
        },
        ...state
      ];

    case UPDATE_LIST_ITEM:
      return [...state].map(list => {
        if (list.id === action.payload.listId) {
          list.items = list.items.map(item => {
            if (item.id === action.payload.itemId) {
              item.todoItem = action.payload.newItem;
            }
            return item;
          });
        }
        return list;
      });

    case DELETE_ALL_LISTS:
      return [];

    case SET_DUE_DATE: {
      const { listId, itemId, dueDate } = action.payload;
      return [...state].map(list => {
        if (list.id === listId) {
          list.items.map(item => {
            if (item.id === itemId) {
              item.dueDate = dueDate;
            }
            return item;
          });
        }
        return list;
      });
    }

    default:
      return state;
  }
};

export default listsReducer;
