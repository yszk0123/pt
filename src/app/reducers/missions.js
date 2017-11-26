import { handleActions, combineActions } from 'redux-actions';
import { omit } from 'lodash';
import { editMission, removeMission } from '../actions/mission';

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
    [combineActions(removeMission)](state, action) {
      const { id } = action.payload;

      return omit(state, id);
    },
  },
  {},
);
