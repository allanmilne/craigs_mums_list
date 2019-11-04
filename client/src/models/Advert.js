class Advert {
  constructor(props) {
    this.id = props.id;
    this.image = props.image;
    this.description = props.description;
    this.title = props.title;
    this.price = props.price;
    this.dateListed = props.dateListed;
    this.sold = props.sold;
    this.sellerId = props.sellerId;
  }
}

export default Advert;
