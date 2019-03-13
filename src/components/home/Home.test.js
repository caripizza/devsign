import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Home/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
