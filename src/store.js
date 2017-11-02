import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/root-reducer';

let middleware;

const logger = createLogger({
  collapsed: true,
});

if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(thunk);
} else {
  middleware = applyMiddleware(thunk, logger);
}

export default createStore(reducer, middleware);
