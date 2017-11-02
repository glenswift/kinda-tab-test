import { combineReducers } from 'redux';
import tabs from './tabs-reducer';

const appReducer = combineReducers({
  tabs,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};


export default rootReducer;
