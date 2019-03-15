import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';

const Header = () => {
  return (
    <header>
      <nav style={{ background: 'yellow' }}>
        <ul style={{ 
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 0,
          marginTop: 0
        }}>
          <li><Link to="/new">➕</Link></li>
          <li><button onClick={logout}>Log out</button></li>
          <li><Link to="/profile">🙂</Link></li>
        </ul>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-around',
          padding: 0
        }}>
          <li><Link to="/">🏠</Link></li>
          <li><Link to="/search">🔍</Link></li>
          <li><Link to="/notifications">🔔</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
