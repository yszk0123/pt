import {
  authenticateWithPaperSuccess,
  authenticateWithPaperFailure,
  postDailyReportRequest,
  postDailyReportSuccess,
  importDailyReportSuccess,
} from '../../app/actions/paper';

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

  it('should return POST_DAILY_REPORT_REQUEST action', () => {
    const client = 'dummy-client';
    const path = 'dummy-path';
    const contents = 'dummy-contents';
    expect(postDailyReportRequest(client, path, contents)).toEqual({
      type: 'POST_DAILY_REPORT_REQUEST',
      payload: { client, path, contents },
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
