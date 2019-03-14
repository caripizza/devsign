import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTextarea } from '../../actions/textarea';
import { addTweet } from '../../actions/tweets';
import { getTweetCreateTextarea } from '../../selectors/textarea';
// import { getTweets } from '../../selectors/tweets';
// import Tweets from '../../components/tweets/Tweets';
import NewTweet from '../../components/tweets/NewTweet';
import shortid from 'shortid';
import profilePic from '../../../assets/circle_sm.png';

const NewTweetContainer = ({
  text,
  // tweets,
  onChange,
  onSubmit
}) => {
  return (
    <>
      <NewTweet
        text={text}
        onChange={onChange}
        onSubmit={onSubmit.bind(null, text)} />
      {/* <Tweets tweets={tweets} /> */}
    </>
  );
};

NewTweetContainer.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  // tweets: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  text: getTweetCreateTextarea(state),
  // tweets: getTweets(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      text: updateTextarea
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  onSubmit(text, event) {
    event.preventDefault();
    dispatch(addTweet({
      _id: shortid.generate(),
      text,
      user: {
        handle: shortid.generate(),
        profileImg: profilePic
      }
    }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTweetContainer);
