import { handleActions, combineActions } from 'redux-actions';
import { omit } from 'lodash';
import {
  editMission,
  removeMission,
  completeMission,
} from '../actions/mission';

export const mission = handleActions(
  {
    [editMission](state, action) {
      return {
        ...state,
        ...action.payload,
        totalPoint: state.totalPoint || 0,
      };
    },
    [completeMission](state, action) {
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
    [combineActions(editMission, completeMission)](state, action) {
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
