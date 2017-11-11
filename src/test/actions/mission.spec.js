import { completeMission, editMission } from '../../actions/mission';

describe('mission', () => {
  it('should return COMPLETE_MISSION action', () => {
    const id = 'mission-id';
    expect(completeMission(id)).toEqual({
      type: 'COMPLETE_MISSION',
      payload: { id },
    });
  });

  it('should return EDIT_MISSION action', () => {
    const id = 'mission-id';
    expect(editMission(id)).toEqual({
      type: 'EDIT_MISSION',
      payload: { id },
    });
  });
});
