import { createActions } from 'redux-actions';

const {
  authenticateWithPaperSuccess,
  authenticateWithPaperFailure,
  postDailyReportSuccess,
  importDailyReportSuccess,
} = createActions({
  AUTHENTICATE_WITH_PAPER_SUCCESS: accessToken => ({ accessToken }),
  AUTHENTICATE_WITH_PAPER_FAILURE: () => ({}),
  POST_DAILY_REPORT_SUCCESS: date => ({ date }),
  IMPORT_DAILY_REPORT_SUCCESS: id => ({ id }),
});

export {
  authenticateWithPaperSuccess,
  authenticateWithPaperFailure,
  postDailyReportSuccess,
  importDailyReportSuccess,
};
