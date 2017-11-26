import * as React from 'react';
import Input from './Input';
import { generate } from 'shortid';

export default function MissionList({
  missions,
  onEdit,
  onComplete,
  onRemove,
}) {
  return (
    <div>
      <h2>Missions</h2>
      <ul className="list pa2">
        {missions.map(mission => (
          <li key={mission.id} className="flex items-center">
            <Input
              className="w-auto mr1"
              type="text"
              value={mission.name || ''}
              onChange={value => onEdit(mission.id, value, mission.point)}
            />
            <Input
              className="w-25 mr1"
              type="number"
              value={mission.point || 0}
              onChange={value =>
                onEdit(mission.id, mission.name, parseInt(value, 10))
              }
            />
            <a
              className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black mr1"
              onClick={() => onComplete(mission.id, mission.point)}
            >
              Complete
            </a>
            <a
              className="f6 link dim br3 ph3 pv2 mb2 dib white bg-red"
              onClick={() => onRemove(mission.id)}
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
