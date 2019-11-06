import React from "react";
import AdvertList from "./search/AdvertList";
import AdvertDetail from "./search/AdvertDetail";

class Home extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      adverts: [],
      searchTerm: "",
      searchCategory: "",
      _isLoaded: false,
      selectedAdvert: null
    };
  }

  handleOnSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleCategoryChange = event => {
    this.setState({
      searchCategory: event.target.value.toUpperCase()
    });
  }

  getData = params => {
    this.setState({ _isLoaded: false });
    fetch(`http://localhost:8080/adverts/custom-search?${params}`)
      .then(res => res.json())
      .then(searchResult => {
        if (this._isMounted) {
          this.setState({
            adverts: searchResult,
            _isLoaded: true
          });
        }
      })
      .catch(
        console.log("get data failed")
      )
  };

  handleClick = id => {
    const advert = this.state.adverts.find(
      advert => advert.id === parseInt(id)
    );
    this.setState({
      selectedAdvert: advert
    });
  };

  createParams = () => {
    return `id=1&title=${this.state.searchTerm}&category=${this.state.searchCategory}`;
  };

  handleSubmit = event => {
    event.preventDefault();
    const params = this.createParams();
    this.getData(params);
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleOnSearchTermChange}
            placeholder="Search for..."
          />
          <label>
            <select onChange={this.handleCategoryChange}>
              <option value="automobiles">Automobiles</option>
              <option value="electronics">Electronics</option>
              <option value="home">Home</option>
              <option value="freebies">Freebies</option>
              <option value="appliances">Appliances</option>
              <option value="toys">Toys</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state._isLoaded ? (
          <AdvertList
            adverts={this.state.adverts}
            handleClick={this.handleClick}
          />
        ) : (
          <p>Loading</p>
        )}
        {this.state.selectedAdvert && (
          <AdvertDetail selectedAdvert={this.state.selectedAdvert} />
        )}
      </>
    );
  }
}

export default Home;
