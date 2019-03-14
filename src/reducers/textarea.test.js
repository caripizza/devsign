import reducer from './textarea';
import { UPDATE_TEXTAREA } from '../actions/textarea';

describe('textarea reducer', () => {
  it('handles an update textarea action', () => {
    const state = {
      _id: null,
      text: '',
      user: {
        handle: null,
        profileImg: ''
      }
    };
    const updatedState = reducer(state, {
      type: UPDATE_TEXTAREA,
      payload: 'some text'
    });
    expect(updatedState).toEqual({
      _id: null,
      text: 'some text',
      user: {
        handle: null,
        profileImg: ''
      }
    });
  });
});

