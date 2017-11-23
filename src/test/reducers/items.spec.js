import reducer from '../../app/reducers/items';
import { editItem } from '../../app/actions/item';

describe('items', () => {
  it('should handle EDIT_ITEM', () => {
    const id = 'item-id';
    const newName = 'item-new-name';
    const newPoint = 20;
    const state = {
      [id]: {
        id,
        name: 'item-name',
        point: 10,
      },
    };
    expect(reducer(state, editItem(id, newName, newPoint))).toEqual({
      [id]: {
        id,
        name: newName,
        point: newPoint,
      },
    });
  });
});
