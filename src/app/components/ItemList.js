import * as React from 'react';
import Input from './Input';

export default function ItemList({ items, onItemEdit, onBuy }) {
  return (
    <div>
      <h2>Items</h2>
      <ul className="list pa2">
        {items.map(item => (
          <li key={item.id} className="flex items-center">
            <Input
              className="w-auto mr1"
              type="text"
              value={item.name || ''}
              onChange={value => onItemEdit(item.id, value, item.point)}
            />
            <Input
              className="w-25 mr1"
              type="number"
              value={item.point || ''}
              onChange={value =>
                onItemEdit(item.id, item.name, parseInt(value, 10))
              }
            />
            <a
              className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black"
              onClick={() => onBuy(item.id, item.point)}
            >
              Buy
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
