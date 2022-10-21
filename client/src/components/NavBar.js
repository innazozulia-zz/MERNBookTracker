import React from "react";
import { Link } from "react-router-dom";
import { BsBookmarksFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="book-title">
            <BsBookmarksFill />
            My Books
          </h1>
        </Link>
      </div>
    </header>
  );
};
export default NavBar;
