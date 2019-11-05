import React from 'react';
import AdvertContainer from './components/AdvertContainer';
import Navbar from './components/NavBar';
import Home from './components/Home.js';

import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route path="/home" component={Home} />
        <Route path="/my-ads" component={AdvertContainer} />
      </>
    </Router>
  );
}

export default App;
