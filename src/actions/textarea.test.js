import {
  UPDATE_TEXTAREA,
  updateTextarea
} from './textarea';

describe('textarea actions', () => {
  it('has update textarea action', () => {
    const action = updateTextarea('test');
    expect(action).toEqual({
      type: UPDATE_TEXTAREA,
      payload: 'test'
    });
  });
});
