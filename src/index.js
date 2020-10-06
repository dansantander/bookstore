import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const defaultState = {
  books: [
    {
      id: parseInt(Math.random() * 1000, 10), //parseint(string,base)
      title: '1984',
      category: 'Sci-Fi',
    },
    {
      id: parseInt(Math.random() * 1000, 10),
      title: 'IT',
      category: 'Horror',
    },
    {
      id: parseInt(Math.random() * 1000, 10),
      title: 'The Hobbit',
      category: 'Learning',
    }
  ]
}

const store = createStore(
  rootReducer,
  { books: defaultState.books }
);

/* const store = createStore(rootReducer) */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
