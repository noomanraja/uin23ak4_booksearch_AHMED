import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import { getBooks } from './api';
import './styles/App.Scss';

const App = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      const books = await getBooks('James Bond');
      setBooks(books);
      setIsLoading(false);
    };

    fetchBooks();
  }, []);

  const handleSearch = async (query) => {
    setIsLoading(true);
    const books = await getBooks(query);
    setBooks(books);
    setIsLoading(false);
  };

  return (
    <Router>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="/" element={<BookList books={books} />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
