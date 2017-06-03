import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer.js';

import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

export default createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
  )
);
