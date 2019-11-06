import React from 'react';
import Advert from './Advert';

class AdvertList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.adverts.map(advert => (
            <div className="col-4" key={advert.id}>
              <Advert advert={advert} handleClick={this.props.handleClick} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AdvertList;
