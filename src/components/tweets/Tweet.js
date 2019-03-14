import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tweet.css';

const Tweet = ({ tweet }) => {
  const { text, user } = tweet;
  return (
    < >
      <img src={user.profileImg} 
        className={styles.img}
        alt="profile-pic"
      />
      <h3 className={styles.h3}>
        {user.handle}
      </h3>
      <span className={styles.span}>
        {text}
      </span>
    </>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default Tweet;
