import { combineReducers } from 'redux';
import tweets from './tweets';
import textarea from './textarea';

export default combineReducers({
  tweets,
  textarea
});
