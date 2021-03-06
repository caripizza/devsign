import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';

describe('Search', () => {
  it('matches a snapshot', () => {
    const component = renderer.create(
      <Search />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
