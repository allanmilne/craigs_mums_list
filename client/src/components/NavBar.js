import React from 'react';
import { ReactComponent as Logo } from '../assets/shopping-cart.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home" className="navbar-brand">
        <Logo width="30" height="30" alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/home" className="nav-item nav-link active">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link to="/search" className="nav-item nav-link">
            Search
          </Link>
          <Link to="/my-ads" className="nav-item nav-link">
            My Ads
          </Link>
          <Link to="/settings" className="nav-item nav-link">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
