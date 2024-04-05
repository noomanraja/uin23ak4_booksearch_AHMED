import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../api';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const book = await getBookDetails(id);
      setBook(book);
    };

    fetchBookDetails();
  }, [id]);

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>{book.first_publish_year}</p>
          <p>{book.author_name}</p>
          {book.cover && <img src={book.cover.medium} alt={book.title} />}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;


