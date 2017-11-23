import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './app/store/configureStore';
import './index.css';
import App from './app/components/App';
import registerServiceWorker from './registerServiceWorker';
import configureAuth from './configureAuth';
import { withAuthenticator } from 'aws-amplify-react';

const { store, persistor } = configureStore();

configureAuth();
const AppWithAuthenticator = withAuthenticator(App);

function Loading() {
  return <div>Loading...</div>;
}

render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <AppWithAuthenticator />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
