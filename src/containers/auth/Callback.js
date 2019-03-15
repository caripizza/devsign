import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSession } from '../../actions/session';
import { getToken } from '../../selectors/session';
import { ROUTES } from '../../routes/routes';
import preloader from '../../../assets/preloader.gif';

class Callback extends React.PureComponent {
  static propTypes = {
    token: PropTypes.string.isRequired,
    handleAuth: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    if(this.props.token) {
      return <Redirect to={ROUTES.HOME.linkTo()} />;
    }
    return <img src={preloader} alt="preloader"/>;
  }
}

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  handleAuth() {
    dispatch(setSession());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
