import { combineReducers } from 'redux';
import reducers from '../../app/reducers';

const reducer = combineReducers(reducers);

describe('root', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      events: [],
      items: {},
      missions: {},
    });
  });
});
