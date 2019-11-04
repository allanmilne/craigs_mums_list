import React from 'react';
import AdvertList from './AdvertList.js';
import AdvertDetail from './AdvertDetail.js';

class AdvertContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      adverts: [],
      selectedAdvert: null,
      loaded: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/adverts')
      .then(res => res.json())
      .then(result => {
        this.setState({ adverts: result._embedded.adverts, loaded: true });
      });
  }

  handleClick = id => {
    const advert = this.state.adverts.find(
      advert => advert.id === parseInt(id)
    );
    this.setState({
      selectedAdvert: advert
    });
  };

  render() {
    return (
      <>
        <div>Adverts</div>
        {this.state.loaded ? (
          <AdvertList
            adverts={this.state.adverts}
            handleClick={this.handleClick}
          />
        ) : null}
        {this.state.selectedAdvert ? (
          <AdvertDetail selectedAdvert={this.state.selectedAdvert} />
        ) : null}
      </>
    );
  }
}

export default AdvertContainer;
