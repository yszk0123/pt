import Dropbox from 'dropbox';
import { call, put } from 'redux-saga/effects';
import {
  authenticateWithPaper,
  postDailyReport,
  importDailyReport,
} from '../../app/sagas/paper';
import setURL from '../testHelpers/setURL';
import {
  authenticateWithPaperSuccess,
  authenticateWithPaperFailure,
  postDailyReportSuccess,
  importDailyReportSuccess,
} from '../../app/actions/paper';

const CLIENT_ID = 'client-id';

describe('paper', () => {
  describe('authenticateWithPaper', () => {
    it('should succeed when access_token is provided', () => {
      const accessToken = 'access-token';
      setURL(`http://example.com#access_token=${accessToken}`);
      const gen = authenticateWithPaper();
      expect(gen.next().value).toEqual(
        put(authenticateWithPaperSuccess(accessToken)),
      );
    });

    it('should fail when access_token is not provided', () => {
      setURL('http://example.com');
      const gen = authenticateWithPaper();
      expect(gen.next().value).toEqual(put(authenticateWithPaperFailure()));
    });
  });

  describe('postDailyReport', () => {
    it('should put success action', () => {
      const client = new Dropbox({ clientId: CLIENT_ID });
      const path = '/path/to/report';
      const contents = 'report contents';
      const gen = postDailyReport(client, path, contents);
      expect(gen.next().value).toEqual(
        call([client, client.filesUpload], {
          path,
          contents,
          autorename: true,
        }),
      );
      expect(gen.next().value).toEqual(put(postDailyReportSuccess()));
    });
  });

  describe('importDailyReport', () => {
    it('should put success action', () => {
      const client = new Dropbox({ clientId: CLIENT_ID });
      const docId = 'doc-id';
      const gen = importDailyReport(client, docId);
      expect(gen.next().value).toEqual(
        call([client, client.paperDocsDownload], docId),
      );
      expect(gen.next().value).toEqual(put(importDailyReportSuccess()));
    });
  });
});
