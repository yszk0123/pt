import reducer from '../../reducers/events';
import { completeMission } from '../../actions/mission';
import { buyItem } from '../../actions/item';
import { resetEvents } from '../../actions/event';

describe('events', () => {
  it('should handle BUY_ITEM', () => {
    const id = 'item-id';
    const point = 20;
    const state = [];
    expect(reducer(state, buyItem(id, point))).toEqual([
      {
        id,
        point: -point,
      },
    ]);
  });

  it('should handle COMPLETE_MISSION', () => {
    const id = 'mission-id';
    const point = 20;
    const state = [];
    expect(reducer(state, completeMission(id, point))).toEqual([
      {
        id,
        point,
      },
    ]);
  });

  it('should handle RESET_EVENTS', () => {
    const state = [{ id: 'item-id', point: 10 }];
    expect(reducer(state, resetEvents())).toEqual([]);
  });
});
