import reducer from './tweets';
import { FETCH_TWEETS } from '../actions/tweets';

describe('tweets reducer', () => {
  it('handles a fetch tweets action', () => {
    const state = {
      tweets: []
    };
    const fetchedState = reducer(state, {
      type: FETCH_TWEETS,
      payload: [
        {
          _id: '4890',
          text: 'Lorem ipsum dolor sit amet, uioua adipiscing elit, sed do eiusmod. #asdfasdf #tehklj',
          user: {
            handle: 'Aasdfa',
            profileImg: 'profilePic'
          }
        },
        {
          _id: '5901',
          text: 'Ut enim ad minim veniam, @jlakdsf quis nostrud #lkjasfd',
          user: {
            handle: 'Tio',
            profileImg: 'profilePic'
          }
        }
      ]
    });
    expect(fetchedState).toEqual({
      tweets: [
        {
          _id: '4890',
          text: 'Lorem ipsum dolor sit amet, uioua adipiscing elit, sed do eiusmod. #asdfasdf #tehklj',
          user: {
            handle: 'Aasdfa',
            profileImg: 'profilePic'
          }
        },
        {
          _id: '5901',
          text: 'Ut enim ad minim veniam, @jlakdsf quis nostrud #lkjasfd',
          user: {
            handle: 'Tio',
            profileImg: 'profilePic'
          }
        }
      ],
      loading: false
    });
  });
});

