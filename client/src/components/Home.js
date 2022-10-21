import React from "react";
import BookDetails from "./BookDetails";

const Home = () => {
  const [books, setBooks] = React.useState(null);

  React.useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();

      if (response.ok) {
        setBooks(json);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="home">
      <div className="books">
        {books &&
          books.map((book) => <BookDetails book={book} key={book._id} />)}
      </div>
    </div>
  );
};

export default Home;
