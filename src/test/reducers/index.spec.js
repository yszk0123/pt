import reducer from '../../reducers';

describe('root', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      events: [],
      items: {},
      missions: {},
    });
  });
});
