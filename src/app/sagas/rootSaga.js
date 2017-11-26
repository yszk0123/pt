import { all, fork } from 'redux-saga/effects';
import { authenticateWithPaper, watchPostDailyReport } from './paper';

export default function* rootSaga() {
  yield authenticateWithPaper();
  yield all([fork(watchPostDailyReport)]);
}
