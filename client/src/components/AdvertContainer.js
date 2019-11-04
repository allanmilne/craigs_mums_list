import React from 'react';
import AdvertList from './AdvertList.js';

class AdvertContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      adverts: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/adverts')
      .then(res => res.json())
      .then(result => {
        this.setState({ adverts: result._embedded.adverts });
      });
  }

  render() {
    return (
      <>
        <div>I am the AdvertContainer!</div>
        <AdvertList adverts={this.state.adverts} />
      </>
    );
  }
}

export default AdvertContainer;
