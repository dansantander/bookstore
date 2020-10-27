import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import App from './components/App';

const defaultState = {
  books: [
    {
      id: 1, //parseint(string,base)
      title: '1984',
      category: 'Sci-Fi',
    },
    {
      id: 2,
      title: 'IT',
      category: 'Horror',
    },
    {
      id: 3,
      title: 'The Hobbit',
      category: 'Learning',
    },
  ],
  filter: 'All',
};

const store = createStore(
  rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
