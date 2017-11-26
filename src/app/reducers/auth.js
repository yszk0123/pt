import { handleActions } from 'redux-actions';
import { authenticateWithPaperSuccess } from '../actions/paper';

export default handleActions(
  {
    [authenticateWithPaperSuccess](state, action) {
      const { accessToken } = action.payload;

      return {
        ...state,
        accessToken,
      };
    },
  },
  {},
);
