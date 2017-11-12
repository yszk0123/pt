import configureStore from '../../store/configureStore';
import { completeMission } from '../../actions/mission';
import { buyItem } from '../../actions/item';
import { getTotalPoint } from '../../selectors/app';

describe('app', () => {
  describe('getTotalPoint', () => {
    it('should return total point', () => {
      const store = configureStore();
      expect(getTotalPoint(store.getState())).toEqual(0);

      store.dispatch(completeMission('mission-id', 100));
      expect(getTotalPoint(store.getState())).toEqual(100);

      store.dispatch(buyItem('item-id', 10));
      expect(getTotalPoint(store.getState())).toEqual(90);
    });
  });
});
