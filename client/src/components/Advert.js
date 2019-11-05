import React from 'react';

const Advert = ({ advert, handleClick }) => {
  console.log(advert);
  
  return (
    <>
      <p>Item Title: {advert.title}</p>
      <p>Item Price: {advert.price}</p>
      <p>Item Location: {advert._embedded.seller.location}</p>
      <button
        onClick={event => handleClick(event.target.value)}
        value={advert.id}
      >
        Detail
      </button>
    </>
  );
};

export default Advert;
