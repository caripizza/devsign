import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import { ROUTES } from '../../routes/routes';

export default class App extends Component {
  render() {
    return (
      <Router>
        < >
          <Header />
          <Switch>
            <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
            <Route exact component={ROUTES.NEW_TWEET.Component} path={ROUTES.NEW_TWEET.path} />
            <Route exact component={ROUTES.PROFILE.Component} path={ROUTES.PROFILE.path} />
            <Redirect to={ROUTES.HOME.path} />
          </Switch>
        </>
      </Router>
    );
  }
}
