import React from 'react';
import AdvertList from './advert/AdvertList.js';
import AdvertDetail from './advert/AdvertDetail.js';
import AddItem from './AddItem.js';

class AdvertContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      adverts: [],
      selectedAdvert: null,
      loaded: false,
      url: 'http://localhost:8080/adverts'
    };
  }

  //'http://localhost:8080/adverts/search/findAdvertBySellerId?sellerId=1'
  componentDidMount() {
    this.getData();
  }

  setLoading = value => {
    this.setState({
      loading: value
    });
  };

  getData = () => {
    this.setLoading(true);
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        this.setState({ adverts: data._embedded.adverts });
        this.setLoading(false);
      });
  };

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
        <AddItem getData={this.getData} />
        <AdvertList
          adverts={this.state.adverts}
          handleClick={this.handleClick}
        />
        {this.state.selectedAdvert && (
          <AdvertDetail selectedAdvert={this.state.selectedAdvert} />
        )}
      </>
    );
  }
}

export default AdvertContainer;
