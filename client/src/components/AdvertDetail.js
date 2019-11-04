import React from 'react';

const AdvertDetail = ({ selectedAdvert }) => {
  // if (!selectedAdvert) return null;
  return (
    <div>
      <p>{selectedAdvert.title}</p>
      <p>{selectedAdvert.description}</p>
      <p>{selectedAdvert.price}</p>
      <p>{selectedAdvert._embedded.seller.location}</p>
    </div>
  );
};

export default AdvertDetail;
