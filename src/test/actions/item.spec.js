import { buyItem, editItem } from '../../actions/item';

describe('item', () => {
  it('should return BUY_ITEM action', () => {
    const id = 'item-id';
    expect(buyItem(id)).toEqual({ type: 'BUY_ITEM', payload: { id } });
  });

  it('should return EDIT_ITEM action', () => {
    const id = 'item-id';
    expect(editItem(id)).toEqual({ type: 'EDIT_ITEM', payload: { id } });
  });
});
