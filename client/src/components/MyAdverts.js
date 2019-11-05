import React, { Component } from 'react';
import AdvertContainer from './AdvertContainer';

class MyAdverts extends Component {
  constructor() {
    super();
    this.state = {
      url:
        'http://localhost:8080/adverts/search/findAdvertBySellerId?sellerId=1'
    };
  }

  render() {
    return <AdvertContainer url={this.state.url} />;
  }
}

export default MyAdverts;
