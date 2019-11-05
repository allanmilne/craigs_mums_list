import React from 'react';


class AddItem extends React.Component {

    constructor(props){
    super(props);
    this.state = {
        title: '',
        category: '',
        description: '',
        image: '',
        price: ''
    }
    
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    

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

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:8080/adverts', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: this.state.title,
            // category: this.state.category,
            description: this.state.description,
            price: this.state.price,
          })
      });
        const title = this.state.title.trim();
        // const category = this.state.category.trim();
        const description = this.state.description.trim();
        const price = this.state.price.trim();
        if (!title || !description || !price) {
            return
          }
        this.props.onAdvertSubmit({title: title, description: description, price: price})
        
        this.setState({title: '', description: '', price: ''});
    }






    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="title">Enter title</label>
                  <input id="title" name="title" value={this.state.title} onChange={this.handleTitleChange} type="text"/>
                  

                  <label htmlFor="description">Enter description</label>
                  <input id="description" name="description" value={this.state.description} onChange={this.handleDescriptionChange} type="text"/>

                  <label htmlFor="price">Enter price</label>
                  <input id="price" name="price" value={this.state.price} onChange={this.handlePriceChange} type="number"/>

                  <button className="submitAdvert" type="submit">Send data!</button>
                </form>
            </>
        );
    }
}

export default AddItem;