import React from 'react';
import PropTypes from 'prop-types';

const NewTweet = ({ text, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Say what you will:<br/>
        <textarea name="text" value={text} onChange={onChange} />
      </label>
      <button>Post Tweet</button>
    </form>
  );
};

NewTweet.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default NewTweet;
