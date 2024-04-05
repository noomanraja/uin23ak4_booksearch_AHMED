import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    if (inputValue.length >= 3) {
      onSearch(inputValue);
    } else {
      alert('Vennligst skriv inn minst tre tegn for å søke.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a book"
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearchClick}>Søk</button>
    </div>
  );
};

export default SearchBar;

