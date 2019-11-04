import React from 'react'

const AdvertDetail = ({selectedAdvert}) => {
  return(
    <div>
      <p>{selectedAdvert.title}</p>
      <p>{selectedAdvert.description}</p>
      <p>{selectedAdvert.price}</p>
      {/* <p>{selectedAdvert.seller.location}</p> */}
    </div>
  )
}


export default AdvertDetail
