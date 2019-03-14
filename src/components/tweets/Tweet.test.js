import React from 'react';
import renderer from 'react-test-renderer';
import Tweet from './Tweet';

describe('Tweet', () => {
  it('matches a snapshot', () => {
    const tweet =     {
      _id: '4890',
      text: 'Lorem ipsum dolor sit amet, uioua adipiscing elit, sed do eiusmod. #asdfasdf #tehklj',
      user: {
        handle: 'Aasdfa',
        profileImg: '../../assets/circle_sm.png'
      }
    };
    const component = renderer.create(
      <Tweet tweet={tweet}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
