import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/users.context";

const Navbar = () => {
  const users = useContext(UserContext);
  console.log(users);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Exercise Tracker
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Excercises
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/create">
              Create Excercise Log
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/user">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
