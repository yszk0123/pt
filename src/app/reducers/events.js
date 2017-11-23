import { handleActions } from 'redux-actions';
import { completeMission } from '../actions/mission';
import { buyItem } from '../actions/item';
import { resetEvents } from '../actions/event';

export default handleActions(
  {
    [buyItem](state, action) {
      const { id, point } = action.payload;

      return state.concat({
        id,
        point: -point,
      });
    },
    [completeMission](state, action) {
      const { id, point } = action.payload;

      return state.concat({
        id,
        point,
      });
    },
    [resetEvents](state, action) {
      return [];
    },
  },
  [],
);
