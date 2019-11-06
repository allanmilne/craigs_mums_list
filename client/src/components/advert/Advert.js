import React from 'react';
import '../component_style.css';

const Advert = ({ advert, handleClick }) => {
  const url = !advert.image ? '/images/placeholder.png' : `/images/${advert.image}` 
  return (   
    <>
      <div className="card">  
        <div className="card-body">
          <img src={url} alt="¯\_(ツ)_/¯"/>
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
