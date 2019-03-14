import React from 'react';
import renderer from 'react-test-renderer';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('matches a snapshot', () => {
    const component = renderer.create(
      <Notifications />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
