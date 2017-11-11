import { createActions } from 'redux-actions';

const { completeMission, editMission } = createActions({
  COMPLETE_MISSION: id => ({ id }),
  EDIT_MISSION: id => ({ id }),
});

export { completeMission, editMission };
