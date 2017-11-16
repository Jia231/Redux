import { combineReducers } from 'redux';
import booksReducer from './reducer_books';
import activeBookReducer from './reducer_activeBook'

const rootReducer = combineReducers({
  books:booksReducer,
  activeBook : activeBookReducer
});

export default rootReducer;
