import { createActions } from 'redux-actions';

const { postDailyReport, importDailyReport } = createActions({
  POST_DAILY_REPORT: date => ({ date }),
  IMPORT_DAILY_REPORT: id => ({ id }),
});

export { postDailyReport, importDailyReport };
