import { call, put } from 'redux-saga/effects';
import { parse } from 'qs';
import {
  authenticateWithPaperSuccess,
  authenticateWithPaperFailure,
  postDailyReportSuccess,
  importDailyReportSuccess,
} from '../actions/paper';

export function* authenticateWithPaper() {
  const accessToken = parse(window.location.hash.substring(1)).access_token;
  if (accessToken) {
    yield put(authenticateWithPaperSuccess(accessToken));
  } else {
    yield put(authenticateWithPaperFailure());
  }
}

export function* postDailyReport(client, contents) {
  yield call([client, client.paperDocsCreate], {
    contents,
    import_format: 'markdown',
  });
  yield put(postDailyReportSuccess());
}

export function* importDailyReport(client, docId) {
  yield call([client, client.paperDocsDownload], docId);
  yield put(importDailyReportSuccess());
}
