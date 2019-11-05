import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adverts: [],
      searchTerm: "",
      loaded: false
    };
  }

  // const options = adverts.map((advert, id) => {
  //   return <option value={advert} key={id}>{advert.category}</option>
  // })

  handleOnSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.state.adverts.map(advert, id) => {
      if (advert.includes(this.state.searchTerm)){
        return advert
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/adverts/search/findAdvertBySellerId?sellerId=1')
      .then(res => res.json())
      .then(result => {
        this.setState({ adverts: result._embedded.adverts, loaded: true });
      });
  }

  // function handleSubmit(event) {
  //   event.preventDefault()
  // }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleOnSearchTermChange}
            placeholder="Search for..."
          />
          {/* <label>
            <select value={this.state.value}>
              <option value="automobiles">Automobiles</option>
              <option value="electronics">Electronics</option>
              <option value="home">Home</option>
              <option value="freebies">Freebies</option>
              <option value="appliances">Appliances</option>
              <option value="toys">Toys</option>
            </select>
          </label> */}
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Home;