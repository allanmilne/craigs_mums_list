import React from 'react';
import '../component_style.css';

const AdvertDetail = ({ selectedAdvert }) => {


  return (
    <div class="container selected-advert">
      <div class="row">
        <div class="col">
          <img src={selectedAdvert.image}></img>
        </div>
        <div class="col">
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
