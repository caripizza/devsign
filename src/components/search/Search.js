import React from 'react';

const Search = () => {
  return (
    < >
      <label htmlFor="search">
        Search Twitter: <br/>
        <input name="search" placeholder="Search hashtags, users, tweets"
          style={{ width: '23em' }}
        />
      </label>
      <button>Search</button>
    </>
  );
};

export default Search;
