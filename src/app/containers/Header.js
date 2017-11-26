import { connect } from 'react-redux';
import Dropbox from 'dropbox';
import { format } from 'date-fns';
import Header from '../components/Header';
import { getTotalPoint } from '../selectors/app';
import { resetEvents } from '../actions/event';
import { postDailyReportRequest } from '../actions/paper';

// FIXME: Move to better place
const dropbox = new Dropbox({
  clientId: process.env.REACT_APP_DROPBOX_CLIENT_ID,
});
const authUrl = dropbox.getAuthenticationUrl('http://localhost:3000/auth');

function selectAccessToken(state) {
  return state.auth.accessToken;
}

function selectContents({ events, items, missions }) {
  return { events, items, missions };
}

function mapStateToProps(state) {
  return {
    totalPoint: getTotalPoint(state),
    accessToken: selectAccessToken(state),
    contents: selectContents(state),
    authUrl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onEventsReset: (...args) => dispatch(resetEvents(...args)),
    onPostReport: (accessToken, contents) => {
      const path = `/${format(new Date(), 'YYYY-MM-DD')}.json`;
      const client = new Dropbox({ accessToken });

      dispatch(
        postDailyReportRequest(client, path, JSON.stringify(contents, null, 2)),
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
