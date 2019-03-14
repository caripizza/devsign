import React from 'react';
import styles from './Profile.css';
import profilePic from '../../../assets/circle.png';

const Profile = () => {
  return (
    < >
      <section style={{ width: '49%', float: 'left' }}>
        <img className={styles.slide} src={profilePic} alt="profile-pic"/>
        <h2>Handle</h2>
        <p>Curabitur ligula augue, ullamcorper at facilisis in, viverra a nibh. Nulla finibus orci eu odio viverra, ac molestie magna consequat. Sed varius at justo ut imperdiet. Nulla porttitor facilisis nunc suscipit consequat. Aenean nisl tortor, porttitor non hendrerit quis, eleifend vitae augue. Duis dictum sollicitudin fermentum. Morbi ultrices lacus ac interdum consequat. Sed sit amet lacus vel sapien tempus congue feugiat id lectus. Vestibulum nec odio eget turpis ultrices convallis at quis nunc. In eu ipsum a dolor eleifend aliquet vel et lacus. In euismod odio nisi, sed elementum orci volutpat id. Vivamus pretium elit at dui interdum faucibus.</p>
      </section>
      <section style={{ width: '49%', float: 'right' }}>
        <article style={{ padding: '.8em' }}>
          <h3 style={{ display: 'inline' }}>Aasdfa</h3>
          <br/>
          <span>
            Lorem ipsum dolor sit amet, uioua adipiscing elit, sed do eiusmod. #asdfasdf #tehklj
          </span>
        </article>
        <article style={{ padding: '.8em' }}>
          <h3 style={{ display: 'inline' }}>Tio</h3>
          <br/>
          <span>
            Ut enim ad minim veniam, @jlakdsf quis nostrud #lkjasfd
          </span>
        </article>
        <article style={{ padding: '.8em' }}>
          <h3 style={{ display: 'inline' }}>SssSss</h3>
          <br/>
          <span>
            Duis aute irure dolor in @reprehenderit in voluptate velit esse #cillum #lkjlkjlkj
          </span>
        </article>
        <article style={{ padding: '.8em' }}>
          <h3 style={{ display: 'inline' }}>Zzzelkj</h3>
          <br/>
          <span>
            Excepteur sint occaecat cupidatat, 90 - 69 qui officia deserunt @asdf #asdfasdf
          </span>
        </article>
        <article style={{ padding: '.8em' }}>
          <h3 style={{ display: 'inline' }}>Ulkj78</h3>
          <br/>
          <span>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore jklej oiugj!
          </span>
        </article>
      </section>
    </>
  );
};

export default Profile;
