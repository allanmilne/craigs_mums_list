import React from 'react';
import AdvertList from './AdvertList.js';
import AdvertDetail from './AdvertDetail.js';

class AdvertContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      adverts: [],
      selectedAdvert: '',
      selectedSeller: ''
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
    const advert = this.state.adverts.find(advert => advert.id === parseInt(id));
    this.setState({
      selectedAdvert: advert,
      selectedSeller: advert._embedded.seller
    })
  }

  render() {
    return (
      <>
        <div>Adverts</div>
        <AdvertList adverts={this.state.adverts} handleClick={this.handleClick}/>
        <AdvertDetail selectedAdvert={this.state.selectedAdvert} selectedSeller={this.state.selectedSeller}/>
      </>
    );
  }
}

export default AdvertContainer;
