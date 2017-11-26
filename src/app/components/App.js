import * as React from 'react';
import Body from './Body';

export default function App({ Header, ItemList, MissionList }) {
  return (
    <div>
      <Header />
      <Body>
        <ItemList />
        <MissionList />
      </Body>
    </div>
  );
}
