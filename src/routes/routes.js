import Home from '../containers/home/Home';
import NewTweetContainer from '../containers/tweets/NewTweetContainer';

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
  }
};

/*
signin/signup
home (all tweets)
search (form with input)
notifications (ul with lis)
profile page (image banner)
new tweet (form with input)
*/
