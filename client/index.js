import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import styles from './scss/main-page.scss';

render(
  <App />,
  document.getElementById('main-app')
);
