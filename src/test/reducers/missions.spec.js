import reducer from '../../app/reducers/missions';
import {
  editMission,
  removeMission,
  completeMission,
} from '../../app/actions/mission';

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
        totalPoint: 0,
      },
    });
  });

  it('should handle REMOVE_MISSION', () => {
    const state = {
      '1': {
        id: '1',
        name: 'mission-1',
        point: 10,
        totalPoint: 0,
      },
      '2': {
        id: '2',
        name: 'mission-2',
        point: 20,
        totalPoint: 0,
      },
    };
    expect(reducer(state, removeMission('2'))).toEqual({
      '1': {
        id: '1',
        name: 'mission-1',
        point: 10,
        totalPoint: 0,
      },
    });
  });

  it('should handle COMPLETE_MISSION', () => {
    const state = {
      '1': {
        id: '1',
        name: 'mission-name',
        point: 10,
        totalPoint: 0,
      },
    };
    expect(reducer(state, completeMission('1', 3))).toEqual({
      '1': {
        id: '1',
        name: 'mission-name',
        point: 10,
        totalPoint: 3,
      },
    });
  });
});
