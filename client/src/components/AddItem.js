import React from 'react';
import './component_style.css'

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      description: '',
      image: '',
      price: '',
      seller: 'http://localhost:8080/sellers/1'
    };
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleCategoryChange = event => {
    this.setState({
      category: event.target.value
    });
  };

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleImageChange = event => {
    this.setState({
      image: event.target.value
    });
  };

  handlePriceChange = event => {
    this.setState({
      price: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:8080/adverts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        price: this.state.price,
        seller: this.state.seller
        // image: this.state.image,
        // category: this.state.category
      })
    })
      .then(res => res.json())
      .then(() => this.props.getData())
      .then(
        this.setState({ title: '', description: '', price: '', image: '' })
      );
  };

  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-10">
            <h1 class="form-heading">Create a new listing</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-5">
              <label htmlFor="title">Enter title</label>
            </div>
            <div className="col-5">
              <input
                id="title"
                name="title"
                value={this.state.title}
                onChange={this.handleTitleChange}
                type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <label htmlFor="image">Enter Image Link</label>
            </div>
            <div className="col-5">
              <input
                id="image"
                name="image"
                value={this.state.image}
                onChange={this.handleImageChange}
                type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <label htmlFor="category">Enter title</label>
            </div>
            <div className="col-5">
              <select
                onChange={this.handleCategoryChange}
                value={this.state.category}
              >
                <option>Automobiles</option>
                <option>Toys</option>
                <option>Home</option>
                <option>Electronics</option>
                <option>Freebies</option>
                <option>Appliances</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <label htmlFor="description">Enter description</label>
            </div>
            <div className="col-5">
              <input
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <label htmlFor="price">Enter price</label>
            </div>
            <div className="col-5">
              <input
                id="price"
                name="price"
                value={this.state.price}
                onChange={this.handlePriceChange}
                type="number"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <button className="submitAdvert" type="submit">
                Send data!
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItem;
