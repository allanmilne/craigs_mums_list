import React from 'react';

class AddItem extends React.Component {

    constructor(props){
    super(props);
    this.state = {
        title: '',
        category: '',
        description: '',
        image: '',
        price: null,
    }
    
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    

    }

    handleFormSubmit(event) {
        event.preventDefault();
        const data = {
          title: this.state.title,
          category: this.state.category,
          description: this.state.description,
          image: this.state.image,
          price: this.state.price,
        }

        fetch('http://localhost:8080/ads', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .catch(error => console.error())
      }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        })     
    }

    handleCategoryChange(event) {
        this.setState({
            category: event.target.value
        })     
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        })     
    }

    handleImageChange(event) {
        this.setState({
            image: event.target.value
        })     
    }

    handlePriceChange(event) {
        this.setState({
            price: event.target.value
        })     
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="item_title">Item Title</label>
                    <input onChange={this.handleTitleChange} type="text" name="item_title"></input>

                    <label htmlFor="category">Category</label>
                    <select onChange={this.handleCategoryChange} name="category">
                        <option>Toys</option>
                        <option>Cars</option>
                    </select>

                    <label htmlFor="description">Description</label>
                    <input onChange={this.handleDescriptionChange} type="text" name="description"></input>

                    <label htmlFor="image">Image</label>
                    <input onChange={this.handleImageChange} name="image" type="text"></input>

                    <label htmlFor="price">Price</label>
                    <input onChange={this.handlePriceChange} name="price" type="number"></input>

                    <input type="submit" value="Submit" />

                </form>
            </>
        )
    }
}

export default AddItem;