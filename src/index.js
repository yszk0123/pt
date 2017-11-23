import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import './index.css';
import App from './app/components/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
