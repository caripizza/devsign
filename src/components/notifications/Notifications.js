import React from 'react';

const Notifications = () => {
  return (
    < >
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}>
        <li>
          💛 Curabitur liked your tweet
        </li>
        <li>
          💛 Ullamcorper liked your tweet
        </li>
      </ul>
    </>
  );
};

export default Notifications;
