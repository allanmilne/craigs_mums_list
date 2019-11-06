import React from 'react';
import '../component_style.css';

const Advert = ({ advert, handleClick }) => {
  return (
    <>
      <div className="card">
        <img src={`/images/${advert.image}`} alt="Image coming soon   ᗧ···ᗣ···ᗣ··" />
        <div className="card-body">
          <p><b>Item Title: </b> {advert.title}</p>
          <p><b>Item Price: </b> £{advert.price}</p>
          <p><b>Item Location: </b> {advert._embedded.seller.location}</p>
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
