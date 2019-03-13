import React from 'react';

const Home = () => {
  return (
    < >

    {/* MOBILE MOCKUP */}
      <header>
        <nav style={{ background: 'yellow' }}>
          <ul style={{ 
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0
          }}>
            <li>➕</li>
            <li>🙂</li>
          </ul>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            padding: 0
          }}>
            <li>🏠</li>
            <li>🔍</li>
            <li>🔔</li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="all-tweets">
          <article style={{ padding: '.8em' }}>
            <img src='../assets/circle_sm.png' 
              style={{ float: 'left', padding: '.1em .5em 0 0' }}
              alt="profile-pic"
            />
            <h3 style={{ display: 'inline' }}>Aasdfa</h3>
            <br/>
            <span>
            Lorem ipsum dolor sit amet, uioua adipiscing elit, sed do eiusmod. #asdfasdf #tehklj
            </span>
          </article>
          <article style={{ padding: '.8em' }}>
            <img src='../assets/circle_sm.png' 
              style={{ float: 'left', padding: '.1em .5em 0 0' }}
              alt="profile-pic"
            />
            <h3 style={{ display: 'inline' }}>Tio</h3>
            <br/>
            <span>
            Ut enim ad minim veniam, @jlakdsf quis nostrud #lkjasfd
            </span>
          </article>
          <article style={{ padding: '.8em' }}>
            <img src='../assets/circle_sm.png' 
              style={{ float: 'left', padding: '.1em .5em 0 0' }}
              alt="profile-pic"
            />
            <h3 style={{ display: 'inline' }}>SssSss</h3>
            <br/>
            <span>
            Duis aute irure dolor in @reprehenderit in voluptate velit esse #cillum #lkjlkjlkj
            </span>
          </article>
          <article style={{ padding: '.8em' }}>
            <img src='../assets/circle_sm.png' 
              style={{ float: 'left', padding: '.1em .5em 0 0' }}
              alt="profile-pic"
            />
            <h3 style={{ display: 'inline' }}>Zzzelkj</h3>
            <br/>
            <span>
            Excepteur sint occaecat cupidatat, 90 - 69 qui officia deserunt @asdf #asdfasdf
            </span>
          </article>
          <article style={{ padding: '.8em' }}>
            <img src='../assets/circle_sm.png' 
              style={{ float: 'left', padding: '.1em .5em 0 0' }}
              alt="profile-pic"
            />
            <h3 style={{ display: 'inline' }}>Ulkj78</h3>
            <br/>
            <span>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore jklej oiugj!
            </span>
          </article>
        </section>
      </main>

    </>
  );
};

export default Home;
