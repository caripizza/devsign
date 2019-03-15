import { combineReducers } from 'redux';
import tweets from './tweets';
import textarea from './textarea';
import session from './session';

export default combineReducers({
  session,
  tweets,
  textarea
});
