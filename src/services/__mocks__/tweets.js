export const getTweets = () => {
  return Promise.resolve([
    {
      _id: '4890',
      text: 'Lorem ipsum dolor sit amet, uioua adipiscing elit, sed do eiusmod. #asdfasdf #tehklj',
      user: {
        handle: 'Aasdfa',
        profileImg: 'profilePic'
      }
    },
    {
      _id: '5901',
      text: 'Ut enim ad minim veniam, @jlakdsf quis nostrud #lkjasfd',
      user: {
        handle: 'Tio',
        profileImg: 'profilePic'
      }
    }
  ]);
};
