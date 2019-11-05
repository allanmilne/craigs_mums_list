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
    fetch(this.props.url)
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
        {this.state.loaded && (
          <AdvertList
            adverts={this.state.adverts}
            handleClick={this.handleClick}
          />
        )}
        {this.state.selectedAdvert && (
          <AdvertDetail selectedAdvert={this.state.selectedAdvert} />
        )}
      </>
    );
  }
}

export default AdvertContainer;
