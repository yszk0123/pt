import configureStore from '../../store/configureStore';

describe('configureStore', () => {
  it('should return store without crash', () => {
    configureStore();
  });
});
