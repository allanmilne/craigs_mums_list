import React from 'react';
import AdvertList from './AdvertList.js';

class AdvertContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      adverts: [
        {
          id: 0,
          seller: 'Jordan',
          title: 'chocolate',
          price: 2000
        },
        {
          id: 1,
          seller: 'Allan',
          title: 'iPhonw',
          price: 70000
        },
        {
          id: 2,
          seller: 'Shauna',
          title: 'table',
          price: 5000
        },
        {
          id: 3,
          seller: 'Graham',
          title: 'burger',
          price: 1000
        }
      ]
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/adverts')
      .then(res => res.json())
      .then(result => this.setState({ adverts: result }));
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
