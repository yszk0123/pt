import { call, put, take, fork } from 'redux-saga/effects';
import { parse } from 'qs';
import {
  authenticateWithPaperSuccess,
  authenticateWithPaperFailure,
  postDailyReportSuccess,
  importDailyReportSuccess,
  postDailyReportRequest,
} from '../actions/paper';

export function* authenticateWithPaper() {
  const accessToken = parse(window.location.hash.substring(1)).access_token;
  if (accessToken) {
    yield put(authenticateWithPaperSuccess(accessToken));
  } else {
    yield put(authenticateWithPaperFailure());
  }
}

export function* postDailyReport(client, path, contents) {
  yield call([client, client.filesUpload], {
    path,
    contents,
    autorename: true,
  });
  yield put(postDailyReportSuccess());
}

export function* importDailyReport(client, docId) {
  yield call([client, client.paperDocsDownload], docId);
  yield put(importDailyReportSuccess());
}

export function* watchPostDailyReport() {
  while (true) {
    const { payload: { client, path, contents } } = yield take(
      postDailyReportRequest,
    );
    yield fork(postDailyReport, client, path, contents);
  }
}
