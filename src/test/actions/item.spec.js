import { buyItem, editItem, removeItem } from '../../app/actions/item';

describe('item', () => {
  it('should return BUY_ITEM action', () => {
    const id = 'item-id';
    const point = 10;
    expect(buyItem(id, point)).toEqual({
      type: 'BUY_ITEM',
      payload: { id, point },
    });
  });

  it('should return EDIT_ITEM action', () => {
    const id = 'item-id';
    const name = 'item-name';
    const point = 'item-point';
    expect(editItem(id, name, point)).toEqual({
      type: 'EDIT_ITEM',
      payload: { id, name, point },
    });
  });

  it('should return REMOVE_ITEM action', () => {
    const id = 'item-id';
    expect(removeItem(id)).toEqual({
      type: 'REMOVE_ITEM',
      payload: { id },
    });
  });
});
