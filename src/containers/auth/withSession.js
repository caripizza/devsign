import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../services/auth';
import { getToken } from '../../selectors/session';
import preloader from '../../../assets/preloader.gif';

export const withSession = Component => {
  class WithSession extends React.PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired
    };

    componentDidMount() {
      if(!this.props.token) {
        login();
      }
    }

    render() {
      if(!this.props.token) return <img src={preloader} alt="preloader"/>;

      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    token: getToken(state)
  });

  return connect(
    mapStateToProps
  )(WithSession);
};
