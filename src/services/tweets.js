import profilePic from '../../assets/circle_sm.png';

export const getTweets = () => {
  return Promise.resolve([
    {
      _id: '4890',
      text: 'Lorem ipsum dolor sit amet, uioua adipiscing elit, sed do eiusmod. #asdfasdf #tehklj',
      user: {
        handle: 'Aasdfa',
        profileImg: profilePic
      }
    },
    {
      _id: '5901',
      text: 'Ut enim ad minim veniam, @jlakdsf quis nostrud #lkjasfd',
      user: {
        handle: 'Tio',
        profileImg: profilePic
      }
    },
    {
      _id: '21511',
      text: 'Duis aute irure dolor in @reprehenderit in voluptate velit esse #cillum #lkjlkjlkj',
      user: {
        handle: 'SssSss',
        profileImg: profilePic
      }
    },
    {
      _id: '29513',
      text: 'Excepteur sint occaecat cupidatat, 90 - 69 qui officia deserunt @asdf #asdfasdf',
      user: {
        handle: 'Zzzelkj',
        profileImg: profilePic
      }
    },
    {
      _id: '22319',
      text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore jklej oiugj!',
      user: {
        handle: 'Ulkj78',
        profileImg: profilePic
      }
    }
  ]);
};
