import React from 'react';

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

  handleSubmit(event) {
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
      })
    })
      .then(res => res.json()) //TODO Log and error and only overwrite the state values when we get a success code.
      .then(this.setState({ title: '', description: '', price: '' }));
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Enter title</label>
          <input
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
            type="text"
          />

          <label htmlFor="description">Enter description</label>
          <input
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            type="text"
          />

          <label htmlFor="price">Enter price</label>
          <input
            id="price"
            name="price"
            value={this.state.price}
            onChange={this.handlePriceChange}
            type="number"
          />

          <button className="submitAdvert" type="submit">
            Send data!
          </button>
        </form>
      </>
    );
  }
}

export default AddItem;
