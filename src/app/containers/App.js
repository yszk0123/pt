import { connect } from 'react-redux';
import App from '../components/App';
import Header from './Header';
import ItemList from './ItemList';

function mapStateToProps(state) {
  return { Header, ItemList };
}

export default connect(mapStateToProps)(App);
