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
        <Route path="/" component={Home} />
        <AdvertContainer />
      </>
    </Router>
  );
}

export default App;
