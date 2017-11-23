import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas/rootSaga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
