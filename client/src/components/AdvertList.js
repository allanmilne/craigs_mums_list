import React from 'react';
import Advert from './Advert';

class AdvertList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.adverts.map(advert => (
          <li key={advert.id}>
            <Advert advert={advert} handleClick={this.props.handleClick}/>
          </li>
        ))}
      </ul>
    );
  }
}

export default AdvertList;
