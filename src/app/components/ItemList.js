import * as React from 'react';
import { generate } from 'shortid';
import Input from './Input';

export default function ItemList({ items, onEdit, onBuy, onRemove }) {
  return (
    <div>
      <h2>Items</h2>
      <ul className="list pa2">
        {items.map(item => (
          <li key={item.id} className="flex-wrap items-center">
            <Input
              className="w-auto mr1"
              type="text"
              value={item.name || ''}
              onChange={value => onEdit(item.id, value, item.point)}
            />
            <Input
              className="w-25 mr1"
              type="number"
              value={item.point || 0}
              onChange={value =>
                onEdit(item.id, item.name, parseInt(value, 10))
              }
            />
            <a
              className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black mr1"
              onClick={() => onBuy(item.id, item.point)}
            >
              Buy
            </a>
            <a
              className="f6 link dim br3 ph3 pv2 mb2 dib white bg-red"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </a>
          </li>
        ))}
      </ul>
      <a
        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black"
        onClick={() => onEdit(generate(), '', 0)}
      >
        Add
      </a>
    </div>
  );
}
