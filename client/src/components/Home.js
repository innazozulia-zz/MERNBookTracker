import React from "react";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import { useAuthContext } from "../hooks/useAuthContext";
import { useBooksContext } from "../hooks/useBooksContext";

const Home = () => {
  // const [books, setBooks] = React.useState(null);
  const { books, dispatch } = useBooksContext();
  const { user } = useAuthContext();

  React.useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BOOKS", payload: json });
        // setBooks(json);
      }
    };
    if (user) {
      fetchBooks();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="books">
        {books &&
          books.map((book) => <BookDetails book={book} key={book._id} />)}
      </div>
      <BookForm />
    </div>
  );
};

export default Home;
