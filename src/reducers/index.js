import { combineReducers } from 'redux';
import listsReducer from './listsReducer';

const rootReducer = combineReducers({
  lists: listsReducer
});

export default rootReducer;
