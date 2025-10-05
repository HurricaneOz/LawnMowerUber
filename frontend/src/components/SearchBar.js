import React, { useState } from 'react';
import './SearchBar.css'; 

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm.trim());
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Find Services"
        value={searchTerm}
        onChange={handleInputChange}
        aria-label="Search"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}