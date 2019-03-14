import React from 'react';
import renderer from 'react-test-renderer';
import Tweets from './Tweets';

describe('Tweets', () => {
  it('matches a snapshot', () => {
    const tweets = [{
      _id: '4890',
      text: 'Lorem ipsum dolor sit amet, uioua adipiscing elit, sed do eiusmod. #asdfasdf #tehklj',
      user: {
        handle: 'Aasdfa',
        profileImg: '../../assets/circle_sm.png'
      }
    }, 
    {
      _id: '5901',
      text: 'Ut enim ad minim veniam, @jlakdsf quis nostrud #lkjasfd',
      user: {
        handle: 'Tio',
        profileImg: '../../assets/circle_sm.png'
      }
    }];
    const component = renderer.create(
      <Tweets tweets={tweets}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
