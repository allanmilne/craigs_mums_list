import React from 'react';
import '../component_style.css';

const AdvertDetail = ({ selectedAdvert }) => {
  const modalContent = selectedAdvert && (
      <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{selectedAdvert.title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid selected-advert">
              <div class="col-6">
                <img src={selectedAdvert.image}></img>
              </div>
              <div class="col-6">
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
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
    )

  return (
    <div class="modal" id="exampleModal" tabIndex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        {modalContent}
      </div>
    </div>
  );
};

export default AdvertDetail;
