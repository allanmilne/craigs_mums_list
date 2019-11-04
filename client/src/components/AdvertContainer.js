import React from 'react';
import AdvertList from './AdvertList.js';

class AdvertContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      adverts: [],
      selectedAdvert: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/adverts')
      .then(res => res.json())
      .then(result => {
        this.setState({ adverts: result._embedded.adverts });
      });
  }

  handleClick = (id) => {
    this.setState({
      selectedAdvert: id
    })
  }

  render() {
    return (
      <>
        <div>I am the AdvertContainer!</div>
        <AdvertList adverts={this.state.adverts} handleClick={this.handleClick}/>
      </>
    );
  }
}

export default AdvertContainer;
