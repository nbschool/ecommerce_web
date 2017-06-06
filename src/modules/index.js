import { combineReducers } from 'redux';
import items from './items';
import login from './login';

const rootReducer = combineReducers({
  items,
  login,
});

export default rootReducer;
