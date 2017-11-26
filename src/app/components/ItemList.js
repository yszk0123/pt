import * as React from 'react';
import { generate } from 'shortid';
import Input from './Input';

export default function ItemList({ items, onEdit, onBuy, onRemove }) {
  return (
    <div className="pb3">
      <h2>Items</h2>
      <ul className="list pa2">
        {items.map(item => (
          <li key={item.id} className="flex items-center">
            <Input
              className="w-30 w-50-ns mr1"
              type="text"
              value={item.name || ''}
              onChange={value => onEdit(item.id, value, item.point)}
            />
            <Input
              className="w-20 w-25-ns mr1"
              type="number"
              value={item.point || 0}
              onChange={value =>
                onEdit(item.id, item.name, parseInt(value, 10))
              }
            />
            <div className="w-50 w-25-ns tr">
              <a
                className="f6 link dim br2 br--left ph3 pv2 dib white bg-black"
                onClick={() => onBuy(item.id, item.point)}
              >
                Buy
              </a>
              <a
                className="f6 link dim br2 br--right ph3 pv2 dib white bg-red"
                onClick={() => onRemove(item.id)}
              >
                <i className="fa fa-trash" />
              </a>
            </div>
          </li>
        ))}
      </ul>
      <a
        className="f6 link dim br2 ph3 pv2 dib white bg-black"
        onClick={() => onEdit(generate(), '', 0)}
      >
        Add
      </a>
    </div>
  );
}
