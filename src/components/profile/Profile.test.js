import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

describe('Profile', () => {
  it('matches a snapshot', () => {
    const component = renderer.create(
      <Profile />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
