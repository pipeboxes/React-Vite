import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn }) => {
  const total = 25000;
  
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">🍕 Pizzería</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">🍕 Home</Link>
          </li>
          {loggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="#">🔓 Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">🔒 Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">🔐 Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">🔐 Register</Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <span className="nav-link">🛒 Total: {total.toLocaleString()}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;