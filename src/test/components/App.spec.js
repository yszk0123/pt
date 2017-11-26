import * as React from 'react';
import { mount } from 'enzyme';
import App from '../../app/components/App';

const Dummy = () => null;

describe('App', () => {
  it('should render without crashing', () => {
    mount(<App Header={Dummy} ItemList={Dummy} MissionList={Dummy} />);
  });
});
