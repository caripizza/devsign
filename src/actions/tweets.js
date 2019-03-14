import { createAction } from 'promise-middleware-redux';
import { getTweets } from '../services/tweets';

export const [
  fetchTweets,
  FETCH_TWEETS,
  FETCH_TWEETS_LOADING
] = createAction('FETCH_TWEETS', getTweets);
