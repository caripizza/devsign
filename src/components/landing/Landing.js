import React from 'react';
import { login } from '../../services/auth';

const Landing = () => {
  return (
    < >
      <main>
        <h1>Welcome to Devsign Twitter Clone!</h1>
        <button onClick={login}>Log in</button>
      </main>
    </>
  );
};

export default Landing;
