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
import uuid from 'uuid';

export const toggleCompleted = (listId, itemId) => ({
  type: TOGGLE_COMPLETED,
  payload: {
    listId,
    itemId
  }
});

export const addItem = (newItem, listId) => ({
  type: ADD_ITEM,
  payload: {
    newItemId: uuid(),
    newItem,
    listId
  }
});

export const deleteItem = (listId, itemId) => ({
  type: DELETE_ITEM,
  payload: {
    listId,
    itemId
  }
});

export const showActive = listId => ({
  type: SHOW_ACTIVE,
  payload: listId
});

export const showCompleted = listId => ({
  type: SHOW_COMPLETED,
  payload: listId
});

export const showAll = listId => ({
  type: SHOW_ALL,
  payload: listId
});

export const updateListTitle = (listId, newTitle) => ({
  type: UPDATE_LIST_TITLE,
  payload: {
    listId,
    newTitle
  }
});

export const deleteList = listId => ({
  type: DELETE_LIST,
  payload: listId
});

export const addList = () => ({
  type: ADD_LIST,
  payload: uuid()
});

export const updateListItem = (listId, itemId, newItem) => ({
  type: UPDATE_LIST_ITEM,
  payload: {
    listId,
    itemId,
    newItem
  }
});

export const deleteAllLists = () => ({
  type: DELETE_ALL_LISTS
});

export const setDueDate = (listId, itemId, dueDate) => ({
  type: SET_DUE_DATE,
  payload: {
    listId,
    itemId,
    dueDate
  }
});
