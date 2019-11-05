import React from 'react';
import { ReactComponent as Logo } from '../assets/shopping-cart.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home" class="navbar-brand">
        <Logo width="30" height="30" alt="" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/home" class="nav-item nav-link active">
            Home <span class="sr-only">(current)</span>
          </Link>
          <Link to="/watchlist" class="nav-item nav-link">
            Watchlist
          </Link>
          <Link to="/my-ads" class="nav-item nav-link">
            My Ads
          </Link>
          <Link to="/settings" class="nav-item nav-link">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
