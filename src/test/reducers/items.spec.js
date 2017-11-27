import reducer from '../../app/reducers/items';
import { editItem, removeItem, buyItem } from '../../app/actions/item';

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
        totalPoint: 0,
      },
    };
    expect(reducer(state, editItem(id, newName, newPoint))).toEqual({
      [id]: {
        id,
        name: newName,
        point: newPoint,
        totalPoint: 0,
      },
    });
  });

  it('should handle REMOVE_ITEM', () => {
    const state = {
      '1': {
        id: '1',
        name: 'item-1',
        point: 10,
        totalPoint: 0,
      },
      '2': {
        id: '2',
        name: 'item-2',
        point: 20,
        totalPoint: 0,
      },
    };
    expect(reducer(state, removeItem('2'))).toEqual({
      '1': {
        id: '1',
        name: 'item-1',
        point: 10,
        totalPoint: 0,
      },
    });
  });

  it('should handle BUY_ITEM', () => {
    const state = {
      '1': {
        id: '1',
        name: 'item-name',
        point: 10,
        totalPoint: 0,
      },
    };
    expect(reducer(state, buyItem('1', 3))).toEqual({
      '1': {
        id: '1',
        name: 'item-name',
        point: 10,
        totalPoint: 3,
      },
    });
  });
});
