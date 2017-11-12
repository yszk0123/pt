import { createActions } from 'redux-actions';

const { completeMission, editMission } = createActions({
  COMPLETE_MISSION: (id, point) => ({ id, point }),
  EDIT_MISSION: (id, name, point) => ({ id, name, point }),
});

export { completeMission, editMission };
