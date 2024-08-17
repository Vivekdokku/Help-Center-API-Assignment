import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <h2 id="heading-h2">How can we help?</h2>
      <input 
        type="text" 
        placeholder="Search" 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)} 
      />
    </div>
  );
};

export default SearchBar;
