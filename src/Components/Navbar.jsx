import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Views/CartContext';
import { useUser } from '../Views/UserContext';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout, getProfile } = useUser();
  const formattedTotal = (total || 0).toLocaleString();

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token, getProfile]);

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
          {token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">👤 Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>🚪 Logout</Link>
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
            <Link className="nav-link" to="/cart">🛒 Total: ${formattedTotal}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;