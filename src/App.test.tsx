import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

it('renders without crashing', () => {

  const store = mockStore({ todos: [] });
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
