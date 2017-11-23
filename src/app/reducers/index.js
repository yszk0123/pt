import { combineReducers } from 'redux';
import events from './events';
import items from './items';
import missions from './missions';

export default combineReducers({
  events,
  items,
  missions,
});
