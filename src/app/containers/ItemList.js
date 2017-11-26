import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { editItem, buyItem, removeItem } from '../actions/item';

function selectItems(state) {
  return Object.keys(state.items).map(key => state.items[key]);
}

function mapStateToProps(state) {
  return { items: selectItems(state) };
}

export default connect(mapStateToProps, {
  onEdit: editItem,
  onBuy: buyItem,
  onRemove: removeItem,
})(ItemList);
