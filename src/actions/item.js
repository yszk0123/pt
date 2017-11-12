import { createActions } from 'redux-actions';

const { buyItem, editItem } = createActions({
  BUY_ITEM: (id, point) => ({ id, point }),
  EDIT_ITEM: (id, name, point) => ({ id, name, point }),
});

export { buyItem, editItem };
