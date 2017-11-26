import { connect } from 'react-redux';
import App from '../components/App';
import Header from './Header';
import ItemList from './ItemList';
import MissionList from './MissionList';

function mapStateToProps(state) {
  return { Header, ItemList, MissionList };
}

export default connect(mapStateToProps)(App);
