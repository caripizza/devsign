import { createStore, applyMiddleware } from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import { fetchTweets, FETCH_TWEETS } from './tweets';

jest.mock('../services/tweets');

describe('tweets actions', () => {
  it(`fetchTweets creates an action where the payload 
      is a list of tweets derived from a promise`, done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(promiseMiddleware)
    );
    store.dispatch(fetchTweets());
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'FETCH_TWEETS_PENDING'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
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
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'FETCH_TWEETS_FULFILLED'
      });
      done();
    }, 500);
  });
});
