import React from 'react';
import { ReactComponent as Logo } from '../assets/shopping-cart.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" href="#">
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
          <Link to="/" class="nav-item nav-link active" href="#">
            Home <span class="sr-only">(current)</span>
          </Link>
          <Link to="/watchlist" class="nav-item nav-link" href="#">
            Watchlist
          </Link>
          <Link to="/myads" class="nav-item nav-link" href="#">
            My Ads
          </Link>
          <Link to="/settings" class="nav-item nav-link" href="#">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
