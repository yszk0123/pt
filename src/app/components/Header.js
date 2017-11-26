import * as React from 'react';

export default function Header({ totalPoint, onEventsReset }) {
  return (
    <div>
      <div className="pa2">{totalPoint}</div>
      <a
        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-red"
        onClick={onEventsReset}
      >
        Reset
      </a>
    </div>
  );
}
