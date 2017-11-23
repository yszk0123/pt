import { resetEvents } from '../../app/actions/event';

describe('event', () => {
  it('should return RESET_EVENTS action', () => {
    expect(resetEvents()).toEqual({
      type: 'RESET_EVENTS',
      payload: {},
    });
  });
});
