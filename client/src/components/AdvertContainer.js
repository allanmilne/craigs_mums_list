import React from 'react';
import AdvertList from './AdvertList.js';
import AdvertDetail from './AdvertDetail.js';

class AdvertContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      adverts: [],
<<<<<<< HEAD
      selectedAdvert: null,
      loaded: false
=======
      selectedAdvert: '',
      selectedSeller: ''
>>>>>>> b19f6ce25013db3255b24a007620ad186d3796e1
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
<<<<<<< HEAD
      selectedAdvert: advert
    });
  };
=======
      selectedAdvert: advert,
      selectedSeller: advert._embedded.seller
    })
  }
>>>>>>> b19f6ce25013db3255b24a007620ad186d3796e1

  render() {
    return (
      <>
        <div>Adverts</div>
<<<<<<< HEAD
        {this.state.loaded ? (
          <AdvertList
            adverts={this.state.adverts}
            handleClick={this.handleClick}
          />
        ) : null}
        {this.state.selectedAdvert ? (
          <AdvertDetail selectedAdvert={this.state.selectedAdvert} />
        ) : null}
=======
        <AdvertList adverts={this.state.adverts} handleClick={this.handleClick}/>
        <AdvertDetail selectedAdvert={this.state.selectedAdvert} selectedSeller={this.state.selectedSeller}/>
>>>>>>> b19f6ce25013db3255b24a007620ad186d3796e1
      </>
    );
  }
}

export default AdvertContainer;
