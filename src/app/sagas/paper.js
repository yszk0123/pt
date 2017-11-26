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

function readTextFromBlob(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      if (reader.error) {
        reject(reader.error);
      } else {
        resolve(reader.result);
      }
    });
    reader.readAsText(blob);
  });
}

export function* importDailyReport(client, docId) {
  try {
    const { fileBlob } = yield call([client, client.paperDocsDownload], docId);
    const data = yield call(readTextFromBlob, fileBlob);
    yield put(importDailyReportSuccess(data));
  } catch (error) {
    yield put(importDailyReportFailure(error));
  }
}

export function* watchPostDailyReport() {
  while (true) {
    const { payload: { client, path, contents } } = yield take(
      postDailyReportRequest,
    );
    yield fork(postDailyReport, client, path, contents);
  }
}
