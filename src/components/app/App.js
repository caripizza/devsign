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
            <Route exact component={ROUTES.LANDING.Component} path={ROUTES.LANDING.path} />
            <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
            <Route exact component={ROUTES.NEW_TWEET.Component} path={ROUTES.NEW_TWEET.path} />
            <Route exact component={ROUTES.PROFILE.Component} path={ROUTES.PROFILE.path} />
            <Route exact component={ROUTES.SEARCH.Component} path={ROUTES.SEARCH.path} />
            <Route exact component={ROUTES.NOTIFICATIONS.Component} path={ROUTES.NOTIFICATIONS.path} />
            <Route exact component={ROUTES.CALLBACK.Component} path={ROUTES.CALLBACK.path} />
            <Redirect to={ROUTES.HOME.path} />
          </Switch>
        </>
      </Router>
    );
  }
}
