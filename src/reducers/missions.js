import { handleActions, combineActions } from 'redux-actions';
import { editMission } from '../actions/mission';

export const mission = handleActions(
  {
    [editMission](state, action) {
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
    [combineActions(editMission)](state, action) {
      const { id } = action.payload;

      return {
        ...state,
        [id]: mission(state[id], action),
      };
    },
  },
  {},
);
