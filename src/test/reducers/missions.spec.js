import reducer from '../../app/reducers/missions';
import { editMission, removeMission } from '../../app/actions/mission';

describe('missions', () => {
  it('should handle EDIT_MISSION', () => {
    const id = 'mission-id';
    const newName = 'mission-new-name';
    const newPoint = 20;
    const state = {
      [id]: {
        id,
        name: 'mission-name',
        point: 10,
      },
    };
    expect(reducer(state, editMission(id, newName, newPoint))).toEqual({
      [id]: {
        id,
        name: newName,
        point: newPoint,
      },
    });
  });

  it('should handle REMOVE_MISSION', () => {
    const state = {
      '1': {
        id: '1',
        name: 'mission-1',
        point: 10,
      },
      '2': {
        id: '2',
        name: 'mission-2',
        point: 20,
      },
    };
    expect(reducer(state, removeMission('2'))).toEqual({
      '1': {
        id: '1',
        name: 'mission-1',
        point: 10,
      },
    });
  });
});
