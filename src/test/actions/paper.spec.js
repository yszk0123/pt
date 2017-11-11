import { postDailyReport, importDailyReport } from '../../actions/paper';

describe('paper', () => {
  it('should return POST_DAILY_REPORT action', () => {
    const date = '2017-01-03';
    expect(postDailyReport(date)).toEqual({
      type: 'POST_DAILY_REPORT',
      payload: { date },
    });
  });

  it('should return IMPORT_DAILY_REPORT action', () => {
    const id = 'paper-doc-id';
    expect(importDailyReport(id)).toEqual({
      type: 'IMPORT_DAILY_REPORT',
      payload: { id },
    });
  });
});
