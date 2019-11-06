import React from 'react';
import '../component_style.css';

const AdvertDetail = ({ selectedAdvert }) => {
  const modalContent = selectedAdvert && (
      <div class="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{selectedAdvert.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid selected-advert">
              <div class="row">
                <div className="col-6">
                  <img src={selectedAdvert.image}></img>
                </div>
                <div className="col-6">
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
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
    )

  return (
<<<<<<< HEAD
    <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        {modalContent}
=======
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
>>>>>>> develop
      </div>
    </div>
  );
};

export default AdvertDetail;
