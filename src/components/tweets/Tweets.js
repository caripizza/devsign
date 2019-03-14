import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

const Tweets = ({ tweets }) => {
  const listOfTweets = tweets.map(tweet => {
    return (
      <article key={tweet._id}
        style={{ padding: '.8em' }}
      >
        <Tweet tweet={tweet} />
      </article>
    );
  });

  return (
    <section id="all-tweets">
      {listOfTweets}
    </section>
  );
};

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Tweets;
