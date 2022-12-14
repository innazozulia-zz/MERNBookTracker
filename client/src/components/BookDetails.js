import { BsTrashFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { MdFindInPage } from "react-icons/md";
import { useAuthContext } from "../hooks/useAuthContext";
import { useBooksContext } from "../hooks/useBooksContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useBooksContext();
  const { user } = useAuthContext();

  const deleteBook = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/books/" + book._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_BOOK", payload: json });
    }
  };
  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p className="description">
        <ImBooks className="icon" />
        <strong>Description: </strong>
        {book.description}
      </p>
      <p className="found-page">
        <MdFindInPage className="icon" />
        <strong>Page: </strong>
        {book.load}
      </p>
      <button className="delete-button" onClick={deleteBook}>
        <BsTrashFill className="delete-btn" /> Delete
      </button>
    </div>
  );
};

export default BookDetails;
