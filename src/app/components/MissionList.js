import * as React from 'react';
import Input from './Input';

export default function MissionList({ missions, onEdit, onComplete }) {
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
              value={mission.point || ''}
              onChange={value =>
                onEdit(mission.id, mission.name, parseInt(value, 10))
              }
            />
            <a
              className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black"
              onClick={() => onComplete(mission.id, mission.point)}
            >
              Complete
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
