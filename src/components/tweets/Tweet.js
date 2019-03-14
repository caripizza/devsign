import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ tweet }) => {
  const { text, user } = tweet;
  return (
    < >
      <img src={user.profileImg} 
        style={{ float: 'left', padding: '.1em .5em 0 0' }}
        alt="profile-pic"
      />
      <h3 style={{ display: 'inline' }}>
        {user.handle}
      </h3>
      <span style={{ display: 'block' }}>
        {text}
      </span>
    </>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default Tweet;
