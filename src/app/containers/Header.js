import { connect } from 'react-redux';
import Header from '../components/Header';
import { getTotalPoint } from '../selectors/app';
import { resetEvents } from '../actions/event';

function mapStateToProps(state) {
  return { totalPoint: getTotalPoint(state) };
}

export default connect(mapStateToProps, {
  onEventsReset: resetEvents,
})(Header);
