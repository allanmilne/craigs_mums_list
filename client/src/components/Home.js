import React from 'react';
import { Link } from 'react-router-dom'
import './component_style.css'

const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Craig's Mum's List</h1>
          <p className="lead">Every site needs a jumbotron!</p>
          <hr className="my-4" />
          <p>Looking for something unique? A hammer say?</p>
          <Link to="/search" className="btn btn-secondary btn-lg" href="#" role="button">Search</Link>
        </div>
        <div className="jumbo-img"></div>
      </div>

    </>
  )
};

export default Home;
