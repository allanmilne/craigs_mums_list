import React from 'react';
import '../component_style.css'

const Advert = ({ advert, handleClick }) => {
  
  return (
    <>
<<<<<<< HEAD
      <div className="card">
        <img src={advert.image} />
        <div className="card-body">
=======
      <div class="card">
      <img src={`/images/${advert.image}`}/>
        <div class="card-body">
>>>>>>> develop
          <p>Item Title: {advert.title}</p>
          <p>Item Price: £{advert.price}</p>
          <p>Item Location: {advert._embedded.seller.location}</p>
          <button
            data-toggle="modal" 
            data-target="#exampleModal"
            onClick={event => handleClick(event.target.value)}
            value={advert.id}
          >
            Detail
          </button>
        </div>
      </div>
    </>
  );
};

export default Advert;
