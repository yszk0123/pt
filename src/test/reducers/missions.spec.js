import reducer from '../../reducers/missions';
import { editMission } from '../../actions/mission';

describe('missions', () => {
  it('should handle EDIT_ITEM', () => {
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
});
