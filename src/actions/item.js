import { createActions } from 'redux-actions';

const { buyItem, editItem } = createActions({
  BUY_ITEM: id => ({ id }),
  EDIT_ITEM: id => ({ id }),
});

export { buyItem, editItem };
