import { getTweets } from './tweets';

describe ('tweets selectors', () => {
  it('can get a list of tweets', () => {
    const state = {
      tweets: {
        tweets: {
          0: {
            _id: '4890',
            text: 'Lorem ipsum dolor sit amet, uioua adipiscing elit, sed do eiusmod. #asdfasdf #tehklj',
            user: {
              handle: 'Aasdfa',
              profileImg: 'profilePic'
            }
          },
          1: {
            _id: '5901',
            text: 'Ut enim ad minim veniam, @jlakdsf quis nostrud #lkjasfd',
            user: {
              handle: 'Tio',
              profileImg: 'profilePic'
            }
          }
        }
      }
    };
    const retrievedState = getTweets(state);
    expect(retrievedState).toEqual({
      '0': {
        _id: '4890',
        text: 'Lorem ipsum dolor sit amet, uioua adipiscing elit, sed do eiusmod. #asdfasdf #tehklj',
        user: {
          handle: 'Aasdfa',
          profileImg: 'profilePic'
        }
      },
      '1': {
        _id: '5901',
        text: 'Ut enim ad minim veniam, @jlakdsf quis nostrud #lkjasfd',
        user: {
          handle: 'Tio',
          profileImg: 'profilePic'
        }
      }
    });
  });
});
