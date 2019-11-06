import React from 'react';
import '../component_style.css';

const AdvertDetail = ({ selectedAdvert }) => {


  return (
    <div class="container selected-advert">
      <div class="row">
        <div class="col">
          {/* <img src={selectedAdvert.image}></img> */}
          <img src={`/images/${selectedAdvert.image}`}/>
        </div>
        <div class="col">
          <p>{selectedAdvert.title}</p>
          <p>Description: {selectedAdvert.description}</p>
          <p>Price: £{selectedAdvert.price}</p>
          <p>Date Listed: {selectedAdvert.dateListed}</p>
          <p>Category: {selectedAdvert.category}</p>
          <p>Location: {selectedAdvert._embedded.seller.location}</p>
          <p>Contact: {selectedAdvert._embedded.seller.firstName}</p>
          <p>Phone: {selectedAdvert._embedded.seller.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};



export default AdvertDetail;
