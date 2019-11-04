import React from 'react';

<<<<<<< HEAD
const AdvertDetail = ({ selectedAdvert }) => {
  // if (!selectedAdvert) return null;
  return (
    <div>
      <p>{selectedAdvert.title}</p>
      <p>{selectedAdvert.description}</p>
      <p>{selectedAdvert.price}</p>
      <p>{selectedAdvert._embedded.seller.location}</p>
=======
const AdvertDetail = ({selectedAdvert, selectedSeller}) => {
  return(
    <div>
      <p>Title: {selectedAdvert.title}</p>
      <p>Description: {selectedAdvert.description}</p>
      <p>Price: £{selectedAdvert.price}</p>
      <p>Date Listed: {selectedAdvert.dateListed}</p>
      <p>Location: {selectedSeller.location}</p>
      <p>Contact: {selectedSeller.firstName}</p>
      <p>Phone: {selectedSeller.phoneNumber}</p>     
>>>>>>> b19f6ce25013db3255b24a007620ad186d3796e1
    </div>
  );
};

export default AdvertDetail;
