import {
  FETCH_TWEETS,
  FETCH_TWEETS_PENDING,
  TWEET_CREATE
} from '../actions/tweets';

const initialState = {
  tweets: [],
  loading: false
};

export default function reducer(
  state = initialState,
  { type, payload }
) {
  switch(type) {
    case FETCH_TWEETS:
      return {
        ...state,
        tweets: payload,
        loading: false
      };
    case FETCH_TWEETS_PENDING:
      return {
        ...state,
        loading: true
      };
    case TWEET_CREATE:
      return {
        tweets: [...state.tweets, payload]
      };
    default:
      return state;
  }
}
