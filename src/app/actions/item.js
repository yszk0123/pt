import { createActions } from 'redux-actions';

const { buyItem, editItem, removeItem } = createActions({
  BUY_ITEM: (id, point) => ({ id, point }),
  EDIT_ITEM: (id, name, point) => ({ id, name, point }),
  REMOVE_ITEM: id => ({ id }),
});

export { buyItem, editItem, removeItem };
