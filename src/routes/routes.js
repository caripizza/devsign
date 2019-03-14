import Home from '../containers/home/Home';
import NewTweetContainer from '../containers/tweets/NewTweetContainer';
import Profile from '../components/profile/Profile';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  NEW_TWEET: {
    path: '/new',
    Component: NewTweetContainer,
    linkTo: () => '/new'
  },
  PROFILE: {
    path: '/profile',
    Component: Profile,
    linkTo: () => '/profile'
  }
};

/*
search (form with input)
notifications (ul with lis)
*/
