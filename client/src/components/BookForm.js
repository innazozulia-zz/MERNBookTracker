import React from "react";
import { GiNotebook } from "react-icons/gi";
import { useBooksContext } from "../hooks/useBooksContext";

const BookForm = () => {
  const { dispatch } = useBooksContext();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [load, setLoad] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = { title, description, load };

    const response = await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setDescription("");
      dispatch({ type: "CREATE_BOOK", payload: json });
    }
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <h4>Add a new book</h4>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></input>
      <label htmlFor="load">Page: </label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      ></input>
      <button>
        <GiNotebook className="icon-book-add" />
        Add one book
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BookForm;
