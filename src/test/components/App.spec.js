import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../../app/components/App';

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.containsMatchingElement('Hello, world!')).toBe(true);
  });
});
