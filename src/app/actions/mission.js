import { createActions } from 'redux-actions';

const { completeMission, editMission, removeMission } = createActions({
  COMPLETE_MISSION: (id, point) => ({ id, point }),
  EDIT_MISSION: (id, name, point) => ({ id, name, point }),
  REMOVE_MISSION: id => ({ id }),
});

export { completeMission, editMission, removeMission };
