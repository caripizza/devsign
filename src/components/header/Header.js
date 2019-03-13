import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
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
          <li><Link to="/">🏠</Link></li>
          <li>🔍</li>
          <li>🔔</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
