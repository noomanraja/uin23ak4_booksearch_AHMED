import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.first_publish_year}</p>
      <p>{book.author_name}</p>
      <a href={`https://www.amazon.com/s?k=${book.isbn ? book.isbn[0] : book.key}`}>Amazon Link</a>
      <Link to={`/book/${book.key}`}>Mer om boka</Link>
      {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />}
    </div>
  );
};

export default BookCard;
