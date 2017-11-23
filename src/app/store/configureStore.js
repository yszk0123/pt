import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import localForage from 'localforage';
import reducers from '../reducers';
import rootSaga from '../sagas/rootSaga';

const persistConfig = {
  key: 'root',
  storage: localForage,
};

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = persistCombineReducers(persistConfig, reducers);
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
