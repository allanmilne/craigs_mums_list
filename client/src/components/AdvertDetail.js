import React from 'react'

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
    </div>
  )
}


export default AdvertDetail
