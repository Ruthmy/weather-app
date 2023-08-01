import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // This provider will provide the global state to our app
import store from './redux/store'; // This is our Redux store

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
