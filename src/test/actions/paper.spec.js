import {
  authenticateWithPaperSuccess,
  authenticateWithPaperFailure,
  postDailyReportSuccess,
  importDailyReportSuccess,
} from '../../actions/paper';

describe('paper', () => {
  it('should return AUTHENTICATE_WITH_PAPER_SUCCESS action', () => {
    const accessToken = 'access-token';
    expect(authenticateWithPaperSuccess(accessToken)).toEqual({
      type: 'AUTHENTICATE_WITH_PAPER_SUCCESS',
      payload: { accessToken },
    });
  });

  it('should return AUTHENTICATE_WITH_PAPER_FAILURE action', () => {
    expect(authenticateWithPaperFailure()).toEqual({
      type: 'AUTHENTICATE_WITH_PAPER_FAILURE',
      payload: {},
    });
  });

  it('should return POST_DAILY_REPORT_SUCCESS action', () => {
    const date = '2017-01-03';
    expect(postDailyReportSuccess(date)).toEqual({
      type: 'POST_DAILY_REPORT_SUCCESS',
      payload: { date },
    });
  });

  it('should return IMPORT_DAILY_REPORT_SUCCESS action', () => {
    const id = 'paper-doc-id';
    expect(importDailyReportSuccess(id)).toEqual({
      type: 'IMPORT_DAILY_REPORT_SUCCESS',
      payload: { id },
    });
  });
});
