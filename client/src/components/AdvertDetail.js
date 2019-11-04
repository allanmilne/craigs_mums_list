import React from 'react';

const AdvertDetail = ({ selectedAdvert }) => {
  // if (!selectedAdvert) return null;
  return (
    <div>
      <p>{selectedAdvert.title}</p>
      <p>{selectedAdvert.image}</p>
      <p>Description: {selectedAdvert.description}</p>
      <p>Price: £{selectedAdvert.price}</p>
      <p>Date Listed: {selectedAdvert.dateListed}</p>
      <p>Category: {selectedAdvert.category}</p>
      <p>Location: {selectedAdvert._embedded.seller.location}</p>
      <p>Contact: {selectedAdvert._embedded.seller.firstName}</p>
      <p>Phone: {selectedAdvert._embedded.seller.phoneNumber}</p>
    </div>
  );
};

export default AdvertDetail;
