import * as React from 'react';
import App from './App';
import { 
  createStore,
  applyMiddleware,
  Store
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux'
import { State, initialState } from './model';
import { reducer } from './reducers/NoteReducer';
// const axios = require('axios');

/*
// Add a request interceptor
axios.interceptors.request.use(
  function (config: any) {
    return new Promise((resolve, reject) => {
        const token = session.getJwtToken();
        config.headers.Authorization = `Bearer ${token}`;
        resolve(config);
    });
  },
  function (error: any) {
    return Promise.reject(error);
  }
);
*/

const logger = (createLogger as any)();

let middlewareList = [ thunk ];
if (process.env.NODE_ENV === 'development') {
  middlewareList = [...middlewareList, logger];
}

var middleware = applyMiddleware(...middlewareList);

const rootReducer = combineReducers<State>({
  notes: reducer
});

const store = createStore(rootReducer, initialState, middleware) as Store<State>;

class ReduxRoot extends React.Component {

  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}

export default ReduxRoot;
