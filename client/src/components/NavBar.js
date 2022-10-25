import React from "react";
import { Link } from "react-router-dom";
import { BsBookmarksFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { HiOutlineUserPlus } from "react-icons/hi2";

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
      <nav>
        <div>
          <Link to="/login" className="login-form">
            Login <FiLogIn className="login-title" />
          </Link>
          <Link to="/signup">
            Signup <HiOutlineUserPlus className="signup-title" />
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
