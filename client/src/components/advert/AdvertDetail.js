import React from 'react';
import '../component_style.css';

const AdvertDetail = ({ selectedAdvert, embedded }) => {
  const modalContent = selectedAdvert && (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{selectedAdvert.title}</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="container-fluid selected-advert">
          <div className="row">
            <div className="col-6">
              <img src={`/images/${selectedAdvert.image}`} alt=""></img>
            </div>
            <div className="col-6">
              <p>
                <b>Description: </b>
                {selectedAdvert.description}
              </p>
              <p>
                <b>Price: </b>£{selectedAdvert.price}
              </p>
              <p>
                <b>Date Listed: </b>
                {selectedAdvert.dateListed}
              </p>
              <p>
                <b>Location: </b>
                {embedded
                  ? selectedAdvert._embedded.seller.location
                  : selectedAdvert.seller.location}
              </p>
              <p>
                <b>Contact: </b>
                {embedded
                  ? selectedAdvert._embedded.seller.firstName
                  : selectedAdvert.seller.firstName}
              </p>
              <p>
                <b>Phone: </b>
                {embedded
                  ? selectedAdvert._embedded.seller.phoneNumber
                  : selectedAdvert.seller.phoneNumber}
              </p>
              <p>
                <b>Category: </b>
                {selectedAdvert.category}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        {modalContent}
      </div>
    </div>
  );
};

export default AdvertDetail;
