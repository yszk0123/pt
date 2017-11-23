import { completeMission, editMission } from '../../app/actions/mission';

describe('mission', () => {
  it('should return COMPLETE_MISSION action', () => {
    const id = 'mission-id';
    const point = 10;
    expect(completeMission(id, point)).toEqual({
      type: 'COMPLETE_MISSION',
      payload: { id, point },
    });
  });

  it('should return EDIT_MISSION action', () => {
    const id = 'mission-id';
    const name = 'mission-name';
    const point = 10;
    expect(editMission(id, name, point)).toEqual({
      type: 'EDIT_MISSION',
      payload: { id, name, point },
    });
  });
});
