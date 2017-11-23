import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import './index.css';
import App from './app/components/App';
import registerServiceWorker from './registerServiceWorker';
import configureAuth from './configureAuth';
import { withAuthenticator } from 'aws-amplify-react';

const store = configureStore();

configureAuth();
const AppWithAuthenticator = withAuthenticator(App);

render(
  <Provider store={store}>
    <AppWithAuthenticator />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
