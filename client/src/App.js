import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home.js';
import MyAdverts from './components/MyAdverts.js';

import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route path="/home" component={Home} />
        <Route path="/my-ads" component={MyAdverts} />
        <Redirect from="/" to="/home" />
      </>
    </Router>
  );
}

export default App;
