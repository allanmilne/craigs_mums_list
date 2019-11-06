import React from 'react';
import '../component_style.css';

const Advert = ({ advert, handleClick, embedded }) => {
  const url = !advert.image
    ? '/images/placeholder.png'
    : `/images/${advert.image}`;
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-img-wrapper">
          <img src={url} alt="¯\_(ツ)_/¯"/>
        </div>
          <p><b>Item Title: </b> {advert.title}</p>
          <p><b>Item Price: </b> £{advert.price}</p>
          <p>
            <b>Item Location: </b>{' '}
            {embedded
              ? advert._embedded.seller.location
              : advert.seller.location}
          </p>
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
