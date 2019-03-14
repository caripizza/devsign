import { UPDATE_TEXTAREA } from '../actions/textarea';
import { TWEET_CREATE } from '../actions/tweets';
// import shortid from 'shortid';
// import profilePic from '../../assets/circle_sm.png';

const initialState = {
  _id: null,
  text: '',
  user: {
    handle: null,
    profileImg: ''
  }
};

export default function reducer(
  state = initialState,
  { type, payload }
) {
  switch(type) {
    case UPDATE_TEXTAREA:
      return {
        ...state,
        _id: initialState._id,
        text: payload,
        user: {
          handle: initialState.user.handle,
          profileImg: initialState.user.profileImg
        }
      };
    case TWEET_CREATE:
      return initialState;
    default:
      return state;
  }
}
