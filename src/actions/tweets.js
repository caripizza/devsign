import { createAction } from 'promise-middleware-redux';
import { getTweets } from '../services/tweets';

export const TWEET_CREATE = 'TWEET_CREATE';
export const addTweet = tweet => ({
  type: TWEET_CREATE,
  pendingType: FETCH_TWEETS_LOADING,
  payload: tweet
});

export const [
  fetchTweets,
  FETCH_TWEETS,
  FETCH_TWEETS_LOADING
] = createAction('FETCH_TWEETS', getTweets);
