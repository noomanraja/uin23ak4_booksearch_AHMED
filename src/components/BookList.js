import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div>
      {books.length > 0 ? (
        books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default BookList;
