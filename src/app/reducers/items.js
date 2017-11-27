import { handleActions, combineActions } from 'redux-actions';
import { omit } from 'lodash';
import { editItem, removeItem, buyItem } from '../actions/item';

export const item = handleActions(
  {
    [editItem](state, action) {
      return {
        ...state,
        ...action.payload,
        totalPoint: state.totalPoint || 0,
      };
    },
    [buyItem](state, action) {
      return {
        ...state,
        totalPoint: (state.totalPoint || 0) + action.payload.point,
      };
    },
  },
  {},
);

export default handleActions(
  {
    [combineActions(editItem, buyItem)](state, action) {
      const { id } = action.payload;

      return {
        ...state,
        [id]: item(state[id], action),
      };
    },
    [combineActions(removeItem)](state, action) {
      const { id } = action.payload;

      return omit(state, id);
    },
  },
  {},
);
