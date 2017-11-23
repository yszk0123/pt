import { handleActions, combineActions } from 'redux-actions';
import { editItem } from '../actions/item';

export const item = handleActions(
  {
    [editItem](state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  {},
);

export default handleActions(
  {
    [combineActions(editItem)](state, action) {
      const { id } = action.payload;

      return {
        ...state,
        [id]: item(state[id], action),
      };
    },
  },
  {},
);
