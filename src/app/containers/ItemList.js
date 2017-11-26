import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { editItem, buyItem } from '../actions/item';

function selectItems(state) {
  return Object.keys(state.items).map(key => state.items[key]);
}

function mapStateToProps(state) {
  return { items: selectItems(state) };
}

export default connect(mapStateToProps, {
  onItemEdit: editItem,
  onBuy: buyItem,
})(ItemList);
