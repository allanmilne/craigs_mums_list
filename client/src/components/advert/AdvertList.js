import React from 'react';
import Advert from './Advert';
import '../component_style.css';

class AdvertList extends React.Component {
  render() {
    return (
      <div className="container advert-list-container">
        <div className="row">
          {this.props.adverts.map(advert => (
            <div className="col-lg-4" key={advert.id}>
              <Advert advert={advert} handleClick={this.props.handleClick} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AdvertList;
