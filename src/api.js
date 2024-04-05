export const getBooks = async (query) => {
  const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
  const data = await response.json();
  return data.docs;
};

export const getBookDetails = async (id) => {
  const response = await fetch(`https://openlibrary.org/api/books?bibkeys=OLID:${id}&format=json`);
  const data = await response.json();
  return data[`OLID:${id}`];
};
