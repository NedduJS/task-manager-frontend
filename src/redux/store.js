/* eslint-disable comma-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import taskReducers from './tasks/taskReducers';

import { getTasks } from './tasks/taskActions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStore = () => {
  const store = createStore(
    taskReducers,
    composeEnhancers(applyMiddleware(thunk))
  );

  getTasks()(store.dispatch);
  return store;
};

export default generateStore;
