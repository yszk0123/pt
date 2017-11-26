import { createActions } from 'redux-actions';

const {
  authenticateWithPaperSuccess,
  authenticateWithPaperFailure,
  postDailyReportRequest,
  postDailyReportSuccess,
  importDailyReportSuccess,
} = createActions({
  AUTHENTICATE_WITH_PAPER_SUCCESS: accessToken => ({ accessToken }),
  AUTHENTICATE_WITH_PAPER_FAILURE: () => ({}),
  POST_DAILY_REPORT_REQUEST: (client, path, contents) => ({
    client,
    path,
    contents,
  }),
  POST_DAILY_REPORT_SUCCESS: date => ({ date }),
  IMPORT_DAILY_REPORT_SUCCESS: id => ({ id }),
});

export {
  authenticateWithPaperSuccess,
  authenticateWithPaperFailure,
  postDailyReportRequest,
  postDailyReportSuccess,
  importDailyReportSuccess,
};
