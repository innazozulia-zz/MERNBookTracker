import { ImBooks } from "react-icons/im";
import { MdFindInPage } from "react-icons/md";

const BookDetails = ({ book }) => {
  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p className="description">
        <ImBooks className="icon" />
        <strong>Description: </strong>
        {book.descr}
      </p>
      <p className="found-page">
        <MdFindInPage className="icon" />
        <strong>Page: </strong>
        {book.load}
      </p>
    </div>
  );
};

export default BookDetails;
