import * as React from 'react';

export default function App({ Header, ItemList, MissionList }) {
  return (
    <div className="pa2">
      <Header />
      <ItemList />
      <MissionList />
    </div>
  );
}
