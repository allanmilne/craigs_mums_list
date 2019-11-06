import React from 'react';
import '../component_style.css';

const AdvertDetail = ({ selectedAdvert }) => {
  return (
    <div className="container selected-advert">
      <div className="row">
        <div className="col">
          <img src={`/images/${selectedAdvert.image}`} alt=""></img>
        </div>
        <div className="col">
          <p>{selectedAdvert.title}</p>
          <p>Description: {selectedAdvert.description}</p>
          <p>Price: £{selectedAdvert.price}</p>
          <p>Date Listed: {selectedAdvert.dateListed}</p>
          <p>Category: {selectedAdvert.category}</p>
          <p>Location: {selectedAdvert.seller.location}</p>
          <p>Contact: {selectedAdvert.seller.firstName}</p>
          <p>Phone: {selectedAdvert.seller.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertDetail;
