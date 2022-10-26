import React from "react";
import { Link } from "react-router-dom";
import { BsBookmarksFill } from "react-icons/bs";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };
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
        {user && (
          <div>
            {user.email}
            <button onClick={handleLogout}>Log out</button>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </nav>
    </header>
  );
};
export default NavBar;
