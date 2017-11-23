import configureStore from '../../app/store/configureStore';

describe('configureStore', () => {
  it('should return store without crash', () => {
    configureStore();
  });
});
