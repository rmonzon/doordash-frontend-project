import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../core/reducers';
import thunkMiddleware from 'redux-thunk';
// import {createLogger} from 'redux-logger';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
