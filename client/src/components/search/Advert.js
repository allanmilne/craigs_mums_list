import React from 'react';
import '../component_style.css'

const Advert = ({ advert, handleClick }) => {
  
  return (
    <>
      <div class="card">
        <img src={`/images/${advert.image}`} alt="" />
        <div class="card-body">
          <p>Item Title: {advert.title}</p>
          <p>Item Price: {advert.price}</p>
          <p>Item Location: {advert.seller.location}</p>
          <button
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
