import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';
import styles from './scss/app.scss';

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('main-app')
);
