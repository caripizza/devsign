import Home from '../containers/home/Home';
import NewTweetContainer from '../containers/tweets/NewTweetContainer';
import Profile from '../components/profile/Profile';
import Search from '../components/search/Search';
import Notifications from '../components/notifications/Notifications';
import Callback from '../containers/auth/Callback';
import { withSession } from '../containers/auth/withSession';
import Landing from '../components/landing/Landing';

export const ROUTES = {
  LANDING: {
    path: '/welcome',
    Component: Landing,
    linkTo: () => '/welcome'
  },
  HOME: {
    path: '/',
    Component: withSession(Home),
    linkTo: () => '/'
  },
  NEW_TWEET: {
    path: '/new',
    Component: withSession(NewTweetContainer),
    linkTo: () => '/new'
  },
  PROFILE: {
    path: '/profile',
    Component: withSession(Profile),
    linkTo: () => '/profile'
  },
  SEARCH: {
    path: '/search',
    Component: withSession(Search),
    linkTo: () => '/search'
  },
  NOTIFICATIONS: {
    path: '/notifications',
    Component: withSession(Notifications),
    linkTo: () => '/notifications'
  },
  CALLBACK: {
    path: '/callback',
    Component: Callback,
    linkTo: () => '/callback'
  }
};
