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
    <div className="pb3">
      <h2>Missions</h2>
      <ul className="list pa2">
        {missions.map(mission => (
          <li key={mission.id} className="flex items-center">
            <Input
              className="w-30 w-50-ns mr1"
              type="text"
              value={mission.name || ''}
              onChange={value => onEdit(mission.id, value, mission.point)}
            />
            <Input
              className="w-20 w-25-ns mr1"
              type="number"
              value={mission.point || 0}
              onChange={value =>
                onEdit(mission.id, mission.name, parseInt(value, 10))
              }
            />
            <div className="w-50 w-25-ns tr">
              <a
                className="f6 link dim br2 br--left ph3 pv2 dib white bg-black"
                onClick={() => onComplete(mission.id, mission.point)}
              >
                Complete
              </a>
              <a
                className="f6 link dim br2 br--right ph3 pv2 dib white bg-red"
                onClick={() => onRemove(mission.id)}
              >
                <i className="fa fa-trash" />
              </a>
              <span className="f6 gray">{mission.totalPoint || 0}</span>
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
